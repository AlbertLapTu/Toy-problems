// Can you see this?
//sure
/*

Given a string, check if a palindrome can be obtained from it by at most one swap of some pair of characters.

Example

For inputString = "aabaa", the output should be
isOneSwapEnough(inputString) = true.

It is already a palindrome.

For inputString = "abab", the output should be
isOneSwapEnough(inputString) = true.

For example, one can swap the leftmost 'a' with the leftmost 'b'.

For inputString = "abc", the output should be
isOneSwapEnough(inputString) = false

--------- Notes ---------

Ex.1
Input: 'abab' -> 'baab'

Ex.2
Input: 'racecra' -> 'racecar'

Ex.3 'bab' -> true

Ex.4

'biggbi'

//Validate input if palindrome. 
  //if not palindrome
    //do stuff

'racecra'

 v    v
[r,   r,   c,   e,  c,  a, a]

arcecra


Time: O(n^2)
Space; O(n^2)


'dad' -> If odd, there should onyl be 1 char that has a count of 1

'aaabbb' 

b: 3 
a: 3 



*/

function palindrome(str) {
  //Check if input is a palindrome
  if (isPalindrome(str)) return true;
  let strCopy = str.slice(0).split(''); // [r,a,c,e,c,r,a] --> [a,r,c,e,c,r,a]

  for (let i = 0; i < str.length - 1; i++) {
    let j = i + 1;
    swap(strCopy, i, j);
    if (isPalindrome(strCopy)) {
      return true;
    } else {
      strCopy = str.slice(0).split('');
      continue;
    }
  }
  return false;
}

function isPalindrome(str) {
  let p1 = 0;
  let p2 = str.length - 1;

  while (p1 <= p2) {
    if (str[p1] !== str[p2]) {
      return false;
    }
    p1++;
    p2--;
  }
  return true;
}

function swap(arr, elem1, elem2) {
  [arr[elem1], arr[elem2]] = [arr[elem2], arr[elem1]];
  return arr;
}
