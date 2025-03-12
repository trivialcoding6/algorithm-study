from collections import deque

def josephus_permutation(n, k):
    queue = deque(range(1, n + 1))
    result = []
    
    while queue:
        queue.rotate(-(k - 1))
        result.append(queue.popleft())
    
    return result

n, k = map(int, input().split())
permutation = josephus_permutation(n, k)
print("<" + ", ".join(map(str, permutation)) + ">")