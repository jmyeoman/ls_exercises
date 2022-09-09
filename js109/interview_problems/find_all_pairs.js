/*
You are given array of integers, your task will be to count all pairs in that array and return their count.

Notes:

Array can be empty or contain only one value; in this case return 0
If there are more pairs of a certain number, count each pair only once. E.g.: for [0, 0, 0, 0] the return value is 2 (= 2 pairs of 0s)
Random tests: maximum array length is 1000, range of values in array is between 0 and 1000
Examples
[1, 2, 5, 6, 5, 2]  -->  2
...because there are 2 pairs: 2 and 5

[1, 2, 2, 20, 6, 20, 2, 6, 2]  -->  4
...because there are 4 pairs: 2, 20, 6 and 2 (again)

*/

// input: array
// output: number
// Algo
// - create variable pair count and initialize to 0
// - create used number variable and assign empty array
// - iterate over the given array
// - if element is in used array continue
// - create variable count 
// - iterate iver array
// - if first element equals second element 
//     increment count 
// - if count equals 2 
//      increment pair count
//      assign 0 count 
// - end inner loop
// - add element to used number array
// - return pair count

function duplicates(arr) {
  let pairCount = 0;
  let usedNum = [];

  for (let i = 0; i < arr.length; i++) {
    if (usedNum.includes(arr[i])) continue;
    let count = 0;

    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count += 1;
      }
      if (count === 2) {
        pairCount += 1;
        count = 0;
      }
      usedNum.push(arr[i]);
    }
  }
  return pairCount;
}