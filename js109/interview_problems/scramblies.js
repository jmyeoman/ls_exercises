/*
Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered.
Examples
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False
*/

// Rules:
// 1. case-insensitive
// 2. only letters
// Input: 2 strings
// Output: boolean
// Data Structure: array
// Algo
// - Transform str1 into array of characters
// - iterate over string 2
// - if current char is in str1 array remove that element from
//   str1 array and continue
// - else return false
// - end loop
// - return true

function scramble(str1, str2) {
  let str1Arr = str1.split('');

  for (let char of str2) {
    if (str1Arr.includes(char) {
      str1Arr.splice(str1Arr.indexOf(char), 1)
    } else {
      return false;
    }
  }
  return true;

}

// Problem:
// Given 2 strings return a boolean result depending on if all of the chars in str2 are present in str1.
// Rules: 
// 1. Only lowercase alphabet characters
// 2. Do I have to count multiple letters? Yes
// Input: 2 Strings
// Output: Boolean
// Data Structure: Array
// Algo: 
// 1. Split the first strings into one array
// 2. Iterate over the str2
// 3. Set all letters present variable to true
// 3. Find the index of the char in str1Arr
// 4. If present remove char from str1Arr
// 5. If not present set all letters present to false and break the loop
// 6. Return all letters present

function scramble(str1, str2) {
  let allLettersPresent = true;
  let str1Arr = str1.split('');
  
  for (let i = 0; i < str2.length; i++) {
    let currentIndex = str1Arr.indexOf(str2[i]);
    
    if (currentIndex === -1) {
      allLettersPresent = false;
      break;
    }
    str1Arr.splice(currentIndex, 1);
  }
  
  return allLettersPresent;
 }