function solution(bridge_length, weight, truck_weights) {
  let time = 0;
  const bridge = new Array(bridge_length).fill(0);
  let current_weight = 0;

  while (bridge.length) {
    time += 1;
    current_weight -= bridge.shift();

    // 주석 추가
    if (truck_weights.length) {
      if (current_weight + truck_weights[0] <= weight) {
        const next_truck = truck_weights.shift();
        bridge.push(next_truck);
        current_weight += next_truck;
      } else {
        bridge.push(0);
      }
    }
  }

  return time;
}
