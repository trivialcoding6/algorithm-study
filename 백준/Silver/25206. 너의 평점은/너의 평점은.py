subjects = []
for _ in range(20):
    name, credit, grade = input().split()
    subjects.append([name, float(credit), grade])

def solution(subjects):
    grade_dict = {
        "A+": 4.5,
        "A0": 4.0,
        "B+": 3.5,
        "B0": 3.0,
        "C+": 2.5,
        "C0": 2.0,
        "D+": 1.5,
        "D0": 1.0,
        "F": 0.0,
        "P": 0.0,
    }

    total_grade = 0
    total_credit = 0

    for subject in subjects:
        name, credit, grade = subject
        if grade == "P":
            continue
        total_grade += grade_dict[grade] * credit
        total_credit += credit
    print(f"{total_grade / total_credit:.6f}")


solution(subjects)
