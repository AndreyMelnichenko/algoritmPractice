export class WordCapitalizer {
  static capitalizeWords(str: string): string {
    let result = str;
    const midRes: { low: string; upper: string }[] = [];
    str
      .split(' ')
      .map((word) => word.trim())
      .map((word) =>
        midRes.push({ low: word, upper: word.charAt(0).toLocaleUpperCase() + word.slice(1) }),
      );

    for (const { low, upper } of midRes) {
      result = result.replaceAll(low, upper);
    }
    return result;
  }
}
