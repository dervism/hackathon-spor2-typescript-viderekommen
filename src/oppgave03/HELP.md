# Hjelp — Oppgave 3: Les saker fra CSV

Del problemet i to:

1. En funksjon som tar én CSV-linje og returnerer enten en `Sak` eller
   `null` — med `try/catch` rundt `lagSak({...})` for å fange
   ugyldige linjer uten å la dem boble opp.
2. `lesCsv(...)` som leser fila, splitter på linjeskift, hopper over
   header, og filtrerer bort de tomme.

For å filtrere bort `null`-ene **type-sikkert** kan du bruke en *type
predicate* (`s is Sak`) — så slipper du `as Sak[]`-cast etterpå.
