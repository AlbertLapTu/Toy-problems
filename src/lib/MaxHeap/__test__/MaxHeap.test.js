const MaxHeap = require('../MaxHeap');

describe('MaxHeap', () => {
  const maxHeap = new MaxHeap();

  test('Should contain helper functions', () => {
    expect(maxHeap.insert).toBeTruthy();
    expect(maxHeap.getLeftChildIdx).toBeTruthy();
    expect(maxHeap.getRightChildIdx).toBeTruthy();
    expect(maxHeap.getLeftChild).toBeTruthy();
    expect(maxHeap.getRightChild).toBeTruthy();
    expect(maxHeap.getParentIdx).toBeTruthy();
    expect(maxHeap.bubbleUp).toBeTruthy();
    expect(maxHeap.bubbleDown).toBeTruthy();
    expect(maxHeap.swap).toBeTruthy();
    expect(maxHeap.extractMax).toBeTruthy();
    expect(maxHeap.build).toBeTruthy();
  });

  test('MaxHeap - functions - insert', () => {
    const Heap = new MaxHeap();

    expect(Heap._heap.length).toBe(0);

    Heap.insert(5);
    Heap.insert(10);
    Heap.insert(1);

    expect(Heap._heap).toHaveLength(3);
    expect(Heap._heap[0]).toBe(10);
  });

  test('MaxHeap - functions - getLeftChildIdx/getRightChildIdx', () => {
    const Heap = new MaxHeap();
    Heap.build([1, 2, 3, 4, 5]);

    const leftChildIdx = Heap.getLeftChildIdx(0);
    const rightChildIdx = Heap.getRightChildIdx(0);

    expect(leftChildIdx).toBe(1);
    expect(rightChildIdx).toBe(2);
  });

  test('MaxHeap - functions - getLeftChild/getRightChild', () => {
    const Heap = new MaxHeap();
    Heap.build([55, 39, 1, 5, 10]);

    const leftChild = Heap.getLeftChild(0);
    const rightChild = Heap.getRightChild(0);

    expect(leftChild).toBe(39);
    expect(rightChild).toBe(1);
  });

  test('MaxHeap - functions - getParentIdx', () => {
    const Heap = new MaxHeap();
    Heap.build([55, 39, 1, 5, 10]);

    const parentIdx = Heap.getParentIdx(2);

    expect(parentIdx).toBe(0);
  });

  test('MaxHeap - functions - extractMax', () => {
    const Heap = new MaxHeap();
    Heap.build([55, 39, 1, 5, 10]);

    const firstMax = Heap.extractMax();
    const secondMax = Heap.extractMax();
    const size = Heap._heap.length;

    expect(firstMax).toBe(55);
    expect(secondMax).toBe(39);
    expect(size).toBe(3);
  });
});
