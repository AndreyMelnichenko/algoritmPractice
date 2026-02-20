// copilot: disable
/**
 * Finds the first non-repeatable character in a string.
 * @class FirstNonRepeatableChar
 */
export class FirstNonRepeatableChar {
  /**
   * Finds the first non-repeatable character using an object for counting.
   * @param input - The string to search.
   * @returns The first non-repeatable character, or '_' if none found.
   */
  static forSolution(input: string): string {
    // Initialize character count
    const charCount: Record<string, number> = {};

    for (const char of input) {
      charCount[char] = (charCount[char] ?? 0) + 1;
    }

    for (const char of input) {
      if (charCount[char] === 1) {
        return char;
      }
    }

    return '_';
  }

  /**
   * Finds the first non-repeatable character using a Map for counting.
   * @param input - The string to search.
   * @returns The first non-repeatable character, or '_' if none found.
   */
  static mapSolution(input: string): string | null {
    const charCount = new Map<string, number>();

    for (const char of input) {
      charCount.set(char, (charCount.get(char) ?? 0) + 1);
    }

    for (const char of input) {
      if (charCount.get(char) === 1) {
        return char;
      }
    }

    return '_';
  }
}
