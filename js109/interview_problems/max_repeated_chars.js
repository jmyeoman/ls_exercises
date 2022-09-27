/*
Max repeated substring length 
given a string, return the maximum length of a non-empty substring made of a single repeated character.


examples:

max_repeated_substring_length("aappplee") == 3
max_repeated_substring_length("abbcccddddeeeeedcba") == 5
max_repeated_substring_length("abcd") == 0
max_repeated_substring_length("greencode") == 2
max_repeated_substring_length("rruunn") == 2

Problem/ Test Cases
Rules:
- return the count of the most consecutive identical chars
- only repeated char substrings are couunted
- all valid input

Input: string
Output: number
Data Structure: none

Algo:
- create highest count variable and initialize to 0
- create current count variable and initialize to 0
- iterate over string starting at index 1 
  - if current char matches last char 
    - increment current count 
    - if current count greater than highest count
      - assign current count to highest count
  - else 
    - assign 0 to current count 
- end loop
- if highest count greater than 0 increment by 1
- return highest count
*/

function maxRepeatedSubstringLength(str) {
  let highestCount = 0
  let currentCount = 0

  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      currentCount += 1;
      if (currentCount > highestCount) highestCount = currentCount;
    } else {
      currentCount = 0;
    }
  }
  if (highestCount > 0) highestCount += 1;
  return highestCount;
}

console.log(maxRepeatedSubstringLength("aappplee"));
console.log(maxRepeatedSubstringLength("abbcccddddeeeeedcba"));
console.log(maxRepeatedSubstringLength("abcd"));
console.log(maxRepeatedSubstringLength("greencode"));
console.log(maxRepeatedSubstringLength("rruunn"));