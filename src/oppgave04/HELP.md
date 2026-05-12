# Hjelp — Oppgave 4: Tell ugyldige

Du gjenbruker mye fra oppgave 3 — forskjellen er at du *teller* i stedet
for å samle objekter.

- `totalt` = antall datalinjer (husk å trekke fra header og tomme linjer).
- `gyldige` = antall linjer som lar seg parse uten å kaste.
- `ugyldige` følger av de to.

Test 4 (`gyldige + ugyldige = totalt`) sjekker at regnskapet ditt går
opp — den fanger typiske feil hvor du dobbelt-teller eller glemmer
header-linjen.
