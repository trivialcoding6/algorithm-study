matrix = []
max_number = -1
max_number_coordinate = (0, 0)

for i in range(9):
    row = list(map(int, input().split()))
    matrix.append(row)
    for j in range(9):
        if row[j] > max_number:
            max_number = row[j]
            max_number_coordinate = (i + 1, j + 1)

print(max_number)
print(f"{max_number_coordinate[0]} {max_number_coordinate[1]}")