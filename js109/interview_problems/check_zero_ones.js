/*
Check Zero Ones 
Given a binary string s, return true if the longest contiguous segment of 1's is strictly longer than the longest contiguous segment of 0's in s, or return false otherwise.

   For example, in s = "110100010" the longest continuous segment of 1s has length 2, and the longest continuous segment of 0s has length 3.

Note that if there are no 0's, then the longest continuous segment of 0's is considered to have a length 0. The same applies if there is no 1's.


check_zero_ones("110") == true
check_zero_ones("0011") == false
check_zero_ones("1") == true
check_zero_ones("0") == false
check_zero_ones("110100010") == false
check_zero_ones("1101") == true
check_zero_ones("11010111100") == true


Problem/ Test Cases
Rules:
- if longest consecutive substring of ones is longer than longest consecutive substring of zeroes return true else false 
- if the same return false
- no 1s or 0s is a length of 0

Input: string
Output: boolean
Data Structure: none 

Algo:

- create variable longest 1s and initialize to 0
- create variable longest 0s and initialize to 0
- create variable curent length 1s and initialize to 0
- create variable curren length 0s and initialize to 0
- iterate over string
  - if current char is 1
    - increment current length 1s 
    - assign 0 to current ones
    - if current lengths 1 greater than longest 1s 
      -assign current to longest
  - if current char is 0
    - increment current 0s 
    - assign 0 to current 1s
    - if current 0s greater than longest 0s 
      - assign current 0s to longest 0s
- end loop
- return longest 1s greater than longest 0s
*/

function checkZeroOnes(str) {
  let longestOnes = 0;
  let longestZeroes = 0;
  let currentOnes = 0;
  let currentZeroes = 0;

  for (let char of str) {
    if (char === '1') {
      currentOnes += 1;
      currentZeroes = 0;
      if (currentOnes > longestOnes) longestOnes = currentOnes;
    }
    if (char === '0') {
      currentZeroes += 1;
      currentOnes = 0;
      if (currentZeroes > longestZeroes) longestZeroes = currentZeroes;
    }
  }

  return longestOnes > longestZeroes;
}

console.log(checkZeroOnes("110"));
console.log(checkZeroOnes("0011"));
console.log(checkZeroOnes('1'));
console.log(checkZeroOnes('0'));
console.log(checkZeroOnes("110100010"));
console.log(checkZeroOnes("1101"));
console.log(checkZeroOnes("11010111100"));