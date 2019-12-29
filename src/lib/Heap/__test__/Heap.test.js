const MaxHeap = require('../Heap');

describe('Heap', () => {
  const maxHeap = new MaxHeap();

  test('Should exist', () => {
    expect(maxHeap).toBeTruthy();
  });
});
