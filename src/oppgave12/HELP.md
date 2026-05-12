# Hjelp — Oppgave 12: GET /saker/:fnr

To ting:

1. Hent path-parameteret fra request-konteksten.
2. Returner enten 200 med saken (hvis funnet) eller 404 (hvis ikke).
   Slå opp Hono sin API for å sette status-kode.

Hvis konvertering av fnr-strengen kaster (ugyldig format), kan du
behandle det som "ikke funnet" — testen sjekker bare at gyldig oppslag
gir 200 og ukjent gir 404.
