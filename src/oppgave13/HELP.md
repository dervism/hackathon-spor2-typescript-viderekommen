# Hjelp — Oppgave 13: GET /saker/filter med query-parameter

Slå opp Hono sin API for query-parametere. Hvis parameteret mangler
skal du bruke 0 som default (returner alle).

Selve filtreringen er den samme regelen som i oppgave 5, bare på
register-listen.

Test fra terminal:

    curl "http://localhost:8787/saker/filter?minInntekt=30000"
