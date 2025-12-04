const person = {
    name: ["Sponge", "Bob"],
    age: 31,
    bio() {
        console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf() {
        console.log(`Hi! I'm ${this.name[1]}.`);
    },
};

function logProperty(propertyName) {
    console.log(person[propertyName]);
};

logProperty("name");
logProperty("age");

person.age = 45;

logProperty("age");

const superhero = {
    name: {
        first: "Bruce",
        last: "Wayne",
    },
    age: 31,

};

function logSuperheroProperty(propertyName) {
    console.log(superhero[propertyName]);
};

logSuperheroProperty("name")
logSuperheroProperty("age")

superhero["name"]["last"] = "Banner";
superhero["age"] = 53;

logSuperheroProperty("name")
logSuperheroProperty("age")

superhero["eyes"] = "Green";
superhero.transform = () => {
    console.log("I AM THE GREEN HUUUULK!")
};

logSuperheroProperty("eyes");
superhero.transform();

const myDataName = "height";
const myDataValue = "1.75m";
person[myDataName] = myDataValue;

const person1 = {
  name: "Batman",
  introduceSelf() {
    console.log(`Hi! I'm ${this.name}.`);
  },
};

const person2 = {
  name: "Robin",
  introduceSelf() {
    console.log(`Hi! I'm ${this.name}.`);
  },
};

person.introduceSelf();
person1.introduceSelf();
person2.introduceSelf();

const myNotification = new Notification("Hello!");
console.log(myNotification);

console.log("Testing increments in primitive and object data types"),
console.log("------------------------------------------")

let obj = { counter: 0 };
let primitive = 0;

function incrementObj(objCounter) {
    objCounter.counter += 1;
};

function incrementPrimitive(primitiveCounter) {
    primitiveCounter += 1;
};

console.log(`Object data before: ${obj.counter}`);
console.log(`Primitive data before: ${primitive}`);

incrementObj(obj);
incrementPrimitive(primitive);

console.log(`Object data after: ${obj.counter}`);
console.log(`Primitive data after: ${primitive}`);