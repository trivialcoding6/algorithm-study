from collections import deque

def last_card(N):
    queue = deque(range(1, N + 1))
    
    while len(queue) > 1:
        queue.popleft()
        queue.append(queue.popleft())
    
    return queue[0]

N = int(input())
print(last_card(N))