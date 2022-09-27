/*
Common Elements 
Create a method that takes two lists of numbers sorted in ascending order and returns an array of numbers which are common to both the input arrays.


# p common_elements([-1, 3, 4, 6, 7, 9], [1, 3]) == [3]
# p common_elements([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10]) == [7, 4, 3, 1]
# p common_elements([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5]) == [5, 4, 2, 1]
# # p common_elements([1, 2, 3, 4, 5], [10, 12, 13, 15]) == []
# # p common_elements([1, 2, 2, 2, 3, 4, 5], [1, 2, 2, 4, 5]) == [5, 4, 2, 2, 1]

Algo:

- create variable result and assign empty array
- create variable count and assign empty object
- iterate over 1 array 
  - if element in count increment by 1 else create property element and assign 1
- end loop
- iterate over array 2
- if element property is in object and value greater than 0 
    add element to result
    decrement count of element by 1
- end loop
- return result sorted in descending order


*/

function commonElements(arr1, arr2) {
  let result = [];
  let count = {};

  arr1.forEach(num => count[num] ? count[num] += 1 : count[num] = 1)
  
  arr2.forEach(num => {
    if (count[num]) {
      result.push(num);
      count[num] -= 1;
    }
  });

  return result.sort((a, b) => b - a);
}

/*
##Doesn't include all occurences of repeated numbers that are common##
function commonElements(arr1, arr2) {
  return arr1.filter((int, idx) => arr2.includes(int) && idx === arr1.indexOf(int))
             .sort((a, b) => b - a);
}
*/

console.log(commonElements([-1, 3, 4, 6, 7, 9], [1, 3]));
console.log(commonElements([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10]));
console.log(commonElements([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5]));
console.log(commonElements([1, 2, 3, 4, 5], [10, 12, 13, 15]));
console.log(commonElements([1, 2, 2, 2, 3, 4, 5], [1, 2, 2, 4, 5]));