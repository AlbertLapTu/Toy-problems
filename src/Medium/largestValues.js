var largestValues = function(root) {
  let levels = {};
  let results = [];

  const traverse = (root, depth) => {
    if (!root) return;

    if (levels[depth] === undefined) {
      levels[depth] = root.val;
    }

    levels[depth] = Math.max(root.val, levels[depth]);

    traverse(root.left, depth + 1);
    traverse(root.right, depth + 1);
  };

  traverse(root, 1);

  Object.keys(levels).forEach(key => results.push(levels[key]));

  return results;
};
