/*

Count Prefixes 
You are given a string array words and a string s, where words[i] and s comprise only of lowercase English letters.

Return the number of strings in words that are a prefix of s.

A prefix of a string is a substring that occurs at the beginning of the string. A substring is a contiguous sequence of characters within a string.

Note that the same string can occur multiple times in words, and it should be counted each time.

examples/test cases:

count_prefixes(["f", "fl", "flow", "f", "a"], "flower") == 4
count_prefixes(["a","b","c","ab","bc","abc"], "abc") == 3
count_prefixes(["a","a"], "aa") == 2
count_prefixes(["a","b","ab","abs","abs"],"absolutely") == 4
count_prefixes(["c","d","e"],"abc") == 0

Problem/ Test cases
Rules:
- return the count of substrings in words array that are prefixes of given string 
- substrings can be repreated
- subtring can be identical to string and counted
- all valid inputs

Input: array, string
Output: number
Data Structure: array

Algo:
- create variable count and initialize to 0
- iterate over array
  - create variable copy of string and get copy from begining to last index in the current substring 
  - if copy and current substring are equal then increment count 
- end loop
- return count
*/

function countPrefixes(words, s) {
  let count = 0;

  words.forEach(word => {
    let copyS = s.slice(0, word.length);
    if (copyS === word) count += 1;
  });

  return count;
}

console.log(countPrefixes(["f", "fl", "flow", "f", "a"], "flower"));
console.log(countPrefixes(["a","b","c","ab","bc","abc"], "abc"));
console.log(countPrefixes(["a","a"], "aa"));
console.log(countPrefixes(["a","b","ab","abs","abs"],"absolutely"));
console.log(countPrefixes(["c","d","e"],"abc"));