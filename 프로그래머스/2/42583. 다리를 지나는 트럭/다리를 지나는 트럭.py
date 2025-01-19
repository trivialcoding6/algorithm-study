def solution(bridge_length, weight, truck_weights):
    time = 0
    bridge = [0] * bridge_length
    current_weight = 0
    
    while bridge:
        time += 1
        current_weight -= bridge.pop(0)
        
        if truck_weights:
            if current_weight + truck_weights[0] <= weight:
                next_truck = truck_weights.pop(0)
                bridge.append(next_truck)
                current_weight += next_truck
            else:
                bridge.append(0)
    
    return time
