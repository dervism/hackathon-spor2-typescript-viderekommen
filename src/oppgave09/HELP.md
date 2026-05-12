# Hjelp — Oppgave 9: In-memory saksregister

Du trenger en datastruktur som gir raskt oppslag på fnr og lar deg
*overskrive* en eksisterende oppføring uten ekstra logikk.

For `hentAlle()`: testen forsøker å mutere arrayet du returnerer og
forventer en exception. Du må derfor returnere en uforanderlig kopi —
slå opp hvordan man "fryser" et array i JS.

`Fodselsnummer` er en *branded string* — den oppfører seg som en string
under panseret, så standard streng-likhet fungerer som nøkkel uten
ekstra arbeid.
