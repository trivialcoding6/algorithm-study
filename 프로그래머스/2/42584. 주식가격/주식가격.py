def solution(prices):
    answer = [0] * len(prices)
    stack = []
    
    for current_time in range(len(prices)):
        while stack and prices[current_time] < prices[stack[-1]]:
            prev_time = stack.pop()
            answer[prev_time] = current_time - prev_time
            

        stack.append(current_time)
    last_time = len(prices) - 1
    
    while stack:
        prev_time = stack.pop()
        answer[prev_time] = last_time - prev_time
    
    return answer