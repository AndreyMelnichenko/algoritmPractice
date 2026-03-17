/**
 * Utility class for finding minimum and maximum values in arrays.
 */
export class MinMaxArray {
  /**
   * Finds the minimum value in a number array.
   * @param arr - The array of numbers to search.
   * @returns The smallest number in the array, or 0 if the array is empty.
   * @example
   * MinMaxArray.getMinValue([3, 1, 4, 1, 5, 9]); // returns 1
   * @example
   * MinMaxArray.getMinValue([-5, -2, -10, 3]); // returns -10
   * @example
   * MinMaxArray.getMinValue([]); // returns 0
   */
  static getMinValue(arr: number[]): number {
    let minValue = arr[0] ?? 0;

    arr.forEach((el) => {
      if (el < minValue) minValue = el;
    });

    return minValue;
  }
}

export default MinMaxArray;
