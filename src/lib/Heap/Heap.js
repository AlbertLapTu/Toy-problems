class MaxHeap {
  constructor() {
    this._heap = [];
  }

  insert(value) {
    this._heap.push(value);
    this.bubbleUp();
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
    return this._heap[this.getLeftChildIdx(idx)];
  }

  /**
   * @param {number} idx - Index of the parent node
   * @return {number} The value corresponding to the right child node
   */

  getRightChild(idx) {
    return this._heap[this.getRightChildIdx(idx)];
  }

  getParentIdx(idx) {
    return Math.floor((idx - 1) / 2);
  }

  bubbleUp() {
    let idx = this._heap.length - 1;
    let element = this._heap[idx];

    while (idx > 0) {
      let parentIdx = this.getParentIdx(idx);
      let parent = this._heap[parentIdx];

      if (element <= parent) {
        break;
      }

      this.swap(this._heap, parentIdx, idx);
      idx = parentIdx;
    }
  }

  //TODO: Bubble down
  bubbleDown() {}

  swap(heap, i, j) {
    let temp = heap[i];
    heap[i] = heap[j];
    heap[j] = temp;
  }

  extractMax() {
    this.swap(this._heap, 0, this._heap.length - 1);
    const max = this._heap.pop();
    this.bubbleDown();
    return max;
  }
}

const maxHeap = new MaxHeap();
maxHeap.insert(41);
maxHeap.insert(39);
maxHeap.insert(33);
maxHeap.insert(18);
maxHeap.insert(27);
maxHeap.insert(12);
maxHeap.insert(55);
console.log(maxHeap.extractMax());

module.exports = MaxHeap;
