import {describe, expect, test} from 'vitest';
import {type ForeldrepengerSoknad, lagSoknad} from '../domain/foreldrepenger-soknad';
import {tilJson} from './soknad-serializer';

function demoSak(): ForeldrepengerSoknad {
  return lagSoknad({
    fnr: '01059010006',
    fornavn: 'Aisha',
    etternavn: 'Hassan',
    alder: 34,
    postnummer: '0560',
    manedsinntekt: 32_000,
  });
}

describe('Oppgave 10 — SoknadSerializer', () => {
  test('json inneholder fornavn', () => {
    const json = tilJson(demoSak());
    expect(JSON.parse(json).fornavn).toBe('Aisha');
  });

  test('json inneholder alder', () => {
    const json = tilJson(demoSak());
    expect(JSON.parse(json).alder).toBe(34);
  });

  test('json inneholder manedsinntekt', () => {
    const json = tilJson(demoSak());
    expect(JSON.parse(json).manedsinntekt).toBe(32_000);
  });
});
