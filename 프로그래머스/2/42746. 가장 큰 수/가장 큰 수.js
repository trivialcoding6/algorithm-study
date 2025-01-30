function solution(numbers) {
  const strNumbers = numbers.map((num) => num.toString());
  strNumbers.sort((a, b) => {
    const case1 = a + b;
    const case2 = b + a;
    return case2.localeCompare(case1);
  });

  if (strNumbers[0] === "0") return "0";

  return strNumbers.join("");
}