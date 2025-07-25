const person = {
  name: "Kavya",
  age: 22,
  city: "Kochi"
};

for (let key in person) {
  console.log(key + ": " + person[key]);
}