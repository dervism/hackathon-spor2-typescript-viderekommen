import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {describe, expect, test} from 'vitest';
import {tellUgyldige} from './ugyldige-teller';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const testfil = path.join(__dirname, '..', 'oppgave03', 'soknader.csv');

describe('Oppgave 4 — Tell ugyldige', () => {
  test('teller 15 linjer', () => {
    expect(tellUgyldige(testfil).totalt).toBe(15);
  });

  test('teller 10 gyldige', () => {
    expect(tellUgyldige(testfil).gyldige).toBe(10);
  });

  test('teller 5 ugyldige', () => {
    expect(tellUgyldige(testfil).ugyldige).toBe(5);
  });

  test('gyldige + ugyldige = totalt', () => {
    const r = tellUgyldige(testfil);
    expect(r.gyldige + r.ugyldige).toBe(r.totalt);
  });
});
