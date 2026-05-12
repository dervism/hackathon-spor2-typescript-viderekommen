import type {ForeldrepengerSoknad} from '../domain/foreldrepenger-soknad.js';

/**
 * Oppgave 8 — Topp-3 inntekt per postnummer (15 poeng)
 *
 * For hvert postnummer, returner de tre sakene med høyest månedsinntekt
 * (fallende rekkefølge). Hvis det er færre enn tre soknader i et postnummer,
 * returner alle.
 *
 * Bruk array-metoder. Postnummer med 0 soknader skal ikke være med.
 */
export function topp3PerPostnummer(soknader: ReadonlyArray<ForeldrepengerSoknad>): Map<string, ForeldrepengerSoknad[]> {
  // TODO: grupper på postnummer, sortér hver gruppe synkende på månedsinntekt,
  //       og behold opptil 3 elementer.
  throw new Error('Oppgave 8 — ikke implementert ennå');
}
