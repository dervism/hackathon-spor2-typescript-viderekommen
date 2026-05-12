# Hjelp — Oppgave 15: Kvote-allokering (avansert)

Dette er en *bonus*-oppgave med god uttelling. Tre lag å bygge:

1. **Validér input.** `antallBarn ≥ 1` og `dekning ∈ {100, 80}`. Kast
   `Error` ellers — testene verifiserer det.
2. **Velg base-kvoter.** Avhengig av `dekning`, sett mor/far/felles
   til 18/15/16 (100%) eller 22/19/20 (80%). Når kun én forelder har
   rett, går alt til den ene (49/61 for mor, 40/52 for far).
3. **Legg på flerbarnsdager-bonus.** 0 / 17 / 46 (100%) eller
   0 / 21 / 57 (80%). For ≥ 3 barn brukes 3+-satsen.

Tip: en lookup-tabell per `(dekning, antallBarn)` for bonus-tallet
gjør koden flat. For valg av base-kvoter er en switch på
`rettsforhold` ryddig.

`totalt(k)` finnes ferdig som hjelper for å sjekke at sum stemmer
med tabellen i JSDoc.
