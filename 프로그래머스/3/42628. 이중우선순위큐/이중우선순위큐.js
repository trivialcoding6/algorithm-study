class MinHeap {
  constructor() {
    this.heap = [];
  }

  _bubbleUp(idx) {
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);

      if (this.heap[parentIdx] <= this.heap[idx]) break;

      [this.heap[parentIdx], this.heap[idx]] = [
        this.heap[idx],
        this.heap[parentIdx],
      ];

      idx = parentIdx;
    }
  }

  _bubbleDown(idx) {
    let smallestIdx = idx;
    const lastIndex = this.heap.length - 1;

    while (true) {
      const leftIdx = idx * 2 + 1;
      const rightIdx = idx * 2 + 2;

      if (leftIdx <= lastIndex && this.heap[leftIdx] < this.heap[smallestIdx]) {
        smallestIdx = leftIdx;
      }

      if (
        rightIdx <= lastIndex &&
        this.heap[rightIdx] < this.heap[smallestIdx]
      ) {
        smallestIdx = rightIdx;
      }

      if (smallestIdx === idx) break;

      [this.heap[idx], this.heap[smallestIdx]] = [
        this.heap[smallestIdx],
        this.heap[idx],
      ];

      idx = smallestIdx;
    }
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  push(node) {
    this.heap.push(node);
    this._bubbleUp(this.heap.length - 1);
  }

  pop() {
    if (this.isEmpty()) return null;

    const top = this.heap[0];
    const end = this.heap.pop();

    if (!this.isEmpty()) {
      this.heap[0] = end;
      this._bubbleDown(0);
    }

    return top;
  }
}

function findMaxInMinHeap(heap) {
  const n = heap.length;
  const start = Math.floor(n / 2);

  let maxValue = heap[start];
  for (let i = start; i < n; i++) {
    if (heap[i] > maxValue) {
      maxValue = heap[i];
    }
  }
  return maxValue;
}

function solution(operations) {
  const minHeap = new MinHeap();

  for (const operation of operations) {
    const [command, value] = operation.split(" ");

    if (command === "I") {
      minHeap.push(Number(value));
    } else if (command === "D") {
      if (minHeap.isEmpty()) continue;
      if (value === "1") {
        const maxValue = findMaxInMinHeap(minHeap.heap);
        minHeap.heap = minHeap.heap.filter((num) => num !== maxValue);
      } else {
        minHeap.pop();
      }
    }
  }

  if (minHeap.isEmpty()) {
    return [0, 0];
  } else {
    return [findMaxInMinHeap(minHeap.heap), minHeap.heap[0]];
  }
}