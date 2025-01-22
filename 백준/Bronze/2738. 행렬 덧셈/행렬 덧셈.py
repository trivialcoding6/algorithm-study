[N, M] = map(int, input().split())
matrixA = []
matrixB = []

for i in range(N * 2):
    row = list(map(int, input().split()))
    if i < N:
        matrixA.append(row)
    else:
        matrixB.append(row)

for i in range(N):
    for j in range(M):
        print(matrixA[i][j] + matrixB[i][j], end=" ")
    print()

