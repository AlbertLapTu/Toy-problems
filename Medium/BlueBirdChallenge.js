/*

The founder of a new startup company is looking for investors and needs to meet with as many of them as
possible. Given a number of investors' schedules, determine the max number of meetings the founder can have.
Each potential investor provides a window of days they are available. The founder can only have one meeting
per day. 

The schedules are given in the form of two lists of integers, s and e. The list s contains integers that 
represent the first day an investor is available, and the list e shows the last days they are available, both inclusive. 
For example, given the list s = [1,2,3,3,3] and e = [2,2,3,4,4], the period each of the 5 investors is available is
summarized as [1,2], [2,2], [3,3] [3,4] and [3,4]. The first three investors can be seen on days 1, 2 and 3 respectively. 
The fourth and fifth investors can only be seen on days 3 or 4. Day 3 is already taken, so only one of them can be seen. 
The masximum number of meetings possible is 4.

Function must return an integer that represents the max number of meetings possible. 

There will not be any negative numbers. 

Constraints:

1 <= n <= 10^5
1 <= s[i], e[i] <= 10^5 (where 0 <= i <= n);
s[i] <= e[i] (where 0 <= i <= n);


Example 2:
availability(s) = [1,1,2]
lastDayAvailable(e) = [1,2,2]

Output: 2

Meeting on the first and second day, but no day to meet third investor. 


Example 1:

Input:
availability(s) = [1,2,1,2,2]
lastDayAvailable(e) = [3,2,1,3,3]

Output: 3

Meet the third investor on the 1st day, second investor on the second day, and any remaining on the third day. 


*/

/*

Current issues - Finding the max date range, and setting an array to that max date range causes less
test cases to pass. 

TO TRY:
One tuple represents the [start, end] that someone can meet. 
If the start date hasn't been taken, take the start date. 
  If the start date HAS been taken, find the next available date in the array and take it (don't need to take the last one!)

*/

function investment(s, e) {
  if (!s || !e) return 0;
  let investorSchedules = [];
  let totalDayRanges = Math.max(...s, ...e);

  //Combine into easier scheduling
  for (let i = 0; i < s.length; i++) {
    investorSchedules.push([s[i], e[i]]);
  }
  //Sort by having the longest end date last
  investorSchedules = investorSchedules.sort((a, b) => (a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]));

  //Get the longest date, and make boolean array to keep track of meetings that have been taken
  let totalAvailableDays = new Array(totalDayRanges).fill(false);

  for (let i = 0; i < investorSchedules.length; i++) {
    let [currentStart, currentEnd] = investorSchedules[i];

    if (currentStart === currentEnd && totalAvailableDays[currentStart] === false) {
      totalAvailableDays[currentStart - 1] = true;
      continue;
    }

    //If the start date hasn't been taken, book meeting
    if (totalAvailableDays[currentStart - 1] === false) {
      totalAvailableDays[currentStart - 1] = true;
      continue;
      //If the left side has been taken, and they gave us a range to search for.
    } else if (totalAvailableDays[currentStart - 1] === true && currentEnd > currentStart) {
      //Find the first available date you can take
      let j = currentStart - 1;
      while (totalAvailableDays[j] === true) {
        j++;
        if (totalAvailableDays[j] === false) {
          totalAvailableDays[j] = true;
          break;
        }
      }
    }
  }
  return totalAvailableDays.filter(day => day === true).length;
}

//Sorted by start date
console.log(investment([1, 2, 1, 2, 2], [3, 2, 1, 3, 3])); //3
console.log(investment([1, 1, 2], [1, 2, 2])); //2
console.log(investment([1, 10, 11], [11, 10, 11])); //3,
console.log(investment([1, 2, 3, 10, 7], [15, 4, 11, 11, 9])); //5
console.log(investment([1, 1, 1, 2], [5, 4, 3, 5])); //4
console.log(investment([1, 2, 1, 4], [4, 3, 4, 4])); //4
console.log(investment([1, 2, 3, 4], [1, 4, 5, 4])); //Expected 4
