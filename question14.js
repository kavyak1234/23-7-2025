const word = "javascript";
let count = 0;
const vowels = "aeiou";
for (let char of word) {
  if (vowels.includes(char)) {
    count++;
  }
}
console.log("Vowel Count:", count);