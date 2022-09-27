/*
Sum of Pairs
Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

If there are two or more pairs with the required sum, the pair whose second element has the smallest index is the solution.

sum_pairs([11, 3, 7, 5],         10)
#              ^--^      3 + 7 = 10
== [3, 7]

sum_pairs([4, 3, 2, 3, 4],         6)
#          ^-----^         4 + 2 = 6, indices: 0, 2 *
#             ^-----^      3 + 3 = 6, indices: 1, 3
#                ^-----^   2 + 4 = 6, indices: 2, 4
#  * the correct answer is the pair whose second value has the smallest index
== [4, 2]

sum_pairs([0, 0, -2, 3], 2)
#  there are no pairs of values that can be added to produce 2.
== None/nil/undefined (Based on the language)

sum_pairs([10, 5, 2, 3, 7, 5],         10)
#              ^-----------^   5 + 5 = 10, indices: 1, 5
#                    ^--^      3 + 7 = 10, indices: 3, 4 *
#  * the correct answer is the pair whose second value has the smallest index
== [3, 7]
Negative numbers and duplicate numbers can and will appear.

NOTE: There will also be lists tested of lengths upwards of 10,000,000 elements. Be sure your code doesn't time out.

Problem/ Test Cases
Rules:
- negative and duplicate numbers may appear
- select the pair with the lowest index of the second of the pair
- select a pair that equals the sum provided

Input: array, number
Output: array
Data Structure: array 

Algo:
- reverse the given array
- create variable saved pair 
- iterate over given array
- create copy of array from next index onward
- iterate over copy of array
- if the sum of both current numbers = given sum assign pair to saved array
- end loops
- reverse saved pair
- return saved pair
*/

function sumPairs(ints, s) {
  ints = ints.reverse();
  let savedPair

  ints.forEach((int1, idx, arr) => {
    let remainderOFArr = arr.slice(idx +1);

    remainderOFArr.forEach(int2 => {
      if (int1 + int2 === s) {
        savedPair = [int2, int1];
      }
    })
  })

  return savedPair;
}




// Problem
// Given an array of integers and a number representing a sum return the first 2 integers from the array that add up to the sum
// Rules:
// 1. 0s and negative integers will occur
// 2. The earliest is the one with the second integer earlier
// 3. No result will return undefined
// Input: Array and number
// Output: Array
// Algo:
// 1. create a second number array set to empty
// 2. Iterate through the array
// a. IF the current number is in the second number array 
// return the second number minus the sum and the second number in an array 
// b. Find the difference between the sum and the current value
// c. Push that value to the second number array
// 4. return undefined

function sumPairs(arr, sum) {
  let secondNum = [];

  for (let i = 0; i <= arr.length; i++) {
    if (secondNum.includes(arr[i])) {
      return [sum - arr[i], arr[i]];
    }
    if (!secondNum.includes(sum - arr[i])) {
        secondNum.push(sum - arr[i]);
    }
  }

  return undefined;