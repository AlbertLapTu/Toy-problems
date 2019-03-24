class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(head, tail, length) {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  //Insert to the end
  insert(val) {
    let node = new Node(val);

    if (!this.head) {
      this.head = node;
      this.tail = this.head;
      this.next = null;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }
    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }

    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  unshift(val) {
    //Make a new node
    //Grab this.head and store in variable
    //Set new node to the this.head
    //set new node.next to the stored head variable
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    let counter = 0;
    let currentNode = this.head;

    if (index < 0 || index >= this.length) {
      return null;
    }

    while (currentNode) {
      if (counter === index) {
        return currentNode;
      }
      currentNode = currentNode.next;
      counter++;
    }
  }

  //OLD SET. USE NATIVE METHOD INSTEAD
  // set(index, value) {
  //   //Goes through the LL until it reaches the index. Then ch ange the nodes value to the val
  //   let counter = 0;
  //   let currentNode = this.head;

  //   if (index < 0 || index >= this.length) {return null;}

  //   while(currentNode) {
  //     if (counter === index) {
  //       currentNode.val = value;
  //       return true;
  //     }
  //     currentNode = currentNode.next;
  //     counter++;
  //   }
  //   return false;
  // }

  set(index, value) {
    var foundNode = this.get(index);
    if (foundNode) {
      foundNode.value = val;
    } else {
      return false;
    }
  }

  remove(index) {
    if (index === this.length - 1) {
      return this.pop();
    }

    if (index === 0) {
      return this.shift();
    }

    if (index < 0 || index >= this.length) {
      return undefined;
    }

    let nodeToRemove = this.get(index);
    let previousNode = this.get(index - 1);

    previousNode.next = nodeToRemove.next;
    this.length--;
    return nodeToRemove;
  }

  reverse() {
    //If the list is 0, return undefined
    if (this.length === 0) {
      return undefined;
    }

    //If the list is only 1, return the list
    if (this.length === 1) {
      return this;
    }

    let listNode = this.head;
    let nextNode = currentNode.next;
    while (currentNode) {}

    //While there are nodes to iterate over
    //If the currentNodes index = 0, set that node to be the tail
    //If the currentNode index = length-1, set that node to be the head
  }
}
