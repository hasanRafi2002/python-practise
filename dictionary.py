person = {
    "city":"new york",
    "name":"rafi",
    "age":21
}

print(person)


print(person["name"])
print(person["age"])
print(person.get("age"))
print(person.get("job")) #none

person ["age"] = 30
person ["job"] = "software engineer"

print(person)


del person["city"]
print(person)



for key, value in person.items():
    print(key, value)