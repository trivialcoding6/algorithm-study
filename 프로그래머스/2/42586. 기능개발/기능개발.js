function solution(progresses, speeds) {
  let answer = [];
  let complete = [];

  for (let i = 0; i < progresses.length; i++) {
    if (
      complete.length > 0 &&
      complete[complete.length - 1] >=
        Math.ceil((100 - progresses[i]) / speeds[i])
    ) {
      complete.push(complete[complete.length - 1]);
    } else {
      complete.push(Math.ceil((100 - progresses[i]) / speeds[i]));
    }
  }

  for (let i = 0; i < complete.length; i++) {
    if (i === 0 || complete[i] !== complete[i - 1]) {
      answer.push(1);
    } else {
      answer[answer.length - 1] += 1;
    }
  }

  return answer;
}