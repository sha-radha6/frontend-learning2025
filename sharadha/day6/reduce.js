const numbers = [1,2,3,4,5];
const sum = numbers.reduce((total,num) => total + num, 0);
console.log(sum);

const scores = [85,42,90,65,87];
const maxScore = scores.reduce((max, score) => Math.max(max, score), scores[0]);
console.log(maxScore);

const words = ["Hello", "World", "!"];
const sentence = words.reduce((text,word) => text + " " + word, "")
console.log(sentence.trim());

