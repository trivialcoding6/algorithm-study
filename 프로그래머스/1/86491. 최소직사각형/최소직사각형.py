def solution(sizes):
    rotated = [[max(w, h), min(w, h)] for w, h in sizes]
    
    max_width = max(w for w, h in rotated)
    max_height = max(h for w, h in rotated)
    
    return max_width * max_height