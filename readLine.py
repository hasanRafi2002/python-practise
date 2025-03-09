
file = open("example.txt", "r")
for line in file:
    print(line.strip())
file.close()