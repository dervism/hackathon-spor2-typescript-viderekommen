# Hjelp — Oppgave 1: Opptjeningskrav

To uavhengige vilkår — du må sjekke begge:

1. **Antall måneder med godkjent inntekt** ≥ 6.
   - Filtrer ut registreringer med ikke-godkjent type
     (`'feriepenger'`, `'lanekassen'`).
   - Tell *distinkte* måneder. Flere registreringer i samme måned
     skal telle som én.
2. **Sum godkjent inntekt** ≥ `halvG`.

Begge må gjelde — én av dem alene er ikke nok.

Tip: et `Set<string>` over de godkjente måneds-strengene gir deg
distinkt-antallet uten ekstra arbeid.
