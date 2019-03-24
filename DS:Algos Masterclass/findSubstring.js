//loop over longer string
//loop over the shorter string
//if chars don't match, break out of inner loop
  //if match, keep going until you hit the end of the short string
    //if hit end of short string, increment count of matches
    //Return count

const findSubstring = (str1, str2) => {
  let counter = 0;
  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      if (str2[j] !== str1[i+j]) {
        break;
      }
      if (j === str2.length-1) {
        counter++;
      }
    }
  }
  return counter;
}

findSubstring('wowomgzomg', 'omg');