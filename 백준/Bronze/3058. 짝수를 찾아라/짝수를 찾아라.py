T = int(input())

for i in range(T):
    numbers = list(map(int, input().split()))
    sum = 0
    minNumber = 100
    for number in numbers:
        if number % 2 == 0:
            sum += number
            if number < minNumber:
                minNumber = number

    print(sum)
    print(minNumber)