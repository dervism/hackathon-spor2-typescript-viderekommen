import {beforeEach, describe, expect, test} from 'vitest';
import {lagSoknad} from '../domain/foreldrepenger-soknad';
import {SoknadsRegister} from '../oppgave09/soknads-register';
import {lagSoknaderFilterApp} from './soknader-filter';

describe('Oppgave 13 — GET /soknader/filter', () => {
  let register: SoknadsRegister;

  beforeEach(() => {
    register = new SoknadsRegister();
    register.leggTil(lagSoknad({ fnr: '01059010006', fornavn: 'Aisha', etternavn: 'Hassan', alder: 34, postnummer: '0560', manedsinntekt: 32_000 }));
    register.leggTil(lagSoknad({ fnr: '15079220008', fornavn: 'Lin', etternavn: 'Wang', alder: 32, postnummer: '0250', manedsinntekt: 28_500 }));
    register.leggTil(lagSoknad({ fnr: '24038815071', fornavn: 'Astrid', etternavn: 'Berg', alder: 36, postnummer: '1389', manedsinntekt: 72_000 }));
  });

  test('uten param returnerer alle', async () => {
    const app = lagSoknaderFilterApp(register);
    const res = await app.request('/soknader/filter');
    expect(res.status).toBe(200);
    expect(((await res.json()) as unknown[]).length).toBe(3);
  });

  test('minInntekt 30000 filtrerer', async () => {
    const app = lagSoknaderFilterApp(register);
    const res = await app.request('/soknader/filter?minInntekt=30000');
    expect(((await res.json()) as unknown[]).length).toBe(2);
  });

  test('minInntekt 60000 filtrerer', async () => {
    const app = lagSoknaderFilterApp(register);
    const res = await app.request('/soknader/filter?minInntekt=60000');
    expect(((await res.json()) as unknown[]).length).toBe(1);
  });

  test('minInntekt 100000 gir tom liste', async () => {
    const app = lagSoknaderFilterApp(register);
    const res = await app.request('/soknader/filter?minInntekt=100000');
    expect(((await res.json()) as unknown[]).length).toBe(0);
  });
});
