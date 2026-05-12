import {beforeEach, describe, expect, test} from 'vitest';
import {lagSoknad} from '../domain/foreldrepenger-soknad';
import {SoknadsRegister} from '../oppgave09/soknads-register';
import {lagSoknaderHentApp} from './soknader-hent';

describe('Oppgave 12 — GET /soknader/:fnr', () => {
  let register: SoknadsRegister;

  beforeEach(() => {
    register = new SoknadsRegister();
    register.leggTil(lagSoknad({ fnr: '01059010006', fornavn: 'Aisha', etternavn: 'Hassan', alder: 34, postnummer: '0560', manedsinntekt: 32_000 }));
  });

  test('hent en returnerer soknad', async () => {
    const app = lagSoknaderHentApp(register);
    const res = await app.request('/soknader/01059010006');
    expect(res.status).toBe(200);
    const body = (await res.json()) as { fornavn: string };
    expect(body.fornavn).toBe('Aisha');
  });

  test('ukjent gir not found', async () => {
    const app = lagSoknaderHentApp(register);
    const res = await app.request('/soknader/01010199934');
    expect(res.status).toBe(404);
  });
});
