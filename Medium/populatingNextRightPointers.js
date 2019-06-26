/*
You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. 
The binary tree has the following definition:

struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}

Intuition: Use preorder Tree traversal and assign a next value on each recursive call. 

*/

function Node(val) {
  this.val = val;
  this.left = this.right = null;
  this.next = null;
}

var Tree = new Node(1);
Tree.left = new Node(2);
Tree.right = new Node(3);
Tree.left.left = new Node(4);
Tree.left.right = new Node(5);
Tree.right.left = new Node(6);
Tree.right.right = new Node(7);

var connect = function(root) {
  debugger;
  if (!root || !root.left) return root;

  root.left.next = root.right;
  root.right.next = root.next ? root.next.left : null;

  connect(root.left);
  connect(root.right);

  return root;
};

connect(Tree);
