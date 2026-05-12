import {type Fodselsnummer, lagFodselsnummer} from './fodselsnummer.js';

/**
 * En søknad om foreldrepenger som kommer inn til Direktoratet for
 * digital saksbehandling.
 *
 * Verdiobjekt: identitet bestemmes av fnr.
 */
export type ForeldrepengerSoknad = Readonly<{
  fnr: Fodselsnummer;
  fornavn: string;
  etternavn: string;
  alder: number;
  postnummer: string;
  manedsinntekt: number;
}>;

export type ForeldrepengerSoknadInput = {
  fnr: string;
  fornavn: string;
  etternavn: string;
  alder: number;
  postnummer: string;
  manedsinntekt: number;
};

const POSTNUMMER = /^\d{4}$/;

export function lagSoknad(input: ForeldrepengerSoknadInput): ForeldrepengerSoknad {
  if (!input.fornavn || input.fornavn.trim() === '') {
    throw new Error('fornavn må være satt');
  }
  if (!input.etternavn || input.etternavn.trim() === '') {
    throw new Error('etternavn må være satt');
  }
  if (input.alder < 0) {
    throw new Error('alder kan ikke være negativ');
  }
  if (!POSTNUMMER.test(input.postnummer)) {
    throw new Error('postnummer må være 4 sifre');
  }
  if (input.manedsinntekt < 0) {
    throw new Error('manedsinntekt kan ikke være negativ');
  }
  return Object.freeze({
    fnr: lagFodselsnummer(input.fnr),
    fornavn: input.fornavn,
    etternavn: input.etternavn,
    alder: input.alder,
    postnummer: input.postnummer,
    manedsinntekt: input.manedsinntekt,
  });
}
