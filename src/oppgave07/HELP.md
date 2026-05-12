# Hjelp — Oppgave 7: Grupper og sorter

Du skal gruppere på postnummer, og innenfor hver gruppe skal sakene
være sortert på etternavn.

Trikset er at hvis du sorterer **før** du grupperer, kommer hver
liste ut sortert "gratis" — gruppe-bygging bevarer rekkefølgen fra
input-arrayet.

To detaljer å være obs på:

- Standard-sortering i JS *muterer* original-arrayet. Lag en kopi først
  hvis du ikke vil endre input.
- For string-sortering med riktige norske tegn: `localeCompare` (i
  motsetning til `<` / `>` på strenger).
