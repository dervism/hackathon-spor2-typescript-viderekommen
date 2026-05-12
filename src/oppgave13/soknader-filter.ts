import {Hono} from 'hono';
import type {SoknadsRegister} from '../oppgave09/soknads-register.js';

/**
 * Oppgave 13 — GET /soknader/filter?minInntekt=X (15 poeng)
 *
 * Returner kun de sakene der månedsinntekten er minst `minInntekt`.
 * Verdien sendes som query-parameter. Hvis parameteret mangler, bruk 0
 * som default (returner alle).
 *
 * Eksempel:
 *   GET /soknader/filter?minInntekt=30000  → soknader med månedsinntekt ≥ 30 000
 */
export function lagSoknaderFilterApp(register: SoknadsRegister) {
  const app = new Hono();

  app.get('/soknader/filter', (c) => {
    // TODO
    throw new Error('Oppgave 13 — ikke implementert ennå');
  });

  return app;
}
