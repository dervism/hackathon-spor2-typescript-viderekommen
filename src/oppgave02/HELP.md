# Hjelp — Oppgave 2: Beregningsgrunnlag

Tre steg, i denne rekkefølgen:

1. **Snitt × 12.** Snitt av de tre månedene, ganget med 12, gir
   årssatsen som NAV regner med.
2. **Variansjekk** (hopp over hvis `aarsinntekt === 0`):
   forholdet `|årssats - aarsinntekt| / aarsinntekt`. Hvis det er
   *strengt større enn* 0.25 → returner `{ status: 'manuell-vurdering', grunn }`.
   Vær nøye: nøyaktig 25% skal *ikke* utløse manuell vurdering.
3. **6G-cap.** Ellers: returner `{ status: 'grunnlag', beloep: Math.min(årssats, 6 × grunnbeloep) }`.

Tip: bruk `Math.abs(...)` til diff-utregningen.
