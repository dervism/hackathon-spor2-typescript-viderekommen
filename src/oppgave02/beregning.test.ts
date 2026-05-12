import {describe, expect, test} from 'vitest';
import {beregn} from './beregning';

const G = 130_160;

describe('Oppgave 2 — Beregningsgrunnlag', () => {
  test('stabil inntekt gir grunnlag', () => {
    // 3 × 50 000 → snitt 50 000 → årssats 600 000
    const r = beregn([50_000, 50_000, 50_000], 600_000, G);
    expect(r.status).toBe('grunnlag');
    if (r.status === 'grunnlag') expect(r.beloep).toBe(600_000);
  });

  test('høy variance gir manuell vurdering', () => {
    // snitt 80 000 → årssats 960 000; oppgitt 600 000 → diff 60% > 25%
    const r = beregn([80_000, 80_000, 80_000], 600_000, G);
    expect(r.status).toBe('manuell-vurdering');
  });

  test('grunnlag kappes til 6G', () => {
    const r = beregn([100_000, 100_000, 100_000], 1_200_000, G);
    expect(r.status).toBe('grunnlag');
    if (r.status === 'grunnlag') expect(r.beloep).toBe(6 * G);
  });

  test('lav variance under terskel gir grunnlag', () => {
    // snitt 55 000 → årssats 660 000; oppgitt 600 000 → diff 10% < 25%
    const r = beregn([55_000, 55_000, 55_000], 600_000, G);
    expect(r.status).toBe('grunnlag');
    if (r.status === 'grunnlag') expect(r.beloep).toBe(660_000);
  });

  test('eksakt terskel gir grunnlag', () => {
    // snitt 62 500 → årssats 750 000; oppgitt 600 000 → diff 25% (ikke > 25%)
    const r = beregn([62_500, 62_500, 62_500], 600_000, G);
    expect(r.status).toBe('grunnlag');
  });

  test('null aarsinntekt hopper over variance', () => {
    const r = beregn([50_000, 50_000, 50_000], 0, G);
    expect(r.status).toBe('grunnlag');
    if (r.status === 'grunnlag') expect(r.beloep).toBe(600_000);
  });

  test('ulike måneder snittes', () => {
    // 30 000 + 50 000 + 70 000 = 150 000; snitt 50 000 → årssats 600 000
    const r = beregn([30_000, 50_000, 70_000], 600_000, G);
    expect(r.status).toBe('grunnlag');
    if (r.status === 'grunnlag') expect(r.beloep).toBe(600_000);
  });
});
