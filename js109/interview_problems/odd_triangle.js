/*
If there is a triangle of odd numbers return the sum of numbers on n row
Input: number
Output: number
Data Structure: array

Algo:
- guard clause if 0 return 0 
- create variable row and initialize to 1
- create variable current row and initialize to 1
- create variable current number and initialize to 1
- while row less than n 
  - while current row greater than 0
    - add 2 to current number
    - decrement current row by 1
    end loop
  - increment row by 1
  - row assigned to current row
-create variable result and initialize to 0
- while row greater than 0
  - add current number to result
  - add 2 to current number
  - decrement row
  - end loop
- return result

*/

function oddTriangle(n) {
  if (n === 0) return 0;
  
  let row = 1;
  let currentRow = 1;
  let currentNumber = 1;

  while (row < n) {
    while (currentRow > 0) {
      currentNumber += 2;
      currentRow -= 1;
    }
    row += 1;
    currentRow = row;
  }

  let result = 0;
  while (row > 0) {
    result += currentNumber;
    currentNumber += 2;
    row -= 1
  }
  
  return result;
}


console.log(oddTriangle(0));
console.log(oddTriangle(1));
console.log(oddTriangle(2));
console.log(oddTriangle(3));
console.log(oddTriangle(4));