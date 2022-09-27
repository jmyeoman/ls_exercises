/*

Longest Good Integer 
You are given a string num representing a large integer. An integer is good if it meets the following conditions:

   It is a substring of num with length 3.
   It consists of only one unique digit.

Return the maximum good integer as a string or an empty string "" if no such integer exists.

Note:

   A substring is a contiguous sequence of characters within a string.
   There may be leading zeroes in num or a good integer.



examples:

largest_good_integer('13455587222') == "555"
largest_good_integer('456987') == ""
largest_good_integer("11458000") == "000"
largest_good_integer("111") == "111"
largest_good_integer("111222333444555666") == "666"
largest_good_integer("42352338") == ""

Problem/ Test Cases
Rules:
- Given a string return the substring that has 3 consecutive numbers and is the highest number of three repeated numbers. 
- return empty string if no substring exists that meets criteria
- all valid inputs

Input: string
Output: string
Data Structure: array

Algo:
- iterate over all substrings
- select substrings that are 3 repeated numbers
- select substring that is highest number of selected substrings and return it

*/
function isThreeRepeated(str) {
  if (str.length !== 3) return false;
  return str[0] === str[1] && str[0] === str[2];
}


function largestGoodInteger(str) {
  let result = [];

  for (let i = 0; i < str.length; i++) {
    let startingStr = str.slice(i);

    for (let j = 1; j <= startingStr.length; j++) {
      let substring = startingStr.slice(0, j)
      if (isThreeRepeated(substring)) {
        result.push(substring);
      }
    }
  }
  
  if (result.length === 0) return '';
  return result.reduce((pv, cv) => {
    return cv > pv ? cv : pv; 
  });
}

console.log(largestGoodInteger('13455587222'));

console.log(largestGoodInteger('456987'));
console.log(largestGoodInteger("11458000"));
console.log(largestGoodInteger("111"));
console.log(largestGoodInteger("111222333444555666"));
console.log(largestGoodInteger("42352338"));