const numbers = [12, 45, 67, 23, 89];
let largest = numbers[0];
for (let num of numbers) {
  if (num > largest) {
    largest = num;
  }
}
console.log("Largest number:", largest);