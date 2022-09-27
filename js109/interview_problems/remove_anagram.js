/*

Remove Anagrams

You are given an array of words, where each words consists of lowercase English letters.

In one operation, select any two adjacent words (words[i - 1] and words[i]) that are anagrams of each other, and delete words[i] from words. Keep performing this operation as long as you can select an index that satisfies the conditions.

NOTE: a valid index is such that 0 < i < words.length

Return words after performing all operations. It can be shown that selecting the indices for each operation in any arbitrary order will lead to the same result.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase using all the original letters exactly once. For example, "dacb" is an anagram of "abdc".


Example 1:

Input: words = ["abba","baba","bbaa","cd","cd"]
Output: ["abba","cd"]
Explanation:
One of the ways we can obtain the resultant array is by using the following operations:
- Since words[2] = "bbaa" and words[1] = "baba" are anagrams, we choose index 2 and delete words[2].
 Now words = ["abba","baba","cd","cd"].
- Since words[1] = "baba" and words[0] = "abba" are anagrams, we choose index 1 and delete words[1].
 Now words = ["abba","cd","cd"].
- Since words[2] = "cd" and words[1] = "cd" are anagrams, we choose index 2 and delete words[2].
 Now words = ["abba","cd"].
We can no longer perform any operations, so ["abba","cd"] is the final answer.

Example 2:

Input: words = ["a","b","c","d","e"]
Output: ["a","b","c","d","e"]
Explanation:
No two adjacent strings in words are anagrams of each other, so no operations are performed.


test cases:

remove_anagrams(["bat","tab","all","tea","eat"]) == ["bat","all","tea"]
remove_anagrams(['a','b','c','d','e']) == ['a','b','c','d','e']
remove_anagrams(["dog", "god"]) == ["dog"]
remove_anagrams(["abba","baba","bbaa","cd","cd"]) == ["abba","cd"]
remove_anagrams(["day","tina", "anit","house","note", "tone"]) == ["day,"tina","house","note"]

Problem/ Test cases
Rules:
- Iterating over the array and on each iteration remove the second word if it's an anagram of the previous word and keep doing this until it can be done no more
- All different elements returns array unchanged
- Always valid Input

Input: array
Output: array
Data Structure: array

Algo:
- Create helper function is anagram
  - given two strings, str1, str2
  - if str lengths aren't equal return false
  - coerce 1st string to array of chars
  - iterate over second str
  - if current char is in str array remove char from array
  - else return false
  - end loop 
  - return true
*/

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  let str1Arr = str1.split('');

  for (let char of str2) {
    if (str1Arr.includes(char)) {
      str1Arr.splice(str1Arr.indexOf(char), 1)
    }  else {
      return false;
    }
  }

  return true;
}

/*

Main Function
- copy input
- Create variable changes and initialize to true
- 
- WHile changes true
- iterate over array starting at index 1
- if current word and previous word are anagrams
  - remove current word 
  - break 
  if last element in array changes assigned false
- end loop
- return copy of array

*/

function removeAnagrams(arr) {
  let copyArr = arr.slice();
  let changed = true;

  while (changed) {
    for (let i = 1; i < copyArr.length; i++) {
      if (isAnagram(copyArr[i - 1], copyArr[i])) {
        copyArr.splice(i, 1);
        break;
      }
      if (i === copyArr.length - 1) changed = false;
    }

    if (copyArr.length === 1) changed = false;
  }

  return copyArr;
}

console.log(removeAnagrams(["bat","tab","all","tea","eat"]));


console.log(removeAnagrams(['a','b','c','d','e']));

console.log(removeAnagrams(["dog", "god"]));

console.log(removeAnagrams(["abba","baba","bbaa","cd","cd"]));

console.log(removeAnagrams(["day","tina", "anit","house","note", "tone"]));