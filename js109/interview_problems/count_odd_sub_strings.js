/*
Given a string of integers, return the number of odd-numbered substrings that can be formed.

For example, in the case of "1341", they are 1, 1, 3, 13, 41, 341, 1341, a total of 7 numbers.

solve("1341") = 7. See test cases for more examples.

Good luck!

If you like substring Katas, please try
*/

// Rules:
// 1. Repeated numbers are counted twice
// Input: string of integers
// output: number
// Data STructure: array
// Algorithm
// - Create a variable count and initialize it to 0
// - iterate over the given string
// - get each longest substring that starts with each number
// - On each iteration iterate agin over the substring
//     iterating over each substring in the given substring
// - if that substring coerced to a number is odd 
//     add 1 to count
// -end loops
// - return count

function solve(str) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    let startingSS = str.slice(i);
    for (let j = 1; j <= startingSS.length; j++) {
      let atomicSS = startingSS.slice(0, j);

      if ((Number(atomicSS) % 2) === 1) count += 1;
    }
  }

  return count;
}