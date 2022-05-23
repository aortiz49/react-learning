/*
 * An arrow function expression is a compact alternative to a traditional function
 * expression.
 */

/**
 * Prints a name.
 * @param {string} name - The name I am going to print
 */
function printName(name) {
  console.log(name);
}

/**
 * Prints a name using an arrow functon.
 * (for cases where only one argument is provided, the parentheses surrounding the
 * parameter can be omitted.)
 * @param {string} name - The name I am going to print
 */
const myNameVar = (name) => {
  console.log("With arrow function " + name);
};

/**
 * Multiplies a number by 10.
 * @param {number} num - The number being multiplied by 10.
 * @returns
 */
let myNum = (num) => {
  if (typeof num !== "number") throw new TypeError("num should be a number.");

  return 10 * num;
};
printName("Andy Ortiz");
myNameVar("Andy Ortiz");
console.log(myNum(7));

// myNum can be rewritten in one line if all we have is the return statement
myNum = (num) => num * 2;
console.log(myNum(7));
