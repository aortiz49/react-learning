/**
 * Classes in javascript can have properties and methods.
 * Javascript objects are created using constructors similar to that in java. (they
 * also support imheritance).
 */

/**
 * Class that represents a human.
 */
class Human {
  /************************************************
   *                 Constructors                 *
   ***********************************************/

  /**
   * Constructs a new Human object.
   * @param {string} gender - The human's gender
   */
  constructor(gender) {
    /* this property will be "private" in the sense that it can only be otained from *
     * calling its getter function.
     */
    this.gender = gender;
  }

  /************************************************
   *              Getters & Setters               *
  /************************************************

  /**
   * Returns the human's gender. If this function is not accompanied by its corresponding 'set' function, it will fail.
   */
  get getGender() {
    return this.gender;
  }

  /**
   * Sets the gender of the human.
   * @param {string} gender - The new gender
   */
  set setGender(gender) {
    gender = gender.trim();
    if (gender === "") {
      throw "The name cannot be empty";
    }
    this.gender = gender;
  }

  /************************************************
   *                   Methods                    *
  /************************************************

  /**
   * Prints the human's gender. This type of function declaration is in ES6.
   */
  printGender = () => {
    console.log(this.getGender);
  };
}

/**
 * Class that represents a person.
 */
class Person extends Human {
  /************************************************
   *                 Constructors                 *
   ***********************************************/

  /**
   * Constructs a new Person object.
   * @param {string} name - The name of the person.
   */
  constructor(gender, name) {
    /**
     * this invokation is necessary in order the object to be created.
     * super consructor in derived class must be called. This invokes the parent
     * constructor in order initialize the Person object.
     */
    super(gender);
    this.name = name;
  }

  /************************************************
   *              Getters & Setters               *
  /************************************************

  /**
   * Returns a person's name.
   */
  get getName() {
    return this.name;
  }

  /**
   * Sets the name of a person.
   * @param {any} name - The person's new name
   */
  set setName(name) {
    this.name = name.trim();
  }

  /************************************************
   *                   Methods                    *
  /************************************************
  /**
   * Prints the name of the Person object.
   */
  printName() {
    console.log(this.name);
  }
}

// constructs a new person with a given name
const person = new Person("Male", "Kyle Rodriguez");

// invokes the 'printName' from the Person object.
person.printName();

// invokes the 'printGender' from the Human superclass.
person.printGender();

// invokes the gender getter from Human class
console.log(person.getGender);

// changes the human's gender
person.setGender = "Female";

// changes the person's name
person.setName = "Megan Rodriguez";

console.log("\nAfter modifications:");
person.printGender();
person.printName();
