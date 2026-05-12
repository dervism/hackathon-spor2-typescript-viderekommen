/**
 * Oppgave 1 — Opptjeningskrav for foreldrepenger (20 poeng)
 *
 * Søker har rett til foreldrepenger når begge vilkår er oppfylt:
 *
 *   1. Inntekt fra **godkjent type** i minst 6 av de siste 10 månedene.
 *   2. Sum godkjent inntekt i perioden er minst **½G** (halve
 *      grunnbeløpet — du får verdien som parameter).
 *
 * Godkjente inntektstyper: 'arbeid', 'sykepenger', 'dagpenger', 'aap',
 * 'foreldrepenger', 'svangerskapspenger', 'pleiepenger'.
 *
 * Ikke-godkjente: 'feriepenger', 'lanekassen'.
 *
 * Detaljer:
 *   - "Måned med inntekt" = minst én godkjent registrering den måneden.
 *     Flere registreringer i samme måned teller som én.
 *   - Tom historikk → false.
 *   - `halvG` er ½G i kroner (slå opp via g.nav.no, eller bruk det
 *     som blir injisert i tester).
 */

export type InntektsType =
  | 'arbeid'
  | 'sykepenger'
  | 'dagpenger'
  | 'aap'
  | 'foreldrepenger'
  | 'svangerskapspenger'
  | 'pleiepenger'
  | 'feriepenger'
  | 'lanekassen';

export type Inntektsregistrering = Readonly<{
  maaned: string; // 'YYYY-MM'
  type: InntektsType;
  beloep: number;
}>;

export function harOpptjening(
  historikk: ReadonlyArray<Inntektsregistrering>,
  halvG: number,
): boolean {
  // TODO
  throw new Error('Oppgave 1 — ikke implementert ennå');
}
