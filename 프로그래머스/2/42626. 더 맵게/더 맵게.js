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
    const current = this.heap[idx];

    while (true) {
      const leftIdx = idx * 2 + 1;
      const rightIdx = idx * 2 + 2;
      let smallestIdx = idx;

      if (
        leftIdx < this.heap.length &&
        this.heap[leftIdx] < this.heap[smallestIdx]
      ) {
        smallestIdx = leftIdx;
      }

      if (
        rightIdx < this.heap.length &&
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

  peek() {
    return this.heap[0] || null;
  }
}

function solution(scovilles, K) {
  let answer = 0;
  const minHeap = new MinHeap();

  for (const scoville of scovilles) {
    minHeap.push(scoville);
  }

  while (minHeap.peek() < K) {
    if (minHeap.heap.length < 2) {
      return -1;
    }

    const first = minHeap.pop();
    const second = minHeap.pop();
    const newScoville = first + second * 2;
    minHeap.push(newScoville);
    answer++;
  }

  return answer;
}

