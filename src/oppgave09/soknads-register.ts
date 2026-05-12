import type {ForeldrepengerSoknad} from '../domain/foreldrepenger-soknad.js';
import type {Fodselsnummer} from '../domain/fodselsnummer.js';

/**
 * Oppgave 9 — In-memory saksregister (20 poeng)
 *
 * Implementer et lite register slik at:
 *   • leggTil overskriver eksisterende soknad med samme fnr
 *   • finn(fnr) returnerer undefined når ingen treff finnes
 *   • hentAlle() returnerer en "immutable" kopi (skal kaste ved .push())
 *   • antall reflekterer faktisk innhold
 *
 * Hold state innkapslet i et privat felt. Velg en datastruktur som
 * gir raskt oppslag på fnr.
 */
export class SoknadsRegister {
  leggTil(soknad: ForeldrepengerSoknad): void {
    // TODO
    throw new Error('Oppgave 9 — ikke implementert ennå');
  }

  finn(fnr: Fodselsnummer): ForeldrepengerSoknad | undefined {
    // TODO
    throw new Error('Oppgave 9 — ikke implementert ennå');
  }

  hentAlle(): ReadonlyArray<ForeldrepengerSoknad> {
    // TODO
    throw new Error('Oppgave 9 — ikke implementert ennå');
  }

  get antall(): number {
    // TODO
    throw new Error('Oppgave 9 — ikke implementert ennå');
  }
}
