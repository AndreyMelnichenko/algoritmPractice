// copilot: disable
import ReverseString from './ReverseString.js';

/**
 * Utility class for palindrome checking.
 * @class CheckPalindrome
 */
export class CheckPalindrome {
  /**
   * Checks if a string is a palindrome.
   * @param input - The string to check.
   * @returns True if input is a palindrome, false otherwise.
   */
  static isPalindrome(input: string): boolean {
    const reversedInput = ReverseString.getReverseString(input);
    return input === reversedInput;
  }
}
