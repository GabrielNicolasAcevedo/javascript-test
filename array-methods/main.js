//Variables
let john = {name: "John", age: 25};
let pete = {name: "Pete", age: 30};
let mary = {name: "Mary", age: 28};

let users = [john, pete, mary];

console.log("Array of objects:");
console.log(users);
console.log("___________________________");

// 1. Map to names
let names = users.map(user => user.name); // This was easy
console.log("1. Map to names:");
console.log("Array of strings");
console.log(names); 
console.log("___________________________");

// 2. Map to object
//Reassign users
john = { name: "John", surname: "Smith", id: 1 };
pete = { name: "Pete", surname: "Hunt", id: 2 };
mary = { name: "Mary", surname: "Key", id: 3 };

users = [john, pete, mary];

console.log("2. Map to objects");
console.log(users);

let usersMapped = users.map(e => ({
    fullName: `${e.name} ${e.surname}`,
    id: `${e.id}`,
}));

// Forgot parentheses to create new obj property
console.log("New objects with fullName:");
console.log(usersMapped);
console.log("_______________________");

// 3. Sort Users by Age
//Reassign users
john = { name: "John", age: 25 };
pete = { name: "Pete", age: 30 };
mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

console.log("3. Sort Users by Age");
console.log(arr);

function sortByAge(array) {
    return array.sort((a,b) => {
        return a.age - b.age
    })
}; 
// More difficult, saw a youtube lesson on sorting to refresh memory
sortByAge(arr);
console.log(arr);
console.log("___________________________")

// 4. Get Average Age
// Reassign variables:
john = { name: "John", age: 25 };
pete = { name: "Pete", age: 30 };
mary = { name: "Mary", age: 29 };

arr = [ john, pete, mary ];

console.log("4. Get Average Age")
console.log(arr);

function getAverageAge(array) {
    return array.reduce((sum, user) => 
        sum + user.age, 0) / array.length;   
}
// Refresh on reduce method
console.log("Average age:")
console.log(getAverageAge(arr));
console.log("__________________")

// 5. Create keyed object from array
// Reassign users
users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

function groupById(array) {
    return array.reduce((obj, value) => {
        obj[value.id] = value;
        return obj
    }, {})
};

console.log("5. Create keyed object from array");
console.log(users);

let usersById = groupById(users);
console.log("Keyed users");
console.log(usersById);