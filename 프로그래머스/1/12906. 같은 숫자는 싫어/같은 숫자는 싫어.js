function solution(arr) {
  let answer = [];

  for (i of arr) {
    if (answer[answer.length - 1] !== i) {
      answer.push(i);
    }
  }

  return answer;
}