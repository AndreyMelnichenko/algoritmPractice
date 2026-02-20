export class FirstNonRepeatableChar {
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
