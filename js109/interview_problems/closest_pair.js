// Write a function that takes an array of integers and
// returns the two numbers that are closest together in
// value.

// Examples:

console.log(closestNumbers([5, 25, 15, 11, 20]));     // [15, 11]
console.log(closestNumbers([19, 25, 32, 4, 27, 16])); // [25, 27]
console.log(closestNumbers([12, 7, 17]));             // [12, 7]

// input: array
// output: array
// Algo:
// - Create variable pairs and initialize to an empty array
// - create saved pair variable and initialize to array of first and second 
//   value
// - Iterate over given array starting at 0 and ending 1 index before end
// - iterate over given array starting at current index going to the end
// - create saved difference variable and assign difference of saved variable
// - create current difference variable and initialize to difference of current
//   pair
// - if difference of current pair less than difference of  saved pair
// - assign current pair to saved pair
// - end both loops
// - return saved pair



function closestNumbers(arr) {
  let pairs = [];
  let savedPair = [arr[0], arr[1]];

  for (let i = 0; i < (arr.length - 1); i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let savedDifference = savedPair[0] - savedPair[1];
      if (savedDifference < 0) savedDifference = -(savedDifference);
      let currentPair = [arr[i], arr[j]];
      let currentDifference = currentPair[0] - currentPair[1];
      if (currentDifference < 0) currentDifference = -(currentDifference);

      if (currentDifference < savedDifference) savedPair = currentPair;
    }
  }

  return savedPair;
}