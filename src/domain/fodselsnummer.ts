/**
 * Verdiobjekt for fødselsnummer. Domeneobjektet sjekker bare *format* —
 * nøyaktig 11 sifre — slik at testdataene flyter gjennom pipelinen
 * uten å avvise gyldige fnr. Full Mod-11-validering er bevisst utelatt.
 */
export type Fodselsnummer = string & { readonly __brand: 'Fodselsnummer' };

const ELLEVE_SIFRE = /^\d{11}$/;

export function lagFodselsnummer(verdi: string): Fodselsnummer {
  if (typeof verdi !== 'string' || !ELLEVE_SIFRE.test(verdi)) {
    throw new Error(`fnr må være 11 sifre: ${verdi}`);
  }
  return verdi as Fodselsnummer;
}
