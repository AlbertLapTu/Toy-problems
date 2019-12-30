const MinHeap = require('../MinHeap');

describe('MinHeap', () => {
  const minHeap = new MinHeap();

  test('Should contain helper functions', () => {
    expect(minHeap.insert).toBeTruthy();
    expect(minHeap.getLeftChildIdx).toBeTruthy();
    expect(minHeap.getRightChildIdx).toBeTruthy();
    expect(minHeap.getLeftChild).toBeTruthy();
    expect(minHeap.getRightChild).toBeTruthy();
    expect(minHeap.getParentIdx).toBeTruthy();
    expect(minHeap.bubbleUp).toBeTruthy();
    expect(minHeap.bubbleDown).toBeTruthy();
    expect(minHeap.swap).toBeTruthy();
    expect(minHeap.extractMin).toBeTruthy();
    expect(minHeap.build).toBeTruthy();
  });

  test('MinHeap - functions - insert', () => {
    const Heap = new MinHeap();

    expect(Heap._heap.length).toBe(0);

    Heap.insert(5);
    Heap.insert(10);
    Heap.insert(1);

    expect(Heap._heap).toHaveLength(3);
    expect(Heap._heap[0]).toBe(1);
  });

  test('MinHeap - functions - getLeftChildIdx/getRightChildIdx', () => {
    const Heap = new MinHeap();
    Heap.build([1, 2, 3, 4, 5]);

    const leftChildIdx = Heap.getLeftChildIdx(0);
    const rightChildIdx = Heap.getRightChildIdx(0);

    expect(leftChildIdx).toBe(1);
    expect(rightChildIdx).toBe(2);
  });

  test('MinHeap - functions - getLeftChild/getRightChild', () => {
    const Heap = new MinHeap();
    Heap.build([55, 39, 1, 5, 10]);

    const leftChild = Heap.getLeftChild(0);
    const rightChild = Heap.getRightChild(0);

    expect(leftChild).toBe(5);
    expect(rightChild).toBe(39);
  });

  test('MinHeap - functions - getParentIdx', () => {
    const Heap = new MinHeap();
    Heap.build([55, 39, 1, 5, 10]);

    const parentIdx = Heap.getParentIdx(2);

    expect(parentIdx).toBe(0);
  });

  test('MinHeap - functions - extractMin', () => {
    const Heap = new MinHeap();
    Heap.build([55, 39, 1, 5, 10]);

    const firstMin = Heap.extractMin();
    const secondMin = Heap.extractMin();
    const size = Heap._heap.length;

    expect(firstMin).toBe(1);
    expect(secondMin).toBe(5);
    expect(size).toBe(3);
  });
});
