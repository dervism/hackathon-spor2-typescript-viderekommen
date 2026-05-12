import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {describe, expect, test} from 'vitest';
import {lesCsv} from './csv-leser';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const testfil = path.join(__dirname, 'soknader.csv');

describe('Oppgave 3 — CsvLeser', () => {
  test('leser kun gyldige soknader', () => {
    const soknader = lesCsv(testfil);
    // 15 datalinjer; 5 er ugyldige (feil fnr-checksum, ugyldig dato,
    // ikke-numerisk fnr, blank fornavn, negativ lønn).
    // Det skal være 10 gyldige soknader tilbake.
    expect(soknader.length).toBe(10);
  });

  test('alle har komplette navn', () => {
    const soknader = lesCsv(testfil);
    expect(soknader.every((s) => s.fornavn.trim() !== '' && s.etternavn.trim() !== '')).toBe(true);
  });
});
