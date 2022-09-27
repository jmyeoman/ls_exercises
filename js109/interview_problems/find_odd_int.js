/*
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
*/
// Rules:
// 1. There will always be one odd
// 2. always an array of integers
// Input: array
// Output: number
// Data Structure: array
// Algo
// - create variable used numbers and initialize to
//   empty array
// - Iterate through array
// - if current eleemnt1 is already used then 
//   continue
// - create variable count and initialize to 0
// - iterate a second time through the array
// - if current element1 equals current element 2 
//   increment the count
// - end inner loop
// - if count is odd return current element1
// - add current element1 to used list
// - end second loop

function findOdd(arr) {
  let used = [];

  for (let i = 0; i < arr.length; i++) {
    if (used.includes(arr[i])) continue;
    let count = 0;
    
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) count += 1;
    }
    console.log([arr[i], count])
    if (count % 2 === 1) return arr[i];
    used.push(arr[i]);
  }
}