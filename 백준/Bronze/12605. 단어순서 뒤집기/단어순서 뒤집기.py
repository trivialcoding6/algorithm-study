import sys

input = sys.stdin.readline

n = int(input())
for i in range(1, n + 1):
    words = input().strip().split()
    stack = []
    for word in words:
        stack.append(word)
    
    reversed_words = []
    while stack:
        reversed_words.append(stack.pop())

    print("Case #{}: {}".format(i, " ".join(reversed_words)))