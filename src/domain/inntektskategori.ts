/**
 * Inntektskategori brukt av flere oppgaver. Denne er ferdig implementert
 * — du skal ikke endre den, men du må kjenne grensene:
 *
 *   < 30 000        → 'lav'
 *   30 000–60 000   → 'middels'
 *   > 60 000        → 'hoy'
 */
export type Inntektskategori = 'lav' | 'middels' | 'hoy';

export function kategoriAv(manedslonn: number): Inntektskategori {
  if (manedslonn < 30_000) return 'lav';
  if (manedslonn <= 60_000) return 'middels';
  return 'hoy';
}
