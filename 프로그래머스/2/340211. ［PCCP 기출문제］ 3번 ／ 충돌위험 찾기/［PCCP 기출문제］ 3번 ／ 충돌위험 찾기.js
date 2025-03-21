
function calculateRobotPath(route, pointMap) {
  const positions = [];
  let time = 0;
  let current = pointMap[route[0] - 1];

  positions.push({ r: current.r, c: current.c, time: time });

  for (let i = 1; i < route.length; i++) {
    const next = pointMap[route[i] - 1];
    const newPositions = moveRobot(current, next, time);
    positions.push(...newPositions);
    current = next;
    time = newPositions[newPositions.length - 1].time;
  }

  return positions;
}

function moveRobot(current, next, startTime)  {
  const positions = [];
  let { r, c } = current;
  let time = startTime;

  // r 좌표 이동
  while (r !== next.r) {
    r += r < next.r ? 1 : -1;
    time++;
    positions.push({ r, c, time });
  }

  // c 좌표 이동
  while (c !== next.c) {
    c += c < next.c ? 1 : -1;
    time++;
    positions.push({ r, c, time });
  }

  return positions;
}

function solution(points, routes) {
  const pointMap = points.map(([r, c]) => ({ r, c }));

  const timeMap = new Map();

  routes.forEach((route) => {
    const positions = calculateRobotPath(route, pointMap);
    positions.forEach(({ r, c, time }) => {
      const key = `${r},${c},${time}`;
      timeMap.set(key, (timeMap.get(key) || 0) + 1);
    });
  });

  return Array.from(timeMap.values()).filter((count) => count > 1).length;
}


