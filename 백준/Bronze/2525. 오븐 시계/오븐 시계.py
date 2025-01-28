hour, minute = map(int, input().split())
time = int(input())

total_minutes = minute + time
hour = (hour + total_minutes // 60) % 24
minute = total_minutes % 60

print(hour, minute)