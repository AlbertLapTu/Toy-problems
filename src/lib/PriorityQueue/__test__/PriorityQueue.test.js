const PriorityQueue = require('../PriorityQueue');

describe('PriorityQueue', () => {
  const Queue = new PriorityQueue();
  const buildData = [
    { val: 'Lowest', priority: 55 },
    { val: 'SecondLowest', priority: 39 },
    { val: 'Emergency', priority: 1 },
    { val: 'Mild', priority: 5 },
    { val: 'Value 1', priority: 9 },
  ];

  test('Should contain helper functions', () => {
    expect(Queue.enqueue).toBeTruthy();
    expect(Queue.dequeue).toBeTruthy();
    expect(Queue.getLeftChildIdx).toBeTruthy();
    expect(Queue.getRightChildIdx).toBeTruthy();
    expect(Queue.getLeftChild).toBeTruthy();
    expect(Queue.getRightChild).toBeTruthy();
    expect(Queue.getParentIdx).toBeTruthy();
    expect(Queue.bubbleUp).toBeTruthy();
    expect(Queue.bubbleDown).toBeTruthy();
    expect(Queue.swap).toBeTruthy();
    expect(Queue.build).toBeTruthy();
  });

  test('PriorityQueue - functions - enqueue', () => {
    const PQ = new PriorityQueue();

    expect(PQ._queue.length).toBe(0);

    PQ.enqueue('Value one', 5);
    PQ.enqueue('Value two', 10);
    PQ.enqueue('Value three', 1);

    expect(PQ._queue).toHaveLength(3);
    expect(PQ._queue[0].val).toBe('Value three');
    expect(PQ._queue[0].priority).toBe(1);
  });

  test('PriorityQueue - functions - getLeftChildIdx/getRightChildIdx', () => {
    const PQ = new PriorityQueue();
    PQ.build(buildData);

    const leftChildIdx = PQ.getLeftChildIdx(0);
    const rightChildIdx = PQ.getRightChildIdx(0);

    expect(leftChildIdx).toBe(1);
    expect(rightChildIdx).toBe(2);
  });

  test('PriorityQueue - functions - getLeftChild/getRightChild', () => {
    const PQ = new PriorityQueue();
    PQ.build(buildData);

    const leftChild = PQ.getLeftChild(0);
    const rightChild = PQ.getRightChild(0);

    expect(leftChild.val).toEqual('Mild');
    expect(leftChild.priority).toEqual(5);
    expect(rightChild.val).toEqual('SecondLowest');
    expect(rightChild.priority).toEqual(39);
  });

  test('PriorityQueue - functions - getParentIdx', () => {
    const PQ = new PriorityQueue();
    PQ.build(buildData);

    const parentIdx = PQ.getParentIdx(2);

    expect(parentIdx).toBe(0);
  });

  test('PriorityQueue - functions - dequeue', () => {
    const PQ = new PriorityQueue();
    PQ.build(buildData);

    const firstMin = PQ.dequeue();
    const secondMin = PQ.dequeue();
    const size = PQ._queue.length;

    expect(firstMin.val).toBe('Emergency');
    expect(firstMin.priority).toBe(1);
    expect(secondMin.val).toBe('Mild');
    expect(secondMin.priority).toBe(5);
    expect(size).toBe(3);
  });

  //TODO: BubbleUp/BubbleDown tests
});
