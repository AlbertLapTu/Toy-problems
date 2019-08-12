class TrieNode {
  constructor(key) {
    this.key = key;
    this.children = {};
    this.end = false;
  }
}

var words = ['oath', 'pea', 'eat', 'rain'];

function buildTrie(words) {
  let root = {};

  for (word of words) {
    let node = root;
    for (char of word) {
      /**
       * @description: If the root node has the character in it, return the character.
       * Otherwise, give it a new hash to keep track of the children.
       *
       * Once built out, change the node to the next word.
       */
      node = node[char] ? node[char] : (node[char] = {});
      node.word = word;
    }
  }
  return root;
}
