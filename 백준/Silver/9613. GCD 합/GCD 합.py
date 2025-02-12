def gcd(a, b):
    while b:
        a, b = b, a % b
    return a

def solution():
    t = int(input())
    for _ in range(t):
        numbers = list(map(int, input().split()))
        n = numbers[0]  # 첫 번째 숫자는 개수
        numbers = numbers[1:]  # 실제 숫자들
        
        total = 0
        # 모든 가능한 쌍의 GCD 계산
        for i in range(n):
            for j in range(i + 1, n):
                total += gcd(numbers[i], numbers[j])
        
        print(total)

solution()