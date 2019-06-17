var levelOrder = function(root) {
  if (!root) return [];
  const output = [];
  const queue = [root];

  //As long as the queue isn't empty
  while (queue.length > 0) {
    //Put all items on same level into the queue
    let qSize = queue.length;
    let currentLevel = [];

    //Iterate over the levels and add into queue
    for (let i = 0; i < qSize; i++) {
      let node = queue.shift();
      currentLevel.push(node.val);

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }
    output.push(currentLevel);
  }

  return output;
};
