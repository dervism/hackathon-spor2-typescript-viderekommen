import {Hono} from 'hono';
import type {SoknadsRegister} from '../oppgave09/soknads-register.js';

/**
 * Oppgave 11 — GET /soknader (15 poeng)
 *
 * Returner alle soknader i registeret som JSON. Du gjorde
 * JSON-serialiseringen selv i oppgave 10.
 */
export function lagSoknaderAlleApp(register: SoknadsRegister) {
  const app = new Hono();

  app.get('/soknader', (c) => {
    // TODO
    throw new Error('Oppgave 11 — ikke implementert ennå');
  });

  return app;
}
