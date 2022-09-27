/*
You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

For example:

Let's say you are given the array {1,2,3,4,3,2,1}:
Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

Let's look at another one.
You are given the array {1,100,50,-51,1,1}:
Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

Last one:
You are given the array {20,10,-80,10,10,15,35}
At index 0 the left side is {}
The right side is {10,-80,10,10,15,35}
They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
Index 0 is the place where the left side and right side are equal.

Note: Please remember that in most programming/scripting languages the index of an array starts at 0.

Input:
An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

Output:
The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.

Note:
If you are given an array with multiple answers, return the lowest correct index.
*/
// Rules:
// 1. center index is not counted
// 2. amount to the left of 0 index and right of Last
// index is 0
// input: array
// Output: number
// Data Structure: array
// Algo
// - Create function sum array
// - given array 
// - iterate over given array and return sum 
// - Main function
// - given array
// - iterate over array
// - create variables left and right don't initialize
// - if index is 0 
//     sum of left assigned to 0 
//     sum of right assign to copy of array from index
//     plus 1 passed to sum function
//       to end 
// - else if index last index 
//     sum of right assigned 0
//     sum of left assigned copy from zero to current
//     index passed to sum function
//     passed to 
// - else 
//     sum of right assign to copy of array from index
//     plus 1 passed to sum function
//     sum of left assigned copy from zero to current
//     index passed to sum function
// - if sum of left equals sum of right return current 
//   index
// - end loop
// - return -1

function sumArr(arr) {
  return arr.reduce((pv, cv) => pv + cv);
}

function findEvenIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    let sumOfRight
    let sumOfLeft

    if (i === 0) {
      sumOfLeft = 0
      sumOfRight = sumArr(arr.slice(i + 1));
    } else if (i === arr.length - 1) {
      sumOfLeft = sumArr(arr.slice(0, i));
      sumOfRight = 0
    } else {
      sumOfRight = sumArr(arr.slice(i + 1));
      sumOfLeft = sumArr(arr.slice(0, i));
    }

    if (sumOfLeft === sumOfRight) return i;
  }

  return -1;
}


Output
Past Solutions
JavaScript

// Problem
// Given an array of Numbers return an index where the numbers to the left and right sum to the sam ammount. 
// Rules:
// 1. Only Numbers
// 2. Return negative one if there is no such index
// Input: Array
// Output: Numbers
// Algo:
// 1. Create a prior sum function
// a. It takes an array and an index and sums the numbers from beginning up to the index
// 2. Create a post-sum function
// a. It takes an array and an index and sums the number from just after the given index to the end
// 3. Iterate over the array starting at index 1 and ending at length - 1
// 4. IF priorSum and postSum are equal return the index
// 5. Return -1

function preIndexSum(arr, index) {
  let sum = 0;
  for (let i = 0; i < index; i++) {
    sum += arr[i];
  }

  return sum;
}



function postIndexSum(arr, index) {
  let sum = 0;
  for (let i = index + 1; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}


function findEvenIndex(arr)
{
  for (let i = 0; i < arr.length; i++) {
    if (preIndexSum(arr, i) === postIndexSum(arr, i)) return i;

    if (!preIndexSum(arr, i) && !postIndexSum(arr, i)) return i;

  }
  return -1;
}