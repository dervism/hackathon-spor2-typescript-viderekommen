# Hjelp — Oppgave 8: Topp-3 per postnummer

Sortér først (synkende på inntekt), grupper deretter på postnummer, og
kutt hver gruppe til 3 elementer.

- For synkende sortering på et tallfelt: comparator returnerer
  `b.felt - a.felt` (positivt = `b` kommer først).
- Å kutte til "maks 3" må fungere selv når gruppen har færre
  elementer (uten å krasje).
