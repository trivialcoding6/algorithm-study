import sys

def gcd(a, b):
    while b:
        a, b = b, a % b
    return a

def lcm(a, b):
    return (a * b) // gcd(a, b)

n = int(sys.stdin.readline())
results = []
for _ in range(n):
    a, b = map(int, sys.stdin.readline().split())
    results.append(lcm(a, b))

    
for result in results:
    print(result)
