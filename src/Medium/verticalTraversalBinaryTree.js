/*

Given a binary tree, return the vertical order traversal of its nodes values.

For each node at position (X, Y), its left and right children respectively will be at positions (X-1, Y-1) and (X+1, Y-1).

Running a vertical line from X = -infinity to X = +infinity, whenever the vertical line touches some nodes, we report the values of the nodes in order from top to bottom (decreasing Y coordinates).

If two nodes have the same position, then the value of the node that is reported first is the value that is smaller.

Return an list of non-empty reports in order of X coordinate.  Every report will have a list of values of nodes.

 


*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalTraversal = function(root) {
  let arrayLocations = [];

  const dfs = (root, x, y) => {
    if (!root) return null;
    arrayLocations.push(new CustomNode(root.val, x, y));

    dfs(root.left, x - 1, y - 1);
    dfs(root.right, x + 1, y + 1);
  };

  dfs(root, 0, 0, arrayLocations);

  let hash = {};

  for (let i = 0; i < arrayLocations.length; i++) {
    const { value, x, y } = arrayLocations[i];

    if (!hash[(x, y)]) {
      hash[(x, y)] = [value];
    } else {
      hash[(x, y)].push(value);
    }
  }

  hash = Object.entries(hash).sort((a, b) => a[0] - b[0]);

  let output = [];
  for (let i = 0; i < hash.length; i++) {
    let [position, value] = hash[i];
    value.length > 1 ? value.sort((a, b) => a - b) : value;
    output.push(value);
  }

  return output;
};

class CustomNode {
  constructor(value, x, y) {
    this.value = value;
    this.x = x;
    this.y = y;
  }
}
