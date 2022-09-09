/*
Complete the solution so that it returns the number of times the search_text is found within the full_text.

Usage example:

solution('aa_bb_cc_dd_bb_e', 'bb') # should return 2 since bb shows up twice
solution('aaabbbcccc', 'bbb') # should return 1
*/

// input: two strings
// output: number
// Algo
// - create variable substrings and initialize to empty array
// - iterate over fullText 
// - create variable starting string and initialize to 
//   a copy of string starting at current index i 
// - iterate over starting string starting at second index 
//   going to the length of starting string using index j
//     Add substring from index i to index j to substrings
// - end both loops
// - iterate over substrings and count the amount of times 
//   searchText appears
// - return count;

function solution(fullText, searchText){
  let subStrings = [];

  for (let i = 0; i < fullText.length; i++) {
  let startingString = fullText.slice(i);
    for (let j = 1; j <= startingString.length; j++) {
      subStrings.push(startingString.slice(0, j));
    }
  }

  return subStrings.reduce((pv, cv) => {
    if (searchText === cv) {
      pv += 1;
    }
    return pv;
  }, 0);
}