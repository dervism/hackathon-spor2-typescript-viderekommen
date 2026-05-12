import {describe, expect, test} from 'vitest';
import {type ForeldrepengerSoknad, lagSoknad} from '../domain/foreldrepenger-soknad';
import {filtrerBerettigede} from './berettiget-filter';

function soknad(alder: number, lonn: number): ForeldrepengerSoknad {
  return lagSoknad({
    fnr: '01059010006',
    fornavn: 'Aisha',
    etternavn: 'Hassan',
    alder,
    postnummer: '0560',
    manedsinntekt: lonn,
  });
}

describe('Oppgave 5 — BerettigetFilter', () => {
  test('18 år med lav lønn er berettiget', () => {
    expect(filtrerBerettigede([soknad(18, 30_000)]).length).toBe(1);
  });

  test('68 år er ikke berettiget', () => {
    expect(filtrerBerettigede([soknad(68, 20_000)]).length).toBe(0);
  });

  test('35000 er ikke berettiget', () => {
    expect(filtrerBerettigede([soknad(40, 35_000)]).length).toBe(0);
  });

  test('blandet liste', () => {
    const alle = [soknad(25, 30_000), soknad(70, 20_000), soknad(40, 50_000), soknad(45, 28_000)];
    const resultat = filtrerBerettigede(alle);
    expect(resultat.length).toBe(2);
    expect(resultat.every((s) => s.manedsinntekt < 35_000)).toBe(true);
  });
});
