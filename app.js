console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const arr1 = [2, 22, 12, 17, 18, 39, 129];
let sum = 0;

function arraySum(sum) {
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
    console.log(sum);
  }
  return sum;
}

arraySum(sum);

// arr1.forEach((sum) => {
// sum1 += arr1[i];
// console.log(sum)
// });

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

const book = {};

book.title = "Of Mice and Men";
book.author = "John Steinback";
book.pages = 107;
book.readCount = "once";

book.info = function () {
  return `${this.title} by ${this.author} has ${this.pages} pages and has been read ${this.readCount}.`;
};

console.log(book.info());

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

let sentence = "The quick brown fox jumps over the lazy dog";

let arrSplit = sentence.split(" ");

for (let i = 0; i < arrSplit.length; i++) {
  let letters = arrSplit[i].split("");
  letters.reverse();
  arrSplit[i] = letters.join("");
}

let lettersReverse = arrSplit.join(" ");
console.log(lettersReverse);

// function reverseWord(sentence) {
//   let result = [];
//   let words = sentence.split(" ");
//   console.log("These are the words split", words);
//   for (let i = 0; i < words.length; i++) {
//     let letters = words[i].split("");
//     console.log("Here are the letters split", letters);
//     for (let j = letters.length - 1; j >= 0; j--) {
//       result.push(letters[j]);
//     }
//     result.push(" ");
//   }
//   console.log("This is after the push for result", result);
//   return result.join("");
// }

// console.log(reverseWord(sentence));

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

const head1 = csvData.split("\n")[0].split(",")[0];
const head2 = csvData.split("\n")[0].split(",")[1];

const data = csvData.split("\n").slice(1);
myArr = [];
const myObj = {
  [head1]: "",
  [head2]: "",
};

data.forEach((val) => {
  let dataVal = val.split(",");
  console.log(dataVal);
  let dataObj = Object.create(myObj);
  dataObj[head1] = dataVal[0];
  dataObj[head2] = dataVal[1];
  myArr.push(dataObj);
});

console.log(myArr);
