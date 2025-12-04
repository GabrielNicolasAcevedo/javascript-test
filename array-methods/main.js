//Variables
let john = {name: "John", age: 25};
let pete = {name: "Pete", age: 30};
let mary = {name: "Mary", age: 28};

let users = [john, pete, mary];

console.log("Array of objects:")
console.log(users)
console.log("___________________________")

// 1. Map to names
let names = users.map(user => user.name); // This was easy
console.log("Map to names:")
console.log("Array of strings")
console.log(names); 
console.log("___________________________")


