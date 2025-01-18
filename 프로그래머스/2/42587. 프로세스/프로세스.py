class MaxHeap:
    def __init__(self):
        self.heap = []
    
    def push(self, value):
        self.heap.append(value)
        self._bubble_up(len(self.heap) - 1)
    
    def pop(self):
        if not self.heap:
            return None
            
        result = self.heap[0]
        last = self.heap.pop()
        
        if self.heap:
            self.heap[0] = last
            self._bubble_down(0)
            
        return result
    
    def _bubble_up(self, idx):
        while idx > 0:
            parent_idx = (idx - 1) // 2
            
            if self.heap[parent_idx]['cost'] >= self.heap[idx]['cost']:
                break
                
            self.heap[parent_idx], self.heap[idx] = self.heap[idx], self.heap[parent_idx]
            idx = parent_idx
    
    def _bubble_down(self, idx):
        current = self.heap[idx]
        
        while True:
            swap_idx = -1
            left = idx * 2 + 1
            right = idx * 2 + 2
            
            if right < len(self.heap) and self.heap[right]['cost'] > current['cost']:
                swap_idx = right
            if left < len(self.heap) and self.heap[left]['cost'] > (current['cost'] if swap_idx == -1 else self.heap[right]['cost']):
                swap_idx = left
                
            if swap_idx == -1:
                break
                
            self.heap[idx] = self.heap[swap_idx]
            self.heap[swap_idx] = current
            idx = swap_idx

def solution(priorities, location):
    heap = MaxHeap()
    queue = priorities.copy()
    
    for i, priority in enumerate(priorities):
        heap.push({'cost': priority, 'index': i})
    
    order = 0
    
    while queue:
        current = queue.pop(0)
        
        if current < heap.heap[0]['cost']:
            queue.append(current)
        else:
            order += 1
            heap.pop()
            
            if location == 0:
                return order
                
        location = len(queue) - 1 if location - 1 < 0 else location - 1
    
    return order
