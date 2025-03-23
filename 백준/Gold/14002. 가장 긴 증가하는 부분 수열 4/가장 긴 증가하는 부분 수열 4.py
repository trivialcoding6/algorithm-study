n = int(input())
a = list(map(int, input().split()))

dp = [1] * n
prev = [-1] * n

for i in range(n):
    for j in range(i):
        if a[j] < a[i] and dp[j] + 1 > dp[i]:
            dp[i] = dp[j] + 1
            prev[i] = j

max_len = max(dp)
print(max_len)

idx = dp.index(max_len)
lis = []
while idx != -1:
    lis.append(a[idx])
    idx = prev[idx]

print(*reversed(lis))