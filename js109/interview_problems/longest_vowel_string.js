/*
The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

Good luck!
*/

// input: string
// output: number
// Algo
// - function is vowel
// - pass char to function
// - create constant vowels and initialize to array of vowels
// - return is char is in array

// Main Function
// - Create the variable saved count and initialize to 0
// - Create the variable current count and initialize to 0
// - iterate over string
// - if consonant 
//     current count assigned 0
// - if vowel
//     increment current count
//     if current count greater than saved count
//       assign current count to saved count
// - end loop
// - return saved count

function isVowel(char) {
 const VOWELS = ['a', 'e', 'i', 'o', 'u'];
 return VOWELS.includes(char);
}

function solve(s){
  let savedCount = 0;
  let currentCount = 0;
  
  for (let char of s) {
    if (!isVowel(char)) {
      currentCount = 0;
    } else {
      currentCount += 1;
      if (currentCount > savedCount) {
        savedCount = currentCount;
      }
    }
  }
  return savedCount;
}