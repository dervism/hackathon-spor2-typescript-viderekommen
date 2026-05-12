import {describe, expect, test} from 'vitest';
import {type ForeldrepengerSoknad, lagSoknad} from '../domain/foreldrepenger-soknad';
import {lagFodselsnummer} from '../domain/fodselsnummer';
import {SoknadsRegister} from './saks-register';

function soknad(fnr: string, navn: string, lonn: number): ForeldrepengerSoknad {
  return lagSoknad({
    fnr,
    fornavn: navn,
    etternavn: 'Etternavn',
    alder: 30,
    postnummer: '0560',
    manedsinntekt: lonn,
  });
}

describe('Oppgave 9 — SoknadsRegister', () => {
  test('leggTil og finn', () => {
    const register = new SoknadsRegister();
    const aisha = soknad('01059010006', 'Aisha', 25_000);
    register.leggTil(aisha);
    expect(register.finn(lagFodselsnummer('01059010006'))).toEqual(aisha);
  });

  test('finn returnerer undefined når ukjent', () => {
    const register = new SoknadsRegister();
    expect(register.finn(lagFodselsnummer('15079220008'))).toBeUndefined();
  });

  test('leggTil overskriver samme fnr', () => {
    const register = new SoknadsRegister();
    register.leggTil(soknad('01059010006', 'Aisha', 25_000));
    register.leggTil(soknad('01059010006', 'Aisha', 30_000));
    expect(register.antall).toBe(1);
    expect(register.finn(lagFodselsnummer('01059010006'))?.manedsinntekt).toBe(30_000);
  });

  test('hentAlle er uforanderlig', () => {
    const register = new SoknadsRegister();
    register.leggTil(soknad('01059010006', 'Aisha', 25_000));
    const alle = register.hentAlle();
    expect(() => (alle as ForeldrepengerSoknad[]).push(soknad('15079220008', 'Lin', 25_000))).toThrow();
  });
});
