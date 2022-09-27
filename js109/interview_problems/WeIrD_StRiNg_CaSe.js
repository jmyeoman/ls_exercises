/*
Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

Examples:
toWeirdCase( "String" );//=> returns "StRiNg"
toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"

Problem/ Test Cases:
Rules:
- Only string inputs
- words seperated by spaces
- return transformed string with even index chars of each word upper cased and odd indexed chars lower cased
- starts over for each new word
- 0 index is even

Input: string
Output: string
Data Structure: array

Algo:

- create variable newStringArr and initialize to empty array
- seperate string into array of words
- iterate over array of words
- create variable newWord and initialize to empty string
- iterate over chars in word
- if char even add upper case char to newWord
- if char odd add lower case char to newWord
- end inner loop
- add newWord to newStringArr
- end outer loop
- return newStringArr joined into space delimited string
*/

function toWeirdCase(str) {
  let newStringArr = [];
  let strArr = str.split(' ');

  strArr.forEach(word => {
    let newWord = '';
    word.split('')
        .forEach((char, idx) => {
          if (idx % 2 === 0) newWord += char.toUpperCase();
          if (idx % 2 === 1) newWord += char.toLowerCase();
        });
    newStringArr.push(newWord);
  });

  return newStringArr.join(' ');
}