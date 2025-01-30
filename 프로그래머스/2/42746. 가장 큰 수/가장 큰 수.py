from functools import cmp_to_key

def compare(a, b):
    combination1 = a + b
    combination2 = b + a
    
    if combination1 > combination2:
        return -1
    elif combination1 < combination2:
        return 1
    else:
        return 0

def solution(numbers):
    str_nums = list(map(str, numbers))
    str_nums.sort(key=cmp_to_key(compare))
    
    if str_nums[0] == '0':
        return '0'
    
    return ''.join(str_nums)