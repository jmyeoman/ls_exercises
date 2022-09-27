/*
Instructions
Output
Past Solutions
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

*/
// Rules:
// 1. case insensitive
// 2. ignore non-letters
// Input: string
// Output: boolean
// Data Structure: Object, array
// Algo
// - Make variable letters and initialize to object with all 
//   properties representing each lower-case letter and values
//   False
// - iterate over the string 
// -   if lower-case char is in object assign property to true
// - coerce letters to array of values
// - return true or false if all are true


function isPangram(string){
  let letters = {a: false, b: false, c: false, d: false, 
                 e: false, f: false, g: false, h: false, 
                 i: false, j: false, k: false, l: false,
                 m: false, n: false, o: false, p: false,
                 q: false, r: false, s: false, t: false,
                 u: false, v: false, w: false, x: false,
                 y: false, z: false}

  let letterKeys = Object.keys(letters);
   
   for (let char of string) {
     if (letterKeys.includes(char.toLowerCase())) {
       letters[char.toLowerCase()] = true;
     }
   }

   return Object.values(letters).every(value => value);

}
