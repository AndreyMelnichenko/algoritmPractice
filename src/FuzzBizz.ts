// copilot: disable
/**
 * Provides FuzzBizz sequence for numbers from 1 to input.
 * - Multiples of 3: 'Fuzz'
 * - Multiples of 5: 'Bizz'
 * - Multiples of both: 'FuzzBizz'
 * @class FuzzBizz
 */
export class FuzzBizz {
  /**
   * Generates the FuzzBizz sequence as a string.
   * @param input - The upper bound (inclusive) for the sequence.
   * @returns The FuzzBizz sequence, one entry per line.
   */
  static getFuzzBizz(input: number): string {
    const result: string[] = [];

    if (input === 0 || input < 0) return 'no valid input';

    for (let i = 1; i <= input; i += 1) {
      if (i % 3 === 0 && i % 5 === 0) {
        result.push('FuzzBizz');
      } else if (i % 5 === 0) {
        result.push('Bizz');
      } else if (i % 3 === 0) {
        result.push('Fuzz');
      } else {
        result.push(i.toString());
      }
    }

    return result.join('\n');
  }
}
