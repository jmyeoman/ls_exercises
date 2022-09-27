/*
Move Zeroes 
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:

Input: nums = [0]
Output: [0]


examples/test cases:

move_zeroes([0,12,3,0,4]) == [12,3,4,0,0]
move_zeroes([0]) == [0]
move_zeroes([0,1,0,3,12]) == [1,3,12,0,0]
move_zeroes([3,0,9,0,1,20,0,1]) == [3,9,1,20,1,0,0,0]
move_zeroes([4,2,4,1,3]) == [4,2,4,1,3]

Problem/ Test cases
Rules:
- move all 0s in array to end of array
- must be done in place 

Input: array
Output: same array
Data Structure: array
Algo:
- create variable zeros and initialize to empty array
- iterate over given array
  - if current num is 0 
    - remove and add to zeros array
    - decrement the index 
- end loop
- add zeros to array
- return array

*/

function moveZeroes(arr) {
  let zeroes = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeroes.push(arr.splice(i, 1)[0]);
      i -= 1
    }
  }

  arr.push(...zeroes);
  return arr;
}



console.log(moveZeroes([0,12,3,0,4]))

console.log(moveZeroes([0]))

console.log(moveZeroes([0,1,0,3,12]))

console.log(moveZeroes([3,0,9,0,1,20,0,1]))

console.log(moveZeroes([4,2,4,1,3]))