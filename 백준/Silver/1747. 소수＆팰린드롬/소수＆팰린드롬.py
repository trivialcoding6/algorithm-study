N = int(input())

def is_palindrome(n):
    return str(n) == str(n)[::-1]

def is_decimal_number(n):
    if n < 2:
        return False
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            return False
    return True

def solution(N):

    while True:
        if is_palindrome(N) and is_decimal_number(N):
            return N
        N += 1

print(solution(N))