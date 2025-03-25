def solution(mats, park):
    mats.sort(reverse=True)  # 큰 돗자리부터 시도
    n, m = len(park), len(park[0])  # 공원의 크기

    def can_place(x, y, size):
        if x + size > n or y + size > m:
            return False
        for i in range(size):
            for j in range(size):
                if park[x + i][y + j] != "-1":
                    return False
        return True

    for size in mats:
        for i in range(n):
            for j in range(m):
                if can_place(i, j, size):
                    return size
    return -1
