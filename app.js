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

book.info = function() {
    return `${this.title} by ${this.author} has ${this.pages} pages and has been read ${this.readCount}.`
}

console.log(book.info())

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");