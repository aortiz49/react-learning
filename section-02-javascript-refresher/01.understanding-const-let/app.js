/*
 * Let vs Const
 * Let = used for data that is variable
 * Const = used for data that is constant. Cannot be updated on re-declared in the
 * scope.
 */

// initializes a variable using 'const' with my name
const myName = "Andy";
console.log(myName);

/* the following line will throw a TypeError of "Assignment to constant variable" since
 * we already established that 'const' cannot be modified.
 */ myName = "Jason";

// initializes a variable using 'let' with my name
let myName1 = "Andy";
console.log(myName1);

// permits modification
myName1 = "Kyle";
console.log(myName1);
