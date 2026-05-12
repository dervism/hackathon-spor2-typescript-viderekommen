import {Hono} from 'hono';
import {lagSoknad} from './domain/foreldrepenger-soknad.js';
import {SoknadsRegister} from './oppgave09/soknads-register.js';
import {lagSoknaderAlleApp} from './oppgave11/soknader-alle.js';
import {lagSoknaderFilterApp} from './oppgave13/soknader-filter.js';
import {lagSoknaderHentApp} from './oppgave12/soknader-hent.js';
import {lagSoknaderOpprettApp} from './oppgave14/soknader-opprett.js';

export function lagDemoRegister(): SoknadsRegister {
  const register = new SoknadsRegister();
  register.leggTil(lagSoknad({ fnr: '01059010006', fornavn: 'Aisha', etternavn: 'Hassan', alder: 34, postnummer: '0560', manedsinntekt: 32_000 }));
  register.leggTil(lagSoknad({ fnr: '15079220008', fornavn: 'Lin', etternavn: 'Wang', alder: 32, postnummer: '0250', manedsinntekt: 28_500 }));
  register.leggTil(lagSoknad({ fnr: '24038815071', fornavn: 'Astrid', etternavn: 'Berg', alder: 36, postnummer: '1389', manedsinntekt: 72_000 }));
  return register;
}

export function lagApp(register: SoknadsRegister) {
  const app = new Hono();
  // /soknader/filter må mounteres FØR /soknader/:fnr så ikke "filter" matches som fnr
  app.route('/', lagSoknaderAlleApp(register));
  app.route('/', lagSoknaderFilterApp(register));
  app.route('/', lagSoknaderHentApp(register));
  app.route('/', lagSoknaderOpprettApp(register));
  return app;
}
