from collections import defaultdict

def solution(points, routes):
    point_map = {i+1: tuple(p) for i, p in enumerate(points)}
    
    time_pos_count = defaultdict(int)

    for route in routes:
        t = 0
        cur_r, cur_c = point_map[route[0]]

        for i in range(1, len(route)):
            next_r, next_c = point_map[route[i]]

            while cur_r != next_r:
                time_pos_count[(t, (cur_r, cur_c))] += 1
                cur_r += 1 if next_r > cur_r else -1
                t += 1

            while cur_c != next_c:
                time_pos_count[(t, (cur_r, cur_c))] += 1
                cur_c += 1 if next_c > cur_c else -1
                t += 1

        time_pos_count[(t, (cur_r, cur_c))] += 1

    danger_count = sum(1 for v in time_pos_count.values() if v >= 2)
    return danger_count
