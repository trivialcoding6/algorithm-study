def fibonacci(n):
    f = [0] * (n + 1)
    f[1] = f[2] = 1
    count = 0

    for i in range(3, n + 1):
        f[i] = f[i - 1] + f[i - 2]
        count += 1

    return f[n], count

def fib_recursive(n):
    global recursive_count
    if n == 1 or n == 2:
        recursive_count += 1
        return 1
    return fib_recursive(n - 1) + fib_recursive(n - 2)

n = int(input().strip())

recursive_count = 0
fib_recursive(n)

_, dp_count = fibonacci(n)

print(recursive_count, dp_count)