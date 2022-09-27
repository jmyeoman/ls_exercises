/*

Task :
Given a List [] of n integers , find minimum number to be inserted in a list, so that sum of all elements of list should equal the closest prime number .

Notes
List size is at least 2 .

List's numbers will only positives (n > 0) .

Repetition of numbers in the list could occur .

The newer list's sum should equal the closest prime number .

Input >> Output Examples
1- minimumNumber ({3,1,2}) ==> return (1)
Explanation:
Since , the sum of the list's elements equal to (6) , the minimum number to be inserted to transform the sum to prime number is (1) , which will make the sum of the List equal the closest prime number (7) .
2-  minimumNumber ({2,12,8,4,6}) ==> return (5)
Explanation:
Since , the sum of the list's elements equal to (32) , the minimum number to be inserted to transform the sum to prime number is (5) , which will make the sum of the List equal the closest prime number (37) .
3- minimumNumber ({50,39,49,6,17,28}) ==> return (2)
Explanation:
Since , the sum of the list's elements equal to (189) , the minimum number to be inserted to transform the sum to prime number is (2) , which will make the sum of the List equal the closest prime number (191) .
*/

// Rules:
// 1. All inputs will be arrays at least 2 
//    long and all positive integers
// 2. Is zero an option?
// Input: arrays
// Output: number
// Data Structure: arrays
// Algo:
// - Create is prime function
// - given a number check if any number 
// between given and 0 goes into the given 
// number with zero remainder
// - return true if it does false if it doesn't
// - Main function
// - create variable sum and initialize to sum of all
// numbers in given arrays
// - Create variable count and initialize to 1
// - Loop while count plus sum is not prime continue
// - add one to count
// - end Loop
// - return count

function isPrime(num) {
  let count = 2;

  while (count < num) {
    if (num % count === 0) return false;
    count += 1;
    console.log(count)
  }
  return true;
}

function minimumNumber(numbers){
  let sum = numbers.reduce((pv, cv) => pv + cv);
  let count = 0;

  while (!isPrime(count + sum)) {
    count += 1;
  }

  return count;
}