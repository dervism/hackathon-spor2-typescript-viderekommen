// Parse vitest's JUnit output (./junit-report.xml), find tasks where ALL
// tests are green, fetch a GitHub OIDC token, and POST results to the
// leaderboard. Designed never to fail the workflow.

import {readFile} from 'node:fs/promises';

const LEADERBOARD_URL = 'https://leaderboard.digisis.org';
const AUDIENCE = LEADERBOARD_URL;
const REPORT_PATH = 'junit-report.xml';

const args = parseArgs();
const track = Number.parseInt(args.track ?? '0', 10);
if (!Number.isFinite(track) || track < 1) {
  console.error('Missing or invalid --track');
  process.exit(0);
}

const completed = await collectGreenTasks();
if (completed.size === 0) {
  console.log('No tasks fully passed yet — nothing to submit.');
  process.exit(0);
}

const tasks = [...completed].sort((a, b) => a - b);
console.log(`Tasks fully green this run: ${tasks.join(', ')}`);

const oidcToken = await getOidcToken();
if (!oidcToken) {
  console.log('No OIDC token available — skipping submit.');
  process.exit(0);
}

const res = await fetch(`${LEADERBOARD_URL}/api/submit`, {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
    authorization: `Bearer ${oidcToken}`,
  },
  body: JSON.stringify({ track, tasks }),
});
const body = await res.text();
console.log(`Leaderboard responded: HTTP ${res.status} ${body}`);
process.exit(0);

// ─────────────────────────────────────────────────────────────────────

async function collectGreenTasks() {
  let xml;
  try {
    xml = await readFile(REPORT_PATH, 'utf8');
  } catch {
    console.log(`No ${REPORT_PATH} — did vitest run?`);
    return new Set();
  }

  // Each <testsuite> represents one test file. We aggregate per task
  // number (extracted from the `name` attribute of each testsuite).
  const perTask = new Map(); // task -> { tests, failures, errors, skipped }

  const suiteRegex = /<testsuite\b[^>]*\/>|<testsuite\b[^>]*>[\s\S]*?<\/testsuite>/g;
  for (const match of xml.matchAll(suiteRegex)) {
    const tag = match[0];
    const open = tag.match(/<testsuite\b[^>]*>/);
    if (!open) continue;
    const head = open[0];

    const name = strAttr(head, 'name') ?? '';
    const taskNum = taskFromName(name);
    if (taskNum === null) continue;

    const counts = {
      tests: intAttr(head, 'tests'),
      failures: intAttr(head, 'failures'),
      errors: intAttr(head, 'errors'),
      skipped: intAttr(head, 'skipped'),
    };

    const acc = perTask.get(taskNum) ?? { tests: 0, failures: 0, errors: 0, skipped: 0 };
    acc.tests += counts.tests;
    acc.failures += counts.failures;
    acc.errors += counts.errors;
    acc.skipped += counts.skipped;
    perTask.set(taskNum, acc);
  }

  const completed = new Set();
  for (const [task, c] of perTask) {
    if (c.tests > 0 && c.failures === 0 && c.errors === 0 && c.skipped === 0) {
      completed.add(task);
    }
  }
  return completed;
}

function taskFromName(name) {
  // Match `oppgaveNN` anywhere in the file path used as testsuite name.
  const m = name.match(/oppgave(\d+)/);
  return m ? Number.parseInt(m[1], 10) : null;
}

function intAttr(tag, name) {
  const m = tag.match(new RegExp(`\\b${name}="(\\d+)"`));
  return m ? Number.parseInt(m[1], 10) : 0;
}

function strAttr(tag, name) {
  const m = tag.match(new RegExp(`\\b${name}="([^"]*)"`));
  return m ? m[1] : null;
}

async function getOidcToken() {
  const requestToken = process.env.ACTIONS_ID_TOKEN_REQUEST_TOKEN;
  const requestUrl = process.env.ACTIONS_ID_TOKEN_REQUEST_URL;
  if (!requestToken || !requestUrl) {
    console.error('Missing ACTIONS_ID_TOKEN_REQUEST_* env. Set permissions: id-token: write in the workflow.');
    return null;
  }
  const url = `${requestUrl}&audience=${encodeURIComponent(AUDIENCE)}`;
  const res = await fetch(url, {
    headers: { authorization: `bearer ${requestToken}` },
  });
  if (!res.ok) {
    console.error(`OIDC token request failed: HTTP ${res.status}`);
    return null;
  }
  const json = await res.json();
  return json.value;
}

function parseArgs() {
  const out = {};
  const argv = process.argv.slice(2);
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg.startsWith('--')) {
      out[arg.slice(2)] = argv[++i];
    }
  }
  return out;
}
