/**
 * Oppgave 15 — Kvote-allokering for foreldrepenger (30 poeng — avansert)
 *
 * Fordel ukene i stønadsperioden mellom mor, far/medmor, fellesperiode
 * og flerbarnsdager-bonus.
 *
 * Reglene (forenklet for hackathonen — vi behandler "1 dag" som ekstra
 * uke der det er relevant, og 3+ barn som "3+"):
 *
 * **For dekning 100% (begge har rett):**
 *   - morKvote = 18 uker (15 etter fødsel + 3 før termin)
 *   - farKvote = 15 uker
 *   - fellesKvote = 16 uker
 *
 * **For dekning 80% (begge har rett):**
 *   - morKvote = 22 uker (19 + 3 før termin)
 *   - farKvote = 19 uker
 *   - fellesKvote = 20 uker
 *
 * **Når kun mor har rett:** alle ukene går til mor; far = 0, felles = 0.
 * **Når kun far har rett:** alle ukene går til far; mor = 0, felles = 0.
 * Total ved kun-far er forkortet (40 uker @ 100%, 52 @ 80%).
 *
 * **Flerbarnsdager-bonus** (gjelder uansett rettsforhold):
 *   - 1 barn:  0 / 0
 *   - 2 barn: 17 / 21
 *   - 3+ barn: 46 / 57
 *
 * Validering: `antallBarn` må være ≥ 1; `dekning` må være 100 eller 80.
 * Ugyldig input → kast Error.
 */

export type Rettsforhold = 'begge' | 'kun-mor' | 'kun-far';
export type Dekning = 100 | 80;

export type Kvoter = Readonly<{
  morKvote: number;
  farKvote: number;
  fellesKvote: number;
  flerbarnsdagerBonus: number;
}>;

export type KvoteInput = Readonly<{
  rettsforhold: Rettsforhold;
  antallBarn: number;
  dekning: Dekning;
}>;

export function fordel(input: KvoteInput): Kvoter {
  // TODO
  throw new Error('Oppgave 15 — ikke implementert ennå');
}

/** Hjelper: summen av alle kvoter (totalt antall uker). */
export function totalt(k: Kvoter): number {
  return k.morKvote + k.farKvote + k.fellesKvote + k.flerbarnsdagerBonus;
}
