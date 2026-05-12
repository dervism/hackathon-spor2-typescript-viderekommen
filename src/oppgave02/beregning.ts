/**
 * Oppgave 2 — Beregningsgrunnlag for foreldrepenger (20 poeng)
 *
 * NAV regner ut beregningsgrunnlaget slik:
 *
 *   1. Snitt av **siste 3 måneders inntekt**, oppjustert til årssats
 *      (× 12).
 *   2. Hvis snitt-årssatsen avviker mer enn **25%** fra søkers
 *      oppgitte årsinntekt, skal saken vurderes manuelt (NAV
 *      bestemmer hva som er mest representativt).
 *   3. Ellers brukes snitt-årssatsen som grunnlag, men **kappet ved
 *      6G** (seks ganger grunnbeløpet).
 *
 * Du får `grunnbeloep` som parameter — slå opp dagens verdi via
 * https://g.nav.no/api/v1/grunnbeloep i applikasjonen, og send den
 * inn her. Tester sender en kjent verdi.
 *
 * Variansreglen: |snitt-årssats - aarsinntekt| / aarsinntekt > 0.25.
 * Hvis `aarsinntekt` er 0, hopp over varianssjekken.
 */

export type Resultat =
  | { readonly status: 'grunnlag'; readonly beloep: number }
  | { readonly status: 'manuell-vurdering'; readonly grunn: string };

export function beregn(
  sisteTreManeder: ReadonlyArray<number>,
  aarsinntekt: number,
  grunnbeloep: number,
): Resultat {
  // TODO
  throw new Error('Oppgave 2 — ikke implementert ennå');
}
