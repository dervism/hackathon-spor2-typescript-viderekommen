import type {ForeldrepengerSoknad} from '../domain/foreldrepenger-soknad.js';

/**
 * Oppgave 3 — Les soknader fra CSV (15 poeng)
 *
 * Format (én header-linje, deretter én soknad per linje):
 *   fnr,fornavn,etternavn,alder,postnummer,manedsinntekt
 *
 * Krav:
 *   • Returner kun gyldige soknader (hvor alle felter kan parses og
 *     hvor `lagSoknad`-funksjonen ikke kaster Error).
 *   • Linjer med ugyldig fnr, blanke tekstfelt eller negative tall
 *     hoppes over uten å kaste Error.
 */
export function lesCsv(csvPath: string): ForeldrepengerSoknad[] {
  // TODO: les linjene, parse hver linje til en ForeldrepengerSoknad (eller hopp over),
  //       og returner arrayet av gyldige soknader.
  throw new Error('Oppgave 3 — ikke implementert ennå');
}
