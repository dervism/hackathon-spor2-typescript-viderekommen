import {serve} from '@hono/node-server';
import {lagApp, lagDemoRegister} from './app.js';

const app = lagApp(lagDemoRegister());
const port = Number(process.env.PORT ?? 8787);
serve({ fetch: app.fetch, port }, (info) => {
  console.log(`Spor 2 kjører på http://localhost:${info.port}`);
});
