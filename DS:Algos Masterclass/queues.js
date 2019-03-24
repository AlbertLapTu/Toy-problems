class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  //Adds to the end of the line
  enqueue(val) {
    let newNode = new Node(val);

    if (this.size === 0) {
      this.first = this.last = newNode;
      this.size++;
    } else {
      let currentLast = this.last;
      this.last = newNode;
      currentLast.next = this.last;
      return ++this.size;
    }
  }
  //Removes from the front of the line, and returns
  dequeue() {
    if (this.size === 0) {
      return null;
    } else {
      let currentFirst = this.first;
      if (this.first === this.last) {
        this.last = null;
      }
      this.first = currentFirst.next;
      this.size--;
      return currentFirst;
    }
  }
}

/* 
BIG O

Insertion/Removal O(1)
Searching/Access O(N)

*/
