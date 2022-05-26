/**
 * Primitive types copy exactly. Reference type copy pointers.
 */

let number1 = 1;
// this copies number1 into number2. Modifications to number1 don't affect number2.
let number2 = number1;
number1 = 3;

console.log(number2);
number2 = number1;
console.log(number2);

const person = {
  name: "Andy",
};

/**
 * copies the pointer of person to secondPerson const. Modifications to person will be
 * reflected in secondPerson since this is just pointing to the original.
 */
const secondPerson = person;
console.log(secondPerson);
person.name = "Kyle";
console.log(secondPerson);

const nums = [1, 2, 3, 4, 5];
// also copies the pointer of the array
const secondNums = nums;
console.log(secondNums);
nums[5] = 9;
console.log(secondNums);

/**
 * to avoid the problems above, we can create a true mutable copy with the spread
 * operator
 */
const secondNums2 = [...nums];
console.log(secondNums2);
nums[0] = 10;
// not affected
console.log(secondNums2);
