/**
 * @param {number[][]} people
 * @return {number[][]}
 */

/*

Suppose you have a random list of people standing in a queue. Each person is described by a pair of integers (h, k), 
where h is the height of the person and k is the number of people in front of this person who have a height greater 
than or equal to h. Write an algorithm to reconstruct the queue.

Note:
The number of people is less than 1,100.


Example

[height, no.OfPeople in front]

Input:
[[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]

Output:
[[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]

Intuition: First, sort the array to have the k value in (h,k) in ascending order. 

Sorted:
[ [ 7, 0 ], [ 5, 0 ], [ 7, 1 ], [ 6, 1 ], [ 5, 2 ], [ 4, 4 ] ]


Stack:
[[7,0] ]

Curr = [5,0]
Output = [[5,0]]

*/

/*

Attempt 1: Sort input array by how many people should be in front, and then 
place each member into a stack in order to keep track of who should be
in front of who. 


*/
var reconstructQueue = function(people) {
  const peopleCopy = people.sort((a, b) => a[1] > b[1]);
  const stack = [peopleCopy[0]];
  const output = [];

  for (let i = 1; i < peopleCopy.length; i++) {
    let topStack = stack[stack.length - 1];
    let [height, peopleInFront] = peopleCopy[i];

    if (height < topStack[0] && peopleInFront <= topStack[1]) {
      output.push([height, peopleInFront]);
    } else if (height <= topStack[0] && peopleInFront > topStack[1]) {
      output.push(stack.pop());
    }
    stack.push([height, peopleInFront]);
  }
  return output;
};

//Solution

/*

Use native sort function in order to handle the cases where:
- personA height is > personB height. 
- personA people in front is > personB people in front. 

From there, insert sorted people into yoru new queue. 


*/

const peopleSort = (a, b) => {
  if (b[0] !== a[0]) {
    return b[0] - a[0];
  } else {
    return a[1] - b[1];
  }
};

const reconstructQueue = people => {
  let peopleCopy = people.sort(peopleSort);
  let sorted = [];

  for (person of peopleCopy) {
    sorted.splice(person[1], 0, person);
  }
  return sorted;
};

console.log(reconstructQueue([[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]]));
