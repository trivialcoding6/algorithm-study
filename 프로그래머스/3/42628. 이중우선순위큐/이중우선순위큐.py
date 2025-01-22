import heapq

def solution(operations):
    min_heap = []  # 최소 힙
    max_heap = []  # 최대 힙 (최소 힙에 -를 붙여서 구현)
    
    for operation in operations:
        command, value = operation.split()
        value = int(value)
        
        if command == "I":
            # 두 힙에 모두 삽입
            heapq.heappush(min_heap, value)
            heapq.heappush(max_heap, -value)
        elif command == "D":
            if not min_heap:  # 힙이 비어있으면 무시
                continue
                
            if value == 1:  # 최댓값 삭제
                max_value = -heapq.heappop(max_heap)
                min_heap.remove(max_value)
            else:  # 최솟값 삭제
                min_value = heapq.heappop(min_heap)
                max_heap.remove(-min_value)
                
    if not min_heap:
        return [0, 0]
    
    return [-heapq.heappop(max_heap), heapq.heappop(min_heap)]
