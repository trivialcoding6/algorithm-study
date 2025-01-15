import math


def solution(progresses, speeds):
    answer = []
    complete = []

    for progress, speed in zip(progresses, speeds):
        if len(complete) > 0 and complete[-1] >= math.ceil((100 - progress) / speed):
            complete.append(complete[-1])
        else:
            complete.append(math.ceil((100 - progress) / speed))
            
    for i in range(len(complete)):
        if i == 0 or complete[i] != complete[i - 1]:
            answer.append(1)
        else:
            answer[-1] += 1
    return answer