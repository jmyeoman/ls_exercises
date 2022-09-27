/*
Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.


Example 1:

Input: pattern = "abba", s = "dog cat cat dog"
Output: true

Example 2:

Input: pattern = "abba", s = "dog cat cat fish"
Output: false

Example 3:

Input: pattern = "aaaa", s = "dog cat cat dog"
Output: false


examples:

word_pattern("aa", "aaa") == false
word_pattern("abba", "dog cat cat dog") == true
word_pattern("abba", "dog cat cat fish") == false
word_pattern("abbc", "dog cat cat fish") == true
word_pattern("","") == true
word_pattern("abcdefbag", "this is a scalable test case is this true") == true
word_pattern("aaaa", "dog cat cat dog") == false

Problem/ Test Cases
Rules:
- return true or false if the word pattern in s is identical to the char pattern in pattern
- two empty string return true
Input: 2 strings
Output: boolean
Data Structure: array

Algo:
- Guard clause 
  if both empty strings return true
- create function create boolean pattern 
  - given array
  - create variable result and initialize to empty array
  - iterate over array until second to last element and save current value as cv1
  - iterate over copy of rest of array and save current value as cv2
  - add result of cv1`=== cv2 to result
  - end loops
  - return array
- Create main function
  - pass pattern to create boolean pattern function and save result  as boolean pattern
  - pass s to create boolean pattern and save result as sboolean pattern
  - return true or false if boolean pattern anf s boolean pattern are the same


*/

function createBooleanPattern(arr) {
  let result = [];

  for (let i = 0; i < arr.length - 1; i++) {
    let cv1 = arr[i];
    let restOfArr = arr.slice(i + 1);

    for (let j = 0; j < restOfArr.length; j++) {
      let cv2 = restOfArr[j]
      result.push(cv1 === cv2)
    }
  }
  return result;
}


function wordPattern(pattern, s) {
  if (pattern.length === 0 && s.length === 0) return true;
  let booleanPattern = createBooleanPattern(pattern.split(''));
  let sBooleanPattern = createBooleanPattern(s.split(' '));

  return booleanPattern.every((value, idx) => value === sBooleanPattern[idx]);
}

console.log(wordPattern("aaaa", "dog cat cat dog")); 