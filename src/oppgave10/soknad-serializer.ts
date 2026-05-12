import type {ForeldrepengerSoknad} from '../domain/foreldrepenger-soknad.js';

/**
 * Oppgave 10 — Serialiser ForeldrepengerSoknad til JSON manuelt (15 poeng)
 *
 * Hono serialiserer automatisk for deg via `c.json(...)`, men her skal
 * du gjøre det selv. Det hjelper deg å forstå *hva* framework gjør
 * når du møter en bug eller skal tilpasse output i fremtiden.
 *
 * Resultatet skal være gyldig JSON som inneholder alle feltene fra ForeldrepengerSoknad.
 * Eksempel:
 *
 *   {"fnr":"01059010006","fornavn":"Aisha","etternavn":"Hassan",
 *    "alder":34,"postnummer":"0560","manedsinntekt":32000}
 */
export function tilJson(soknad: ForeldrepengerSoknad): string {
  // TODO
  throw new Error('Oppgave 10 — ikke implementert ennå');
}
