numbers = list(map(int, input().split()))

checksum = sum(n ** 2 for n in numbers) % 10

print(checksum)