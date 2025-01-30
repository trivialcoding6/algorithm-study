N = input()

def solution(N):
    original = int(N)
    current = original
    count = 0

    while True:
        count += 1
        tens = current // 10
        units = current % 10

        sum_digits = tens + units
        new_number = units * 10 + (sum_digits % 10)

        if new_number == original:
            break
        
        current = new_number
    return count

print(solution(N))