/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
  let queue = [root];
  let treeArray = [];

  while (queue.length) {
    let currElem = queue.shift();
    treeArray.push(currElem.val);

    if (currElem.left) {
      queue.push(currElem.left);
    }
    if (currElem.right) {
      queue.push(currElem.right);
    }
  }

  let leftPointer = 0;
  let rightPointer = treeArray.length - 1;

  while (leftPointer <= rightPointer) {
    if (treeArray[leftPointer] + treeArray[rightPointer] === k) {
      return true;
    } else if (treeArray[leftPointer] + treeArray[rightPointer] > k) {
      rightPointer--;
    } else if (treeArray[leftPointer] + treeArray[rightPointer] < k) {
      leftPointer++;
    }
  }
  return false;
};

//Generate an array using pre-order raversal.
//Once you finish making the array, use two pointers to find sum
