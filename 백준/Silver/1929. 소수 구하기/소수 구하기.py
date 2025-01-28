M, N = map(int, input().split())

for i in range(M, N + 1):
    if i == 1:
        continue
    # 두수의 곱은 대칭이므로 제곱근까지만 확인하면 된다.
    for j in range(2, int(i ** 0.5) + 1):
        if i % j == 0:
            break
    else:
        print(i)
