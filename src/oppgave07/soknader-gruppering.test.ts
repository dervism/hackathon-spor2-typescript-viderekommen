import {describe, expect, test} from 'vitest';
import {type ForeldrepengerSoknad, lagSoknad} from '../domain/foreldrepenger-soknad';
import {grupperPaPostnummer} from './soknader-gruppering';

function soknad(etternavn: string, postnummer: string): ForeldrepengerSoknad {
  return lagSoknad({
    fnr: '01059010006',
    fornavn: 'Test',
    etternavn,
    alder: 30,
    postnummer,
    manedsinntekt: 25_000,
  });
}

describe('Oppgave 7 — SoknaderGruppering', () => {
  test('grupperer', () => {
    const soknader = [soknad('Berg', '0560'), soknad('Hassan', '0560'), soknad('Wang', '0250')];
    const resultat = grupperPaPostnummer(soknader);
    expect(resultat.size).toBe(2);
    expect(resultat.get('0560')?.length).toBe(2);
    expect(resultat.get('0250')?.length).toBe(1);
  });

  test('sortert alfabetisk på etternavn', () => {
    const soknader = [soknad('Wang', '0560'), soknad('Berg', '0560'), soknad('Hassan', '0560')];
    const i0560 = grupperPaPostnummer(soknader).get('0560')!;
    expect(i0560[0]?.etternavn).toBe('Berg');
    expect(i0560[1]?.etternavn).toBe('Hassan');
    expect(i0560[2]?.etternavn).toBe('Wang');
  });
});
