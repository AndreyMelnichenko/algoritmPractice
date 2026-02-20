// copilot: disable
/**
 * Utility class for reversing strings.
 * @class ReverseString
 */
class ReverseString {
  /**
   * Reverses a string.
   * @param input - The string to reverse.
   * @returns The reversed string.
   */
  static getReverseString(input: string): string {
    let reversed = '';

    for (let i = input.length - 1; i >= 0; i -= 1) {
      reversed += input[i];
    }

    return reversed;
  }
}

export default ReverseString;
