# Hjelp — Oppgave 14: POST /saker med zod-validering

To valideringslag jobber sammen:

1. **Schema-validering** kjører `opprettSakSchema` mot bodien før du
   prøver å bygge en `Sak`. Slå opp zod sin "safe parse"-API for
   feilbehandling uten exceptions.
2. **Domain validation** i `lagFodselsnummer(...)` (kalt fra `lagSak`)
   sjekker Mod-11. Når den kaster, fanger du den med `try/catch` og
   returnerer 400.

For 201 med Location-header: slå opp Hono sin `c.json`-signatur for
hvordan du setter både status og custom headers.
