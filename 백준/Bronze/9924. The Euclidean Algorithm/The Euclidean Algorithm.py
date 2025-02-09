a, b = map(int, input().split())

steps = 0
while a != b:
    if a > b:
        a = a - b
    else:
        b = b - a
    steps += 1


print(steps)