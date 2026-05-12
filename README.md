# Spor 2 — Viderekommen — TypeScript

**Tema:** Foreldrepenger-saksbehandling hos Direktoratet for Digital Saksbehandling (DDS).

I dette sporet bygger du opp et saksbehandlingssystem for foreldrepenger-søknader bit for bit.
Du kaller en ekstern API for fnr-validering, implementerer foreldrepenger-regler fra NAV,
og åpner det hele opp som et REST-API på slutten.

## Slik kommer du i gang

1. **Node.js 25** og **npm** må være installert.
2. Åpne prosjektet i din favoritt-editor (VS Code, WebStorm, ...).
3. Installer avhengighetene:
   ```
   npm install
   ```
4. Kjør alle tester én gang slik at du ser dem feile (rødt):
   ```
   npm test
   ```
5. Start med oppgave 1 (`src/oppgave01/fnr-validator.ts`), bytt ut
   `TODO`-kroppen med din egen løsning, og kjør testen igjen til den
   blir grønn.
6. Gjenta for oppgave 1, 3, 4, ... Oppgave 15 er en bonus-oppgave for
   de som blir ferdige før tiden.

Hver oppgavemappe har en egen `HELP.md` med korte hint hvis du står fast.

## Stack

- Node.js 25 + TypeScript 6 (strict)
- [Hono](https://hono.dev) — REST framework (oppgavene 12–15)
- [zod](https://zod.dev) — input-validering (oppgave 14)
- [vitest](https://vitest.dev) — testkjører
- [@navikt/fnrvalidator](https://www.npmjs.com/package/@navikt/fnrvalidator) — lokal stub for fnr-validering i tester

## Domenetyper

`src/domain/foreldrepenger-soknad.ts` definerer `ForeldrepengerSoknad`-typen
og fabrikkfunksjonen `lagSoknad()` (verdiobjekt med validering).
`src/domain/fodselsnummer.ts` har et brand-type for fnr.
`src/domain/inntektskategori.ts` har den ferdig implementerte
kategoriseringen `kategoriAv(manedslonn)`.

## Oppgaver

Stigende vanskelighet. Oppgave 15 er bonus.

### Nivå 1 — Domeneregler for foreldrepenger

| # | Oppgave | Poeng |
|---|---|---|
| 1 | Opptjeningskrav-sjekk (6 av 10 mnd + ½G) | 20 |
| 2 | Beregningsgrunnlag (snitt × 12, 6G-cap, varianssjekk) | 20 |

### Nivå 2 — Innlesing og defensiv kode

| # | Oppgave | Poeng |
|---|---|---|
| 3 | Les søknader fra CSV | 15 |
| 4 | Tell og logg ugyldige | 15 |

### Nivå 3 — Array-metoder og rapportering

| # | Oppgave | Poeng |
|---|---|---|
| 5 | Filtrér berettigede | 15 |
| 6 | Statistikk per inntektskategori | 15 |
| 7 | Grupper og sorter på postnummer | 15 |
| 8 | Topp-3 inntekt per postnummer | 15 |

### Nivå 4 — Datastruktur

| # | Oppgave | Poeng |
|---|---|---|
| 9 | In-memory søknadsregister | 20 |

### Nivå 5 — REST og JSON

| # | Oppgave | Poeng |
|---|---|---|
| 10 | Serialiser ForeldrepengerSoknad til JSON manuelt | 15 |
| 11 | GET /soknader | 15 |
| 12 | GET /soknader/:fnr | 15 |
| 13 | GET /soknader/filter?minInntekt=X | 15 |
| 14 | POST /soknader med zod-validering | 20 |

### Bonus — Avansert

| # | Oppgave | Poeng |
|---|---|---|
| 15 | Kvote-allokering (mor / far / felles + flerbarnsdager) | 30 |

**Sum:** 260 poeng over 15 oppgaver (230 uten bonus).

## Eksterne avhengigheter

- **g.nav.no** — gir dagens grunnbeløp; brukes som parameter til oppgave 2.

## Leaderboard

Hver gang du **pusher kode**, kjører GitHub Actions testene dine og
oppdaterer poengene dine på [leaderboard.digisis.org](https://leaderboard.digisis.org)
(1–3 minutter forsinkelse). En oppgave teller når **alle testene** for
den er grønne — delvise resultater gir 0 poeng.

Vitest skriver et JUnit-rapport som scriptet i
`.github/scripts/submit.mjs` parser og sender til leaderboarden.

## Hono-oppgavene (12–15)

For oppgavene 12–15 mounter hver oppgave en sub-app på en delt Hono-app
i `src/app.ts`. Tester bruker `app.request(...)` — ingen HTTP-server
trenger å starte.

Lokal kjøring:

```
npm run dev
```

Test fra terminalen:

```
curl http://localhost:8787/soknader
curl http://localhost:8787/soknader/01059010006
curl "http://localhost:8787/soknader/filter?minInntekt=30000"
```

## Spilleregler

- Det er lov å spørre. Det er forventet å spørre.
- Det er lov å samarbeide og hjelpe sidemannen.
- Hopp over en oppgave hvis den henger seg fast — kom tilbake til den senere.

Lykke til!
