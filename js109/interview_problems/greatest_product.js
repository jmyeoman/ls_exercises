/*
Complete the greatestProduct method so that it'll find the greatest product of five consecutive digits in the given string of digits.

For example:

greatestProduct("123834539327238239583") // should return 3240
The input string always has more than five digits.
*/
// Rules:
// 1. Always a string with more than 5 digits
// 2. Must coerce string to number
// 3. Chars will always be numbers
// Input: string
// Output: number
// Data Structure: array
// Algo
// - create variable savedProduct and initialize to 1
// - Coerce string to array of numbers
// - iterate over array
// - copy of array from current index to 5th index forward
// - Create variable product initialize to the product of all
//   5 numbers
// - if product is greater than saved product
//   product assigned to savedProduct. 
// - end loop
// - return savedProduct

function greatestProduct(input) {
  let savedProduct = 0;
  input = input.split('')
               .map(num => Number(num));
  
  input.forEach((_, idx, arr)  => {
    if (idx >= arr.length - 4) return;
    let arrOfFive = arr.slice(idx, idx + 5);
    let product = arrOfFive.reduce((pv, cv) => pv * cv);

    if (product > savedProduct) savedProduct = product;
  });

  return savedProduct;
}