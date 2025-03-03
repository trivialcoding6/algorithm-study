scores = [int(input()) for _ in range(5)]

def adjusted_score(score):
    return max(score, 40)

adjusted_scores = [adjusted_score(score) for score in scores]

average_score = sum(adjusted_scores) // len(adjusted_scores)

print(average_score)