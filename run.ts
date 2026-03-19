/* eslint-disable no-console */
import { CheckPalindrome } from './src/CheckPalindrome.js';
import { CountVowels } from './src/CountVowels.js';
import { DeduplicateArray } from './src/DeduplicateArray.js';
import { FirstNonRepeatableChar } from './src/FirstNonrepeatableChar.js';
import { FuzzBizz } from './src/FuzzBizz.js';
import MinMaxArray from './src/MinMaxArray.js';
import ReverseString from './src/ReverseString.js';
import { WordCapitalizer } from './src/WordCapitalizer.js';

console.log(FirstNonRepeatableChar.forSolution('abbcacbaabu'));
console.log(FirstNonRepeatableChar.mapSolution('hbythtyb67u7u6j78kjewf4f546g5h'));

console.log(ReverseString.getReverseString('Hello, World!'));

console.log(CheckPalindrome.isPalindrome('madam madam'));

console.log(FuzzBizz.getFuzzBizz(7));

console.log(new CountVowels().getCountVowels('Hello World'));
console.log(
  JSON.stringify(
    new CountVowels().getStatistics('This is a test text to vowels counting.'),
    null,
    2,
  ),
);

console.log(MinMaxArray.getMinValue([3, 1, 4, 1, 5, 9]));
console.log(DeduplicateArray.deduplicateArr([1, 2, 2, 3, 4, 4, 5]));
console.log(DeduplicateArray.deduplicateArr([{ a: 1 }, { b: 2 }, { c: 5 }, { c: 5 }, { c: 6 }]));
console.log(WordCapitalizer.capitalizeWords('hello[][  ]this beautiful  world'));
