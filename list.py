fruits = ["appple", "banana", "cheery", "blackberry"]
print(fruits)

print(fruits[0])
print(fruits[-1])

fruits.append("oarnge")
fruits.insert(1,"mango")

print(fruits)

fruits.remove("banana")
fruits.pop(1)
print(fruits)



for fruit in fruits:
    print(fruit)