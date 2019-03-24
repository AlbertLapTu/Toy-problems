/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
  let storage = {};

  for (let i = 0; i < A.length; i++) {
    !storage[A[i]] ? (storage[A[i]] = 1) : storage[A[i]]++;
  }

  // console.log(storage);

  return Math.max.apply(null, Object.keys(storage));
};

repeatedNTimes([2, 1, 2, 5, 3, 2]);
