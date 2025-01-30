burger = []
drink = []

for _ in range(3):
    burger.append(int(input()))

for _ in range(2):
    drink.append(int(input()))
    

def solution(burger, drink):
    return min(burger) + min(drink) - 50

print(solution(burger, drink))