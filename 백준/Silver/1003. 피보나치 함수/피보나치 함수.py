count_zero = [0] * 41
count_one = [0] * 41

count_zero[0] = 1
count_one[1] = 1

for i in range(2, 41):
    count_zero[i] = count_zero[i - 1] + count_zero[i - 2]
    count_one[i] = count_one[i - 1] + count_one[i - 2]

T = int(input())
for _ in range(T):
    N = int(input())
    print(count_zero[N], count_one[N])
