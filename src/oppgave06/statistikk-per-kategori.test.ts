import {describe, expect, test} from 'vitest';
import {type ForeldrepengerSoknad, lagSoknad} from '../domain/foreldrepenger-soknad';
import {beregn} from './statistikk-per-kategori';

function soknad(lonn: number): ForeldrepengerSoknad {
  return lagSoknad({
    fnr: '01059010006',
    fornavn: 'Test',
    etternavn: 'Person',
    alder: 30,
    postnummer: '0560',
    manedsinntekt: lonn,
  });
}

describe('Oppgave 6 — Statistikk per kategori', () => {
  test('tom liste gir tomt map', () => {
    const resultat = beregn([]);
    expect(resultat.size).toBe(0);
  });

  test('kun lav', () => {
    const soknader = [soknad(20_000), soknad(25_000)];
    const resultat = beregn(soknader);
    expect(resultat.size).toBe(1);
    expect(resultat.get('lav')?.antall).toBe(2);
    expect(resultat.get('lav')?.snittInntekt).toBe(22_500);
  });

  test('blandet gruppe', () => {
    const soknader = [
      soknad(20_000), // lav
      soknad(40_000), // middels
      soknad(50_000), // middels
      soknad(80_000), // hoy
    ];
    const resultat = beregn(soknader);
    expect(resultat.size).toBe(3);
    expect(resultat.get('lav')?.antall).toBe(1);
    expect(resultat.get('middels')?.antall).toBe(2);
    expect(resultat.get('hoy')?.antall).toBe(1);
    expect(resultat.get('middels')?.snittInntekt).toBe(45_000);
  });
});
