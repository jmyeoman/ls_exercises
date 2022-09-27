/*
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/
// Rules
// 1. Case-insensitive
// 2. input will have different cases
// 3. each char is counted only once for having a duplicateCount
// 4. numbers and a-zA-Z are counted
// Input: string
// Output: number
// Data Structure: object
// Algo
// - create variable used chars and initialize to empty object
// - create variable count and initialize to 0
// - iterate over given string
// - coerce char to lowercase
// - if char is in used object continue
// - get a copy of string from current index + 1 to end
// - iterate over copy
// - coerce second character to lowercase
// - if current char matches char increment count end iteration
// - add char to used char object
// - end loop
// - return count


function duplicateCount(text){
  let usedChars = {};
  let count = 0;

  for (let i = 0; i < text.length; i++) {
    let char1 = text[i].toLowerCase();
    if (usedChars[char1]) continue;

    let restOfString = text.slice(i + 1);

    for (let j = 0; j < restOfString.length; j++) {
      let char2 = restOfString[j].toLowerCase();
      if (char1 === char2) {
        count += 1; 
        break;
      }
    }
    usedChars[char1] = true;
  }

  return count;
}