/**
 * Class for counting vowels in a string.
 */
export class CountVowels {
  /**
   * Set of vowels to check against.
   */
  vowels: Set<string> = new Set(['a', 'e', 'i', 'o', 'u']);

  /**
   * Counts the number of vowels in the given string.
   * @param input - The string to check for vowels.
   * @returns The number of vowels found in the input string.
   *
   * @example
   *   const cv = new CountVowels();
   *   cv.getCountVowels('Hello World'); // returns 3
   */
  getCountVowels(input: string): number {
    let counter = 0;
    for (const char of input.toLowerCase()) {
      if (this.vowels.has(char)) {
        counter += 1;
      }
    }
    return counter;
  }

  /**
   * Returns statistics of each vowel found in the input string.
   * @param input - The string to analyze for vowel occurrences.
   * @returns An object mapping each vowel to its count in the input string.
   *
   * @example
   *   const cv = new CountVowels();
   *   cv.getStatistics('Hello World'); // returns { e: 1, o: 2 }
   */
  getStatistics(input: string): Record<string, number> {
    const stats: Record<string, number> = {};
    for (const char of input.toLowerCase()) {
      if (this.vowels.has(char)) {
        stats[char] = (stats[char] ?? 0) + 1;
      }
    }
    return stats;
  }
}
