/*
For a given nonempty string s find a minimum substring t and the maximum number k, such that the entire string s is equal to t repeated k times.

The input string consists of lowercase latin letters.

Your function should return :

a tuple (t, k) (in Python)
an array [t, k] (in Ruby and JavaScript)
in C, return k and write to the string t passed in parameter
Example #1:

for string

s = "ababab";
the answer is

["ab", 3]
Example #2:

for string

s = "abcde"
the answer is

["abcde", 1]
because for this string "abcde" the minimum substring t, such that s is t repeated k times, is itself.
// Rules:
// 1. not case-sensitive
// input: string
// output: array
// Data structure: array
// Algo
// iterate over string making substrings from 1 to to the length
// if current substring repeated (length of substring divided
//   by length of string) equals string
// return an array with substring and (ss L / s L);
*/


function f(str) {
  for (let i = 1; i <= str.length; i++) {
    let t = str.slice(0, i)
    let k = str.length / t.length;

    if (k % 1 !== 0) continue;

    if (t.repeat(k) === str) return [t, k];  
  }
}


