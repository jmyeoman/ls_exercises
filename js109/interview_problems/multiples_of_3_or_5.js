/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.
*/
// Rules:
// 1. Negative argument returns zero
// 2. Only numbers will be passed in
// Input: number
// output: number
// Data Structure: None
// Algo:
// - pass argument is number, num
// - create variable count and initialize it to 1
// - if num less than 0 return 0
// - while num is greater than 0
//   if num remainder 3 or num remainder 5 equals 0
//     increment sum by num 
// - decrement n 
// - end loop
// - return count

function solution(num){
  if (num < 0) return 0;
  let sum = 0;
  num -= 1;

  while (num > 0) {
    if ((num % 3 === 0) || (num % 5 === 0)) {
      sum += num;
    }
    num -= 1;
  }
  return sum;
}

console.log(solution(10));