def solution(board, h, w):
    count = 0
    target = board[h][w]
    directions = [(0, 1), (1, 0), (0, -1), (-1, 0)]
    rows = len(board)
    cols = len(board[0])
    
    for dh, dw in directions:
        nh, nw = h + dh, w + dw
        if 0 <= nh < rows and 0 <= nw < cols:
            if board[nh][nw] == target:
                count += 1
    return count
