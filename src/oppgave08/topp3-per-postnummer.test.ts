import {describe, expect, test} from 'vitest';
import {type ForeldrepengerSoknad, lagSoknad} from '../domain/foreldrepenger-soknad';
import {topp3PerPostnummer} from './topp3-per-postnummer';

function soknad(etternavn: string, postnummer: string, lonn: number): ForeldrepengerSoknad {
  return lagSoknad({
    fnr: '01059010006',
    fornavn: 'Test',
    etternavn,
    alder: 30,
    postnummer,
    manedsinntekt: lonn,
  });
}

describe('Oppgave 8 — Topp3 per postnummer', () => {
  test('1 soknad', () => {
    const resultat = topp3PerPostnummer([soknad('Berg', '0560', 25_000)]);
    expect(resultat.get('0560')?.map((s) => s.manedsinntekt)).toEqual([25_000]);
  });

  test('3 soknader sorteres fallende', () => {
    const soknader = [soknad('A', '0560', 30_000), soknad('B', '0560', 50_000), soknad('C', '0560', 40_000)];
    const resultat = topp3PerPostnummer(soknader);
    expect(resultat.get('0560')?.map((s) => s.manedsinntekt)).toEqual([50_000, 40_000, 30_000]);
  });

  test('mer enn 3 soknader kuttes til 3', () => {
    const soknader = [
      soknad('A', '0560', 30_000),
      soknad('B', '0560', 50_000),
      soknad('C', '0560', 40_000),
      soknad('D', '0560', 60_000),
      soknad('E', '0560', 20_000),
    ];
    const resultat = topp3PerPostnummer(soknader);
    expect(resultat.get('0560')?.map((s) => s.manedsinntekt)).toEqual([60_000, 50_000, 40_000]);
  });

  test('to postnummer', () => {
    const soknader = [
      soknad('A', '0560', 50_000),
      soknad('B', '0250', 70_000),
      soknad('C', '0250', 30_000),
    ];
    const resultat = topp3PerPostnummer(soknader);
    expect(resultat.size).toBe(2);
    expect(resultat.get('0560')?.length).toBe(1);
    expect(resultat.get('0250')?.length).toBe(2);
    expect(resultat.get('0250')?.[0]?.manedsinntekt).toBe(70_000);
  });
});
