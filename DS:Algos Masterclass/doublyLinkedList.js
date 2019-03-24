class Node {
  constructor(val, prev, next) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class doublyLinkedList {
  consructor(head, tail, length) {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    //If there is no head, add the node to be both the head and the tail
    if (!this.head)  {
      this.head = this.tail = newNode;
      length++;
    }

    let currentTail = this.tail;
    currentTail.next = newNode;
    currentTail.next.prev = currentTail;
    this.length++;

    //Insertion doesn't need to be accessed through the head.
      //Get the tail value, and set the tail .next to be the nnew node
      //Store the currentTail in a varaible
        //set the tail to be the new node. 
        //Set the newNode .prev to be the previous tail
        //Increment the length of list by 1;

    //Store the currentTail in a variable
      //Set the tail's value to the newNode
        //Update the newNode previous value to be the old tail
    }


  }
  pop() {}
  shift() {}
  unshift() {}
  get() {}
  set() {}
  insert() {}
}
