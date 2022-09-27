/*
Problem: 
Given an array of integers return the array where all the even numbers are in the same place, but the odd numbers are ordered from lowest to highest. 
Test Cases:

[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

Rules:
- All valid inputs

Input: array
Output: array
Data Structure: array

Algo:
- make a copy of given array
- create variable odds and initialize to empty array
- create variable odd indexes and initialize to empty array
- iterate over copy array
  - if element is odd
    - on each iteration pass the number to odds and pass the index to odd indexes
- end loop
- sort odds from lowest to highest
- iterate over odds and odd indexes at the same time
  - on each iteration replace the element at current index of odd indexes in the copy with current odd number
- end loop
- return copy array

*/

function oddReorder(arr) {
  arr = arr.slice();

  let odds = [];
  let oddIndices = [];

  arr.forEach((int, idx) => {
    if (int % 2 === 1) {
      odds.push(int);
      oddIndices.push(idx);
    }
  });

  odds.sort((a, b) => a - b);

  for (let i = 0; i < odds.length; i++) {
    arr[oddIndices[i]] = odds[i] 
  }

  return arr;
}

console.log(oddReorder([7, 1]));
console.log(oddReorder([5, 8, 6, 3, 4]));
console.log(oddReorder([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));