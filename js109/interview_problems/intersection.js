/*
Intersection 
Given a 2D integer array nums where nums[i] is a non-empty array of distinct positive integers, return the list of integers that are present in each array of nums sorted in descending order.

examples/test cases:

intersection([[3,1,2,4,5],[1,2,3,4],[3,4,5,6]]) == [4,3]
intersection([[1,2,3],[4,5,6]]) == []
intersection([[2,4,3,5],[1,2,6,5], [3,2,1,5]]) == [5,2]
intersection([[6,2,4,4],[5,1,1,6],[0,4,7,6]) == [6]
intersection([[4,5,3],[2,2,2],[3,4,5]]) == []

Problem/ Test Cases:
Rules:
- return an array of integers in descending order that represent each integer that is present in every subarray of given array
- all valid inputs
- at least two subarrays
- no matches returns empty subarray
- do not add repeated integers 

Input: 2d array
Output: array
Data Structure: array 

Algo:
- create result variable and initialize to empty array
- iterate over the first subarray in the given array
  - if current integer is present in every subarray AND integer is not in result array
    - add integer to result array
- end loop
- return result sorted in descending order

*/

function intersection(arr) {
  let result = [];

  arr[0].forEach(num => {
    if (arr.every(subArr => subArr.includes(num)) && !result.includes(num)) {
      result.push(num);
    }
  });

  return result.sort((a, b) => b - a);
}

console.log(intersection([[3,1,2,4,5],[1,2,3,4],[3,4,5,6]]));
console.log(intersection([[1,2,3],[4,5,6]]));
console.log(intersection([[2,4,3,5],[1,2,6,5], [3,2,1,5]]));
console.log(intersection([[6,2,4,4],[5,1,1,6],[0,4,7,6]]));
console.log(intersection([[4,5,3],[2,2,2],[3,4,5]]));