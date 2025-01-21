import heapq

class Job:
    def __init__(self, request_time, working_time):
        self.request_time = request_time
        self.working_time = working_time

def solution(jobs):
    job_queue = sorted(
        [Job(request_time, working_time) for request_time, working_time in jobs],
        key=lambda x: x.request_time
    )
    
    min_heap = []
    current_time = 0
    total_waiting_time = 0
    completed_jobs = 0
    job_index = 0
    
    while completed_jobs < len(jobs):
        while job_index < len(jobs) and job_queue[job_index].request_time <= current_time:
            heapq.heappush(min_heap, (job_queue[job_index].working_time, job_queue[job_index].request_time))
            job_index += 1
            
        if not min_heap:
            current_time = job_queue[job_index].request_time
            continue
            
        
        working_time, request_time = heapq.heappop(min_heap)
        total_waiting_time += current_time - request_time + working_time
        current_time += working_time
        completed_jobs += 1
    
    return total_waiting_time // len(jobs)