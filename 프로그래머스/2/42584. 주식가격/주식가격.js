function solution(prices) {
  const answer = Array(prices.length).fill(0);
  const stack = [];

  for (let currentTime = 0; currentTime < prices.length; currentTime++) {
    while (
      stack.length &&
      prices[currentTime] < prices[stack[stack.length - 1]]
    ) {
      const prevTime = stack.pop();
      answer[prevTime] = currentTime - prevTime;
    }

    stack.push(currentTime);
  }

  const lastTime = prices.length - 1;
  while (stack.length) {
    const prevTime = stack.pop();
    answer[prevTime] = lastTime - prevTime;
  }

  return answer;
}