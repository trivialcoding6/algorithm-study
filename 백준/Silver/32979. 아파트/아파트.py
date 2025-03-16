from collections import deque
import sys

input = sys.stdin.readline
N = int(input().strip())
T = int(input().strip())
hands = list(map(int, input().split()))
d = deque(hands)
    
b_list = list(map(int, input().split()))
result = []
    
for b in b_list:
    d.rotate(-(b - 1))
    loser = d[0]
    result.append(str(loser))
        
print(" ".join(result))