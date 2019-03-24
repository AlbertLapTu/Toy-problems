class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  //Stacks always push to the front
  push(val) {
    let newNode = new Node(val);

    if (this.size === 0) {
      this.first = this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
      this.size++;
    }
    return this.size;
  }

  //Remove the first node
  pop() {
    if (this.size === 0) {
      return null;
    } else {
      let temp = this.first;
      if (this.first === this.last) {
        this.last = null;
      }
      this.first = this.first.next;
      this.size--;
      return temp.val;
    }
  }
}

/* 
BIG O
Insertion/Removal - O(1)
Search O(N)
Access O(N)

*/
