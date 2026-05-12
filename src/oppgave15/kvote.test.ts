import {describe, expect, test} from 'vitest';
import {fordel, totalt} from './kvote';

describe('Oppgave 15 — Kvote-allokering', () => {
  test('begge, 1 barn, 100%', () => {
    const k = fordel({rettsforhold: 'begge', antallBarn: 1, dekning: 100});
    expect(k).toEqual({morKvote: 18, farKvote: 15, fellesKvote: 16, flerbarnsdagerBonus: 0});
    expect(totalt(k)).toBe(49);
  });

  test('begge, 2 barn, 100% — bonus 17', () => {
    const k = fordel({rettsforhold: 'begge', antallBarn: 2, dekning: 100});
    expect(k.flerbarnsdagerBonus).toBe(17);
    expect(totalt(k)).toBe(66);
  });

  test('begge, 3 barn, 100% — bonus 46', () => {
    const k = fordel({rettsforhold: 'begge', antallBarn: 3, dekning: 100});
    expect(k.flerbarnsdagerBonus).toBe(46);
    expect(totalt(k)).toBe(95);
  });

  test('begge, 4 barn bruker 3+-satsen', () => {
    const k = fordel({rettsforhold: 'begge', antallBarn: 4, dekning: 100});
    expect(k.flerbarnsdagerBonus).toBe(46);
  });

  test('begge, 1 barn, 80%', () => {
    const k = fordel({rettsforhold: 'begge', antallBarn: 1, dekning: 80});
    expect(k).toEqual({morKvote: 22, farKvote: 19, fellesKvote: 20, flerbarnsdagerBonus: 0});
    expect(totalt(k)).toBe(61);
  });

  test('kun-mor, 1 barn, 100%', () => {
    const k = fordel({rettsforhold: 'kun-mor', antallBarn: 1, dekning: 100});
    expect(k).toEqual({morKvote: 49, farKvote: 0, fellesKvote: 0, flerbarnsdagerBonus: 0});
  });

  test('kun-mor, 2 barn, 100% får bonus', () => {
    const k = fordel({rettsforhold: 'kun-mor', antallBarn: 2, dekning: 100});
    expect(k.morKvote).toBe(49);
    expect(k.flerbarnsdagerBonus).toBe(17);
    expect(totalt(k)).toBe(66);
  });

  test('kun-far, 1 barn, 100%', () => {
    const k = fordel({rettsforhold: 'kun-far', antallBarn: 1, dekning: 100});
    expect(k).toEqual({morKvote: 0, farKvote: 40, fellesKvote: 0, flerbarnsdagerBonus: 0});
  });

  test('kun-far, 3 barn, 80%', () => {
    const k = fordel({rettsforhold: 'kun-far', antallBarn: 3, dekning: 80});
    expect(k.farKvote).toBe(52);
    expect(k.flerbarnsdagerBonus).toBe(57);
    expect(totalt(k)).toBe(109);
  });

  test('ugyldig antallBarn kaster', () => {
    expect(() =>
      fordel({rettsforhold: 'begge', antallBarn: 0, dekning: 100}),
    ).toThrow();
  });

  test('ugyldig dekning kaster', () => {
    expect(() =>
      fordel({rettsforhold: 'begge', antallBarn: 1, dekning: 90 as unknown as 100}),
    ).toThrow();
  });
});
