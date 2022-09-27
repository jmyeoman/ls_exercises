/*

Given two strings s and t, return true if s is a subsequence of t, or false otherwise.


A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true
Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false
examples:

is_subsequence("aabb", "aabb") == true
is_subsequence("aaa", "abacba") == true
is_subsequence("bbb" "abcde") == false
is_subsequence("axcd", "abxcd") == true
is_subsequence("axc","ahbgdc" ) == false
is_usbsequence("abc","ahbgdc" ) == true
p is_subsequence("abc","ahbgdc" ) == true
p is_subsequence('abc', 'aabbcc') #== true
p is_subsequence('aec', 'abcde') == false

=begin

Problem/ Test Cases
Rules:
- return true if s input string is a subsequence of t input string
- subsequence contains at least some of the same chars in the same order
- identical returns true
Input: strings
Output: boolean
Data Structure: array
Algo:

- split s input into array of chars
- iterate over t input
  - if current char is strictly equal to first element in s array
    - remove first element
- end loop
- if s array is empty return true otherwise false


*/

function isSubsequence(s, t) {
  let sArr = s.split('');

  for (let char of t) {
    if (char === sArr[0]) sArr.shift();
  }
  return sArr.length === 0;
}


console.log(isSubsequence("axc","ahbgdc"));