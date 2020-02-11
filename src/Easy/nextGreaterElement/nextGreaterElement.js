function nextGreaterElement(nums1, nums2) {
  const res = [];

  for (let i = 0; i < nums1.length; i++) {
    const elem = nums1[i];

    const position = find(nums2, elem);
    if (position >= 0) {
      for (let j = position; j < nums2.length; j++) {
        let next = nums2[j];
        if (next > elem) {
          res.push(next);
          break;
        }

        if (j === nums2.length - 1) {
          res.push(-1);
        }
      }
    }
  }
  return res;
}

function find(arr, elem) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === elem) {
      return i;
    }
  }
  return -1;
}

module.exports = nextGreaterElement;
