/*
Your goal is to write the group_and_count method, which should receive and array as unique parameter and return a hash. Empty or nil input must return nil instead of a hash. This hash returned must contain as keys the unique values of the array, and as values the counting of each value.

Example usage:

input = [1,1,2,2,2,3]

group_and_count(input)# == {1=>2, 2=>3, 3=>1}
The following methods were disabled:

Array#count
Array#length

Problem/ Test Cases:
Rules:
- empty array or null must return null
- Return an object that counts all the values in the array

Input: array
Output: object
Data Structure: array/object
Algo:
- Guard clause
  - if input null or empty array return null
- Create variable obj and initialize to empty object
- iterate over array
- if value is a key in obj increment value of property
  - else create property and assign 1 to property
- end loop
- return obj

*/

function groupingAndCounting(arr) {
  if (!arr) return null;
  if (arr.length === 0) return null;

  let obj = {}

  arr.forEach(element => {
    obj[element] ? obj[element] += 1 : obj[element] = 1;
  });

  return obj;
}