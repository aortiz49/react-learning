/**
 * ... operator. This is used for "spread" and "rest". "spread" is when the operator is
 * being used to split up arrays or object properties.
 *
 * const newArray = [...oldArray,1,2] = pulls out all the elements of oldArray and adds
 * 1 and 2 to this.
 * const newObject = {...oldObject, newProp:5} = pulls out all the propertoes of
 * oldObject and appends a new property.
 *
 *
 * "rest" is when the operator is used to merge a list of function arguments into an
 * array.
 * function sortArgs(..args){
 *  return args.sort()
 * }
 *
 * This receives more than one argument.
 */

const numbers = [1, 2, 3, 4, 5, 6, 7];
const newnumbers = [...numbers, 8, 9];

/**
 * this shows an array of numbers (1-9)
 * [1,2,3,4,5,6,7,8,9]
 */
console.log(newnumbers);

const newnumbersNot = [numbers, 8, 9];
console.log("without ... operator on numbers");

/**
 *this shows an array in which the first element is the old numbers array
 * [[1,2,3,4,5,6,7],8,9]
 */
console.log(newnumbersNot);

const person = {
  name: "Andy",
  age: 28,
};

// uses the spread operator to unpack the person object's properties and adds them to
// the new on
const newPerson = {
  ...person,
  id: 201727662,
};

// { name: 'Andy', age: 28, id: 201727662 }
console.log(newPerson);
/**
 * this rest operator grabs all the arguments which are later used with a filter
 * function
 * @param  {...number} args - The arguments to be filtered
 * @returns
 */

const testing = (...args) => {
  return args.filter((elem) => elem % 2 === 0);
};

console.log(testing(1, 2, 3, 4, 5, 1, 8, 10));
