const original = [4, -3, 9, -1, 7];
const positiveOnly = [];
for (let num of original) {
  if (num >= 0) {
    positiveOnly.push(num);
  }
}
console.log(positiveOnly);
