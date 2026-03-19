export class Flatten1LevelArr {
  static getFlatten = <T>(arr: T[]): T[] => {
    return arr.reduce<T[]>((acc, val) => acc.concat(val), []);
  };
}
