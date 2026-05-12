/**
 * Oppgave 4 — Tell ugyldige (15 poeng)
 *
 * Du skal kunne svare lederen din: "hvor mange linjer i CSV-filen ble
 * forkastet?". Implementer en funksjon som leser filen og returnerer
 * antall *totale* linjer, antall *gyldige* og antall *ugyldige*.
 *
 * Logikken er den samme som i oppgave 3, men her teller du isteden for
 * å samle.
 */
export type Resultat = Readonly<{
  totalt: number;
  gyldige: number;
  ugyldige: number;
}>;

export function tellUgyldige(csvPath: string): Resultat {
  // TODO
  throw new Error('Oppgave 4 — ikke implementert ennå');
}
