import {beforeEach, describe, expect, test} from 'vitest';
import {lagSoknad} from '../domain/foreldrepenger-soknad';
import {SoknadsRegister} from '../oppgave09/soknads-register';
import {lagSoknaderAlleApp} from './soknader-alle';

describe('Oppgave 11 — GET /soknader', () => {
  let register: SoknadsRegister;

  beforeEach(() => {
    register = new SoknadsRegister();
    register.leggTil(lagSoknad({ fnr: '01059010006', fornavn: 'Aisha', etternavn: 'Hassan', alder: 34, postnummer: '0560', manedsinntekt: 32_000 }));
    register.leggTil(lagSoknad({ fnr: '15079220008', fornavn: 'Lin', etternavn: 'Wang', alder: 32, postnummer: '0250', manedsinntekt: 28_500 }));
    register.leggTil(lagSoknad({ fnr: '24038815071', fornavn: 'Astrid', etternavn: 'Berg', alder: 36, postnummer: '1389', manedsinntekt: 72_000 }));
  });

  test('returnerer 200 med 3 soknader', async () => {
    const app = lagSoknaderAlleApp(register);
    const res = await app.request('/soknader');
    expect(res.status).toBe(200);
    const body = (await res.json()) as unknown[];
    expect(body.length).toBe(3);
  });
});
