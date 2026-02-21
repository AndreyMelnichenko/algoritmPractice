/* eslint-disable no-console */
import { CheckPalindrome } from './src/CheckPalindrome.js';
import { CountVowels } from './src/CountVowels.js';
import { FirstNonRepeatableChar } from './src/FirstNonrepeatableChar.js';
import { FuzzBizz } from './src/FuzzBizz.js';
import ReverseString from './src/ReverseString.js';

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
