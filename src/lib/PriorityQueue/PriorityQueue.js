const Node = require('./Node');

class PriorityQueue {
  constructor() {
    this._queue = [];
  }

  enqueue(val, priority) {
    this._queue.push(new Node(val, priority));
    this.bubbleUp();
  }

  dequeue() {
    this.swap(this._queue, 0, this._queue.length - 1);
    const highestPriority = this._queue.pop();
    this.bubbleDown();
    return highestPriority;
  }

  /**
   * @param {number} idx - Retrieves the index of where the left child is located
   * @return {number} The index of the current parent's left child
   */

  getLeftChildIdx(idx) {
    return 2 * idx + 1;
  }

  /**
   * @param {number} idx - Retrieves the index of where the right child is located
   * @return {number} The index of the current parent's right child
   */

  getRightChildIdx(idx) {
    return 2 * idx + 2;
  }

  /**
   * @param {number} idx - Index of the parent node
   * @return {number} The value corresponding to the left child node
   */

  getLeftChild(idx) {
    return this._queue[this.getLeftChildIdx(idx)];
  }

  /**
   * @param {number} idx - Index of the parent node
   * @return {number} The value corresponding to the right child node
   */

  getRightChild(idx) {
    return this._queue[this.getRightChildIdx(idx)];
  }

  getParentIdx(idx) {
    return Math.floor((idx - 1) / 2);
  }

  bubbleUp() {
    let idx = this._queue.length - 1;
    let element = this._queue[idx];

    while (idx > 0) {
      let parentIdx = this.getParentIdx(idx);
      let parent = this._queue[parentIdx];

      if (element.priority >= parent.priority) {
        break;
      }

      this.swap(this._queue, parentIdx, idx);
      idx = parentIdx;
    }
  }

  bubbleDown() {
    let idx = 0;

    const length = this._queue.length;
    const element = this._queue[0];

    while (true) {
      let leftChild;
      let rightChild;
      let swap = null;

      if (this.getLeftChildIdx(idx) < length) {
        leftChild = this.getLeftChild(idx);
        if (leftChild.priority < element.priority) {
          swap = this.getLeftChildIdx(idx);
        }
      }

      if (this.getRightChildIdx(idx) < length) {
        rightChild = this.getRightChild(idx);
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = this.getRightChildIdx(idx);
        }
      }

      if (swap === null) break;
      this.swap(this._queue, idx, swap);
      idx = swap;
    }
  }

  build(arr) {
    for (let i = 0; i < arr.length; i++) {
      this.enqueue(arr[i].val, arr[i].priority);
    }
  }

  swap(queue, i, j) {
    let temp = queue[i];
    queue[i] = queue[j];
    queue[j] = temp;
  }
}

module.exports = PriorityQueue;
