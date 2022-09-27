/*
Find Max Consecutive Ones 
Given a binary array nums, return the maximum number of consecutive 1's in the array.


find_max_consecutive_ones([1,1,0,0,1,0]) == 2
find_max_consecutive_ones([0,1,0,1,1,0,1,1,1]) == 3
find_max_consecutive_ones([0,0,0]) == 0
find_max_consecutive_ones([0,1,0]) == 1
find_max_consecutive_ones([1,0,1,1,0,1]) == 2
p find_max_consecutive_ones([1,1,0,1,1,1]) == 3

Problem/ Test Cases
Rules:
- return the count of consecutive that's the highest
- all valid inputs

Input: array of numbers
Output: number
Data Structure: array

Algo:
- create variable highest count and initialize to 0
- create variable current count and initialize to 0
- iterate over the array
  - if current num is 1 
    - add 1 to current count
    - if current count greater than highest count assign current count to highest count
  - if current num is 0 
    - assign 0 to current count 
- end loop
- return highest count

*/

function findMaxConsecutiveOnes(arr) {
  let highestCount = 0;
  let currentCount = 0;

  arr.forEach(num => {
    if (num === 1) {
      currentCount += 1;
      if (currentCount > highestCount) highestCount = currentCount
    }
    if (num === 0) currentCount = 0;
  });

  return highestCount;
}


console.log(findMaxConsecutiveOnes([1,1,0,0,1,0]));
console.log(findMaxConsecutiveOnes([0,1,0,1,1,0,1,1,1]));
console.log(findMaxConsecutiveOnes([0,0,0]));
console.log(findMaxConsecutiveOnes([0,1,0]));
console.log(findMaxConsecutiveOnes([1,0,1,1,0,1]));
console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]));