import type {ForeldrepengerSoknad} from '../domain/foreldrepenger-soknad.js';
import type {Inntektskategori} from '../domain/inntektskategori.js';

/**
 * Oppgave 6 — Statistikk per inntektskategori (15 poeng)
 *
 * Lag en oversikt for lederen: hvor mange soknader har vi i hver kategori,
 * og hva er gjennomsnittsinntekten innenfor kategorien?
 *
 * Bruk `kategoriAv(s.manedsinntekt)` til å plassere hver soknad i riktig
 * kategori, og array-metoder for oppsummeringen.
 *
 * Returnér et `Map<Inntektskategori, Statistikk>`. Tom inputliste skal
 * gi et tomt map.
 */
export type Statistikk = Readonly<{
  antall: number;
  snittInntekt: number;
}>;

export function beregn(soknader: ReadonlyArray<ForeldrepengerSoknad>): Map<Inntektskategori, Statistikk> {
  // TODO: grupper på kategoriAv(s.manedsinntekt),
  //       og for hver gruppe regn ut (antall, snitt månedsinntekt).
  throw new Error('Oppgave 6 — ikke implementert ennå');
}
