//Should be simple to change to min once you define your max

class PriorityQueue {
  constructor(value) {
    this.values = []; //This is an array
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority);

    this.values.push(newNode);
    this.bubble();
  }

  bubble() {
    let lastChildIdx = this.values.length - 1;
    let lastChild = this.values[lastChildIdx];

    while (lastChildIdx > 0) {
      let parentIdx = Math.floor((lastChildIdx - 1) / 2);
      let parent = this.values[parentIdx];

      if (lastChild.priority <= parent.priority) {
        break;
      }

      this.values[parentIdx] = lastChild;
      this.values[lastChildIdx] = parent;
      lastChildIdx = parentIdx;
    }
  }
  //Extract
  dequeue() {
    let maxValue = this.values[0];
    let minValue = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = minValue;
      this.heapifyDown();
    }
    return maxValue;
  }

  heapifyDown() {
    //Start at 0 of this.values
    let index = 0;
    let length = this.values.length;
    let element = this.values[0];
    //Find the children
    while (true) {
      let leftChildIdx = 2 * index + 1;
      let rightChildIdx = 2 * index + 2;
      let rightchild;
      let leftchild;
      let swap = null;
      //Check if index is in bounds
      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority > element.priority) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority > element.priority) ||
          (swap !== null && rightChild.priority > leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}
