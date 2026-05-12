import {Hono} from 'hono';
import {z} from 'zod';
import type {SoknadsRegister} from '../oppgave09/soknads-register.js';

/**
 * Oppgave 14 — POST /soknader med zod-validering (20 poeng)
 *
 * Implementer POST /soknader. Gyldig request gir 201 Created med en
 * Location-header. Ugyldig fnr (passerer regex men feiler Mod-11)
 * skal gi 400 Bad Request.
 *
 * Bruk schemaet `opprettSoknadSchema` til å validere requesten:
 *   • fnr: 11 sifre (regex)
 *   • fornavn / etternavn: ikke-tomme strenger
 *   • alder / manedsinntekt: heltall ≥ 0
 *   • postnummer: 4 sifre
 *
 * Mod-11-validering skjer i domenet — `lagFodselsnummer(...)` kaster når
 * sjekken feiler. Den skal fanges og oversettes til 400.
 */
export const opprettSoknadSchema = z.object({
  fnr: z.string().regex(/^\d{11}$/, 'fnr må være 11 sifre'),
  fornavn: z.string().min(1),
  etternavn: z.string().min(1),
  alder: z.number().int().min(0),
  postnummer: z.string().regex(/^\d{4}$/, 'postnummer må være 4 sifre'),
  manedsinntekt: z.number().int().min(0),
});

export function lagSoknaderOpprettApp(register: SoknadsRegister) {
  const app = new Hono();

  app.post('/soknader', async (c) => {
    // TODO: parse body, valider med opprettSoknadSchema, opprett ForeldrepengerSoknad,
    //       lagre, returner 201 med Location-header.
    //       Ugyldig schema eller Mod-11-feil → 400 Bad Request.
    throw new Error('Oppgave 14 — ikke implementert ennå');
  });

  return app;
}
