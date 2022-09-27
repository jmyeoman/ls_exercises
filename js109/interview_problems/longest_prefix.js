/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

NOTE: a valid prefix is greater than 1 character in length.


examples:

longest_common_prefix(["house", "home", "hotel"]) == "ho"
longest_common_prefix(["abc", "def", "hij"]) == ""
longest_common_prefix(["flower","flow","flight"]]) == "fl"
longest_common_prefix(["absolute", "abstract" "absent"]) == "abs"
longest_common_prefix(["metal", "metallurgy","metamorphosis"]) == "meta"
longes_common_prefix(["dog","racecar","car"]) == ""
longest_common_prefix("aabcd", "aacde", "bdsa") == ""

=end

Problem/ Test Cases
Rules:
- Given an array of strings return all of the common chars in a string from the start of each string
- If there are no common chars return empty string
- only valid inputs

Input: Array of strings
Output: string
Data Structure: array

Algo:
- create variable prefix and initialize to empty string
- sort strings from shortest to longest
- iterate over chars in first string in given array
- iterate over all elements in given array
- if current char from first loop equals all other first chars
  - add current char to prefix variable
- else end loop
- return prefix
*/

function longestCommonPrefix(arr) {
  let prefix = '';
  arr = arr.slice()
           .sort((a, b) => a.length - b.length);
  
  for (let i = 0; i < arr[0].length; i++) {
    if (arr.every(str => str[i] === arr[0][i])) {
      prefix += arr[0][i];
    } else {
      break;
    }
  }
  return prefix;
}

console.log(longestCommonPrefix(["metal", "metallurgy","metamorphosis"]));

