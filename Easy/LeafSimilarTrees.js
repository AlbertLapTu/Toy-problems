var leafSimilar = function(root1, root2) {
    let r1 = [];
    let r2 = [];
    
    let r1Tree = traverse(root1, r1);
    let r2Tree = traverse(root2, r2);
    
    let firstPointer = 0;
    let secondPointer = 0;
    
    while (firstPointer !== r1.length) {
        if (r1[firstPointer] !== r2[secondPointer]) {
            return false;
        }
        firstPointer++;
        secondPointer++;
    }
    return true;
};

const traverse = (root, paths) => {
    if (!root) {
        return null;
    }
    
    if (!root.left && !root.right) {
        paths.push(root.val);
        return;
    }
    
    if (root.left) {
        traverse(root.left, paths)
    }
    
    if (root.right) {
        traverse(root.right, paths);
    }
}