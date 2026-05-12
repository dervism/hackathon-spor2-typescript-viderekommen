import {beforeEach, describe, expect, test} from 'vitest';
import {SoknadsRegister} from '../oppgave09/soknads-register';
import {lagSoknaderOpprettApp} from './soknader-opprett';

describe('Oppgave 14 — POST /soknader', () => {
  let register: SoknadsRegister;

  beforeEach(() => {
    register = new SoknadsRegister();
  });

  test('gyldig body gir 201', async () => {
    const app = lagSoknaderOpprettApp(register);
    const res = await app.request('/soknader', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        fnr: '15079220008',
        fornavn: 'Lara',
        etternavn: 'Khan',
        alder: 22,
        postnummer: '9008',
        manedsinntekt: 22_000,
      }),
    });
    expect(res.status).toBe(201);
  });

  test('ugyldig format gir 400', async () => {
    const app = lagSoknaderOpprettApp(register);
    const res = await app.request('/soknader', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        fnr: 'abc',
        fornavn: 'Lara',
        etternavn: 'Khan',
        alder: 22,
        postnummer: '9008',
        manedsinntekt: 22_000,
      }),
    });
    expect(res.status).toBe(400);
  });

  test('ugyldig Mod-11 gir 400', async () => {
    const app = lagSoknaderOpprettApp(register);
    const res = await app.request('/soknader', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        fnr: '01059010007', // 11 sifre, men feil kontrollsiffer
        fornavn: 'Lara',
        etternavn: 'Khan',
        alder: 22,
        postnummer: '9008',
        manedsinntekt: 22_000,
      }),
    });
    expect(res.status).toBe(400);
  });
});
