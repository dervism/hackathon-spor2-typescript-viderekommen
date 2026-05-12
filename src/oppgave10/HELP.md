# Hjelp — Oppgave 10: Serialiser Sak til JSON

JS kan serialisere våre vanlige objekter til JSON med ett enkelt
standardbibliotek-kall — ingen annotations, ingen schema-konfig.

Hono bruker det samme internt når du i oppgave 11-15 kaller
`c.json(...)`. Når du ser JSON-respons fra `curl`, vet du nå hvordan
den blir til.

Trenger du *spesielt* format (f.eks. omdøpe `manedsinntekt` til
`monthlyIncome`)? Da må du bygge et nytt objekt før du serialiserer.
