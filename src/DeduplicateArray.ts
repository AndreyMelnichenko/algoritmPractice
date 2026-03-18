export class DeduplicateArray {
  static deduplicateArr<T>(arr: Array<T>): Array<T> {
    const res: Set<T> = new Set<T>();

    for (const el of arr) {
      res.add(el);
    }

    const res2 = [...new Map(arr.map((item) => [JSON.stringify(item), item])).values()];

    return Array.from(res2);
  }
}
