/* DIGIT SUM
You are given a string s consisting of digits and an integer k.

A round can be completed if the length of s is greater than k. In one round, do the following:

Divide s into consecutive groups of size k such that the first k characters are in the first group, the next k characters are in the second group, and so on. Note that the size of the last group can be smaller than k.

Replace each group of s with a string representing the sum of all its digits. For example, "346" is replaced with "13" because 3 + 4 + 6 = 13.
Merge consecutive groups together to form a new string. If the length of the string is greater than k, repeat from step 1.

Return s after all rounds have been completed.


Example 1:

Input: s = "11111222223", k = 3
Output: "135"
Explanation:
- For the first round, we divide s into groups of size 3: "111", "112", "222", and "23".
 ​​​​​Then we calculate the digit sum of each group: 1 + 1 + 1 = 3, 1 + 1 + 2 = 4, 2 + 2 + 2 = 6, and 2 + 3 = 5.
 So, s becomes "3" + "4" + "6" + "5" = "3465" after the first round.
- For the second round, we divide s into "346" and "5".
 Then we calculate the digit sum of each group: 3 + 4 + 6 = 13, 5 = 5.
 So, s becomes "13" + "5" = "135" after second round.
Now, s.length <= k, so we return "135" as the answer.


examples/test cases:


digit_sum("123456", 2) == '12'
digit_sum("11111222223", 3) == "135"
digit_sum("00000000", 3) == "000"


Problem/ Test cases
Rules:
- divide s into k sixed groups. replace groups with sum of digits in group. Kepp doing this while s is greater than Kepp
- Always valid Input

Input: string and number
Output: string
Data Structure: array

Algo:
- create function separate groups 
  - pass string and k
  - create result variable and initialize to empty array 
  - create count variable and initialize to 0
  - create variable index and initialize to 0
  - iterate over string 
  - if count is 0 
    - pass current char coerced to number to result in an array at index of index 
  - else 
    - add current char coerced to number to subarray of result at index 
  - if count k - 1
    - count assigned 0
    - increment index
  - else increment count 
  - end loop
  - return result

*/

function separate(str, k) {
  let result = [];
  let count = 0;
  let index = 0;
  
  for (let digit of str) {
    if (count === 0) {
      result[index] = [Number(digit)];
    } else {
      result[index].push(Number(digit));
    }

    if (count === k - 1) {
      count = 0;
      index += 1;
    } else {
      count += 1;
    }
  }

  return result;
}

/*

- create function compress
  - pass a string and k to seperate
  - iterate over string and k passed to seperate 
    - transform subarrays to sum of values
  - return transformed array joined as string 

*/

function compress(str, k) {
  let arr = separate(str, k);

  return arr.map(subArr => subArr.reduce((pv, cv) => pv + cv))
            .join('');
}

/*

- main function
  - while s length is greater than k 
    - assign s to string and s passed to compress
  - end loop
- return s

*/

function digitSum(str, k) {
  while (str.length > k) {
    str = compress(str, k);
  }
  return str;
}

console.log(digitSum("123456", 2));
console.log(digitSum("11111222223", 3));
console.log(digitSum("00000000", 3));