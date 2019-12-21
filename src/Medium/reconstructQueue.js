/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
  //Sort from shortest to tallest
  // O(n log n) sorting operation
  let sortedByHeight = people.slice().sort((a, b) => {
    return a[0] - b[0];
  });
  let queue = [];
  let largest = sortedByHeight.pop();
  queue.push(largest);

  //Two pointers pointing at currentShortest, and currentTallest
  let start = 0;
  let end = sortedByHeight[sortedByHeight.length - 1];

  while (sortedByHeight.length) {
    //If the height of the end is greater than the largest, update largest to that currentHeight
    if (sortedByHeight[end][0] > largest[0]) {
      largest = sortedByHeight.pop();
      sortedByHeight(unshift(largest));
      end--;
    } else {
      sorted;
    }
  }
};

/*

Start by sorting the height from tallest to shortest

[
    [4,4]
    [5,0]
    [5,2]
    [6,1]
    [7,0]
]

queue = [[7,1],]




[h, k]
h = height of the person
k = number of people I should have in front of me with a h >= my height. 

*/
