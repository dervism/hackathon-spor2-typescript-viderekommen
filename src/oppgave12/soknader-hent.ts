import {Hono} from 'hono';
import type {SoknadsRegister} from '../oppgave09/soknads-register.js';

/**
 * Oppgave 12 — GET /soknader/:fnr (15 poeng)
 *
 * Returner saken som tilhører gitt fnr — eller 404 Not Found hvis ingen
 * soknad finnes. Bruk `c.json(...)` for treff og `c.notFound()` (eller
 * `c.json(..., 404)`) når intet finnes.
 */
export function lagSoknaderHentApp(register: SoknadsRegister) {
  const app = new Hono();

  app.get('/soknader/:fnr', (c) => {
    // TODO: slå opp i registeret. Hvis funnet → 200 OK med soknad,
    //       hvis ikke → 404 Not Found.
    throw new Error('Oppgave 12 — ikke implementert ennå');
  });

  return app;
}
