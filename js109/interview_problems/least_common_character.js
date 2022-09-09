// Write a function that takes a string as an argument and
// returns the character that occurs least often in the
// given string. If there are multiple characters with the
// same lowest number of occurrences, then return the one
// that appears first in the string. When counting
// characters, consider uppercase and lowercase versions to
// be the same.

// Examples:

console.log(leastCommonChar("Hello World") === "h");
console.log(leastCommonChar("Peter Piper picked a peck of pickled peppers") ===
                            "t");
console.log(leastCommonChar("Mississippi") === "m");
console.log(leastCommonChar("Happy birthday!") === ' ');
console.log(leastCommonChar("aaaaaAAAA") === 'a');

// The tests above should each log "true".

// Rules
// - case insensitive
// - spaces count as characters
// = return earliest char if more than 1 with lowest 
// occurrences
// input: string
// output: string
// Algo
// - Create variable count and assign empty object
// - iterate over string
// - if char exists in object add one 
// - else add char with value 1 to count object
// - end loop
// - convert object to array of entries
// - sort from lowest value to highest
// - filter out values that don't equal first value
// - if filtered values length 1 return key char
// - iterate over filtered array
// - return the char that has the lowest index in string
/*
function leastCommonChar(str) {
  let lowerCaseStr = str.toLowerCase();
  let count = {};

  lowerCaseStr.split('').forEach(char => {
    count[char] ? count[char] += 1 : count[char] = 1;
  });

  let sortedArr = Object.entries(count).sort((a, b) => a[1] - b[1]);

  let filteredArr = sortedArr.filter((pair, index) => {
    return pair[1] === sortedArr[0][1]
  });
  
  if (sortedArr.length === 1) return filteredArr[0][0];
  
  return filteredArr.reduce((pv, cv) => {
    if (str.indexOf(cv[0]) < str.indexOf(pv[0])) {
      return cv
    }
    return pv;
  })[0]
}
*/

// Algo
// convert string to lower case
// create saved char variable and initialize to emoty string
// create saved count and initialize to infinity
// iterate over string
// create current char variable and initialize to current
//    character
// create current count variable and initialize to 0
// iterate over string
// if second character is the same as current character 
//   increment count
// end loop
// if current count less than saved count
//   saved count assigned current count
//   saved char assigned current character
// end loop
// return saved character

function leastCommonChar(str) {
  str = str.toLowerCase();
  let savedChar = ''
  let savedCount = Infinity;
  
  for (let char1 of str) {
    let count = 0
    for (let char2 of str) {
      if (char1 === char2) count += 1;
    }
    if (count < savedCount) {
      savedChar = char1;
      savedCount = count;
    }
  }
  return savedChar;
}
