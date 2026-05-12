import {describe, expect, test} from 'vitest';
import {harOpptjening, type Inntektsregistrering, type InntektsType} from './opptjening';

const HALV_G = 65_080;

const r = (maaned: string, type: InntektsType, beloep: number): Inntektsregistrering =>
  ({maaned, type, beloep});

describe('Oppgave 1 — Opptjeningskrav', () => {
  test('6 måneder arbeid gir opptjening', () => {
    expect(
      harOpptjening(
        [
          r('2025-01', 'arbeid', 30_000),
          r('2025-02', 'arbeid', 30_000),
          r('2025-03', 'arbeid', 30_000),
          r('2025-04', 'arbeid', 30_000),
          r('2025-05', 'arbeid', 30_000),
          r('2025-06', 'arbeid', 30_000),
        ],
        HALV_G,
      ),
    ).toBe(true);
  });

  test('5 måneder er for få', () => {
    expect(
      harOpptjening(
        [
          r('2025-01', 'arbeid', 30_000),
          r('2025-02', 'arbeid', 30_000),
          r('2025-03', 'arbeid', 30_000),
          r('2025-04', 'arbeid', 30_000),
          r('2025-05', 'arbeid', 30_000),
        ],
        HALV_G,
      ),
    ).toBe(false);
  });

  test('feriepenger teller ikke', () => {
    const historikk: Inntektsregistrering[] = [
      r('2025-01', 'feriepenger', 30_000),
      r('2025-02', 'feriepenger', 30_000),
      r('2025-03', 'feriepenger', 30_000),
      r('2025-04', 'feriepenger', 30_000),
      r('2025-05', 'feriepenger', 30_000),
      r('2025-06', 'feriepenger', 30_000),
    ];
    expect(harOpptjening(historikk, HALV_G)).toBe(false);
  });

  test('lanekassen teller ikke', () => {
    const historikk: Inntektsregistrering[] = [
      r('2025-01', 'lanekassen', 12_000),
      r('2025-02', 'lanekassen', 12_000),
      r('2025-03', 'lanekassen', 12_000),
      r('2025-04', 'lanekassen', 12_000),
      r('2025-05', 'lanekassen', 12_000),
      r('2025-06', 'lanekassen', 12_000),
    ];
    expect(harOpptjening(historikk, HALV_G)).toBe(false);
  });

  test('for lav sum gir ikke opptjening', () => {
    const historikk: Inntektsregistrering[] = [
      r('2025-01', 'arbeid', 1_000),
      r('2025-02', 'arbeid', 1_000),
      r('2025-03', 'arbeid', 1_000),
      r('2025-04', 'arbeid', 1_000),
      r('2025-05', 'arbeid', 1_000),
      r('2025-06', 'arbeid', 1_000),
    ];
    expect(harOpptjening(historikk, HALV_G)).toBe(false);
  });

  test('blandet godkjent type teller', () => {
    expect(
      harOpptjening(
        [
          r('2025-01', 'arbeid', 20_000),
          r('2025-02', 'sykepenger', 18_000),
          r('2025-03', 'dagpenger', 12_000),
          r('2025-04', 'aap', 14_000),
          r('2025-05', 'pleiepenger', 5_000),
          r('2025-06', 'svangerskapspenger', 16_000),
        ],
        HALV_G,
      ),
    ).toBe(true);
  });

  test('flere registreringer samme måned teller som én', () => {
    const historikk: Inntektsregistrering[] = [
      r('2025-01', 'arbeid', 30_000),
      r('2025-01', 'sykepenger', 5_000),
      r('2025-02', 'arbeid', 30_000),
      r('2025-02', 'dagpenger', 5_000),
      r('2025-03', 'arbeid', 30_000),
      r('2025-03', 'pleiepenger', 5_000),
    ];
    expect(harOpptjening(historikk, HALV_G)).toBe(false);
  });

  test('feriepenger i blandet måned telles ikke', () => {
    const historikk: Inntektsregistrering[] = [
      r('2025-01', 'arbeid', 30_000),
      r('2025-02', 'arbeid', 30_000),
      r('2025-03', 'arbeid', 30_000),
      r('2025-04', 'arbeid', 30_000),
      r('2025-05', 'arbeid', 30_000),
      r('2025-06', 'feriepenger', 30_000),
    ];
    expect(harOpptjening(historikk, HALV_G)).toBe(false);
  });

  test('tom historikk', () => {
    expect(harOpptjening([], HALV_G)).toBe(false);
  });
});
