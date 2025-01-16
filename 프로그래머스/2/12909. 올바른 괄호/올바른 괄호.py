def solution(s):
    stack = []
    
    for i in s:
        if i == '(' or len(stack) == 0:
            stack.append(i)
        else:
            stack.pop()


    return len(stack) == 0