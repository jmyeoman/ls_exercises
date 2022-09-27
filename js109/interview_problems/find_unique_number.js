/*
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

*/
// Rules: 
// 1. At least three numbers
// 2. Floats are included
// 3. performance matters
// Input: array
// Output: numbers
// Data Structure: array
// Algo:
// - iterate over array
// - if first occurrence and last occurence of the 
//   current element is the same return that element
//



function findUniq(arr) {
  return arr.find(num => arr.indexOf(num) === arr.lastIndexOf(num))
}

