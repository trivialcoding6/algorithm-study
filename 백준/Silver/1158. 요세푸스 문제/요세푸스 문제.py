from collections import deque

def josephus_permutation(N, K):
    queue = deque(range(1, N + 1))
    result = []

    while queue:
        queue.rotate(-(K-1))
        result.append(queue.popleft())

    print("<" + ", ".join(map(str, result)) + ">")

N, K = map(int, input().split())
josephus_permutation(N, K)
