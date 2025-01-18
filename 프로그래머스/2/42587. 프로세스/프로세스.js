class MaxHeap {
  constructor() {
    this.heap = [];
  }

  push(value) {
    this.heap.push(value);
    this._bubbleUp(this.heap.length - 1);
  }

  pop() {
    if (this.heap.length === 0) return null;

    const result = this.heap[0];
    const last = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = last;
      this._bubbleDown(0);
    }

    return result;
  }

  _bubbleUp(idx) {
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);

      // 최대 힙으로 변경: 부모 노드가 더 작으면 교환
      if (this.heap[parentIdx].cost >= this.heap[idx].cost) break;

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
      let swapIdx = -1;
      const left = idx * 2 + 1;
      const right = idx * 2 + 2;

      // 최대 힙으로 변경: 더 큰 자식과 교환
      if (right < this.heap.length && this.heap[right].cost > current.cost) {
        swapIdx = right;
      }
      if (
        left < this.heap.length &&
        this.heap[left].cost >
          (swapIdx === -1 ? current.cost : this.heap[right].cost)
      ) {
        swapIdx = left;
      }

      if (swapIdx === -1) break;

      this.heap[idx] = this.heap[swapIdx];
      this.heap[swapIdx] = current;
      idx = swapIdx;
    }
  }
}

function solution(priorities, location) {
  const heap = new MaxHeap();
  const queue = [...priorities];

  priorities.forEach((priority, index) => {
    heap.push({ cost: priority, index: index });
  });

  let order = 0;

  while (queue.length > 0) {
    const current = queue.shift();

    if (current < heap.heap[0].cost) {
      queue.push(current);
    } else {
      order++;
      heap.pop();

      if (location === 0) {
        return order;
      }
    }

    location = location - 1 < 0 ? queue.length - 1 : location - 1;
  }

  return order;
}

