class Node {
  constructor(item, priority) {
    this.item = item;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.compareFunc = function MAX_PRIORITY(a, b) {
      return a.priority > b.priority;
    };
    this.size = 0;
    this.heap = [];
  }

  getParent(i) {
    return Math.floor((i - 1) / 2);
  }

  getLeft(i) {
    return i * 2 + 1;
  }

  getRight(i) {
    return i * 2 + 2;
  }

  getSize() {
    return this.size;
  }

  insert(item, priority) {
    this.heap.push(new Node(item, priority));
    this.size++;
    this.HeapifyUp(this.size - 1, this.heap);
  }

  removeMax() {
    if (this.size === 0) throw new Error('Empty heap');
    this.swap(0, this.size - 1, this.heap);
    let nodeToRemove = this.heap.pop();
    this.size--;
    this.heapifyDown(0, this.size - 1, this.heap);
    return nodeToRemove;
  }

  heapifyUp(currentIdx, heap) {
    let parentIdx = this.getParent(currentIdx);
    while (currentIdx > 0) {
      if (this.compareFunc(heap[currentIdx], heap[parentIdx])) {
        this.swap(currentIdx, parentIdx, heap);
        currentIdx = parentIdx;
        parentIdx = this.getParent(currentIdx);
      } else {
        return;
      }
    }
  }

  heapifyDown(currentIdx, endIdx, heap) {
    let leftChild = this.getLeft(currentIdx);
    while (leftChild <= endIdx) {
      let rightChild = this.getRight(currentIdx) <= endIdx ? this.getRight(currentIdx) : -1;
      let idxToSwap;
      if (rightChild === -1) {
        if (this.compareFunc(heap[rightChild], heap[leftChild])) {
          idxToSwap = rightChild;
        } else {
          idxToSwap = leftChild;
        }
      }

      if (this.compareFunc(heap[idxToSwap], heap[currentIdx])) {
        this.swap(idxToSwap, currentIdx, heap);
        currentIdx = idxToSwap;
        leftChild = this.getLeft(currentIdx);
      } else {
        return;
      }
    }
  }

  swap(i, j, heap) {
    [([heap[i], heap[j]] = [[heap[j], heap[i]]])];
  }
}
