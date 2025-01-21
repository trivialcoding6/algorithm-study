class Job {
  constructor(requestTime, workingTime) {
    this.requestTime = requestTime;
    this.workingTime = workingTime;
  }
}

class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(job) {
    this.heap.push(job);
    this._bubbleUp(this.heap.length - 1);
  }

  pop() {
    if (this.isEmpty()) return null;

    const root = this.heap[0];
    const lastJob = this.heap.pop();

    if (!this.isEmpty()) {
      this.heap[0] = lastJob;
      this._bubbleDown(0);
    }

    return root;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  _bubbleUp(index) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex].workingTime <= this.heap[index].workingTime)
        break;

      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ];
      index = parentIndex;
    }
  }

  _bubbleDown(index) {
    const lastIndex = this.heap.length - 1;

    while (true) {
      let smallestIndex = index;
      const leftIndex = 2 * index + 1;
      const rightIndex = 2 * index + 2;

      if (
        leftIndex <= lastIndex &&
        this.heap[leftIndex].workingTime < this.heap[smallestIndex].workingTime
      ) {
        smallestIndex = leftIndex;
      }

      if (
        rightIndex <= lastIndex &&
        this.heap[rightIndex].workingTime < this.heap[smallestIndex].workingTime
      ) {
        smallestIndex = rightIndex;
      }

      if (smallestIndex === index) break;

      [this.heap[index], this.heap[smallestIndex]] = [
        this.heap[smallestIndex],
        this.heap[index],
      ];
      index = smallestIndex;
    }
  }
}

function solution(jobs) {
  const jobQueue = jobs
    .map(([requestTime, workingTime]) => new Job(requestTime, workingTime))
    .sort((a, b) => a.requestTime - b.requestTime);

  const minHeap = new MinHeap();
  let currentTime = 0;
  let totalWaitingTime = 0;
  let completedJobs = 0;
  let jobIndex = 0;

  while (completedJobs < jobs.length) {
    while (
      jobIndex < jobs.length &&
      jobQueue[jobIndex].requestTime <= currentTime
    ) {
      minHeap.push(jobQueue[jobIndex++]);
    }

    if (minHeap.isEmpty()) {
      currentTime = jobQueue[jobIndex].requestTime;
      continue;
    }

    const currentJob = minHeap.pop();
    totalWaitingTime +=
      currentTime - currentJob.requestTime + currentJob.workingTime;
    currentTime += currentJob.workingTime;
    completedJobs++;
  }

  return Math.floor(totalWaitingTime / jobs.length);
}
