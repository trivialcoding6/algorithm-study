const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

const subjects = input.map((line) => {
  const [name, credit, grade] = line.split(" ");
  return [name, parseFloat(credit), grade];
});

function solution(subjects) {
  const gradeScore = {
    "A+": 4.5,
    A0: 4.0,
    "B+": 3.5,
    B0: 3.0,
    "C+": 2.5,
    C0: 2.0,
    "D+": 1.5,
    D0: 1.0,
    F: 0.0,
    P: 0.0,
  };

  let totalGrade = 0;
  let totalCredit = 0;

  for (const subject of subjects) {
    const [name, credit, grade] = subject;
    if (grade === "P") continue;

    totalGrade += gradeScore[grade] * credit;
    totalCredit += credit;
  }

  console.log((totalGrade / totalCredit).toFixed(6));
}

solution(subjects);
