/*
In this kata, you've to count lowercase letters in a given string and return the letter count in a hash with 'letter' as key and count as 'value'. The key must be 'symbol' instead of string in Ruby and 'char' instead of string in Crystal.

Example: letter_count('arithmetics') //=> {"a": 1, "c": 1, "e": 1, "h": 1, "i": 2, "m": 1, "r": 1, "s": 1, "t": 2}
*/

// input: string
// output: object
// Algo:
// - create a variable count and initialize to an empty object
// - iterate over the string
// - if char is lowercase
// -   if count property for char exists add 1 to value
// -   else create count property for char and assign 1 value
// - end loop
// - return count

function letterCount(str) {
  let count = {};

  for (let char of str) {
    if (char >= 'a' && char <= 'z') {
      count[char] ? count[char] += 1 : count[char] = 1;
    }
  }

  return count;
}

