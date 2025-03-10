from collections import deque

def card_game(n):
    cards = deque(range(1, n+1))
    discarded = []
    
    while len(cards) > 1:
        discarded.append(cards.popleft())
        
        if cards:
            cards.append(cards.popleft())
    
    return discarded, cards[0]

n = int(input())

discarded, last_card = card_game(n)

print(*discarded, last_card)