/* let fruits = ["Banana"]

console.log(fruits);

let arr = fruits; // copy by reference (two variables reference the same array)

console.log(arr);

console.log( arr === fruits ); // true
console.log("arr: " + arr);
console.log("fruits: " + fruits);

arr.push("Pear"); // modify the array by reference


console.log( fruits ); // Banana, Pear - 2 items now

console.log("arr: " + arr);
console.log("fruits: " + fruits); */








/* let arr = [1, 2, 3]

alert( arr ); // 1,2,3
alert( String(arr) === '1,2,3' ); // true

alert( [] + 1 ); // "1"
alert( [1] + 1 ); // "11"
alert( [1,2] + 1 ); // "1,21" */

//function sumOfTripledEvens(array) {
/* 
return array
    .filter(num => num % 2 === 0)
    .map(num => num * 3)
    .reduce((acc, curr) => acc += curr)
}

function sumOfTripleEvens (array) {
const evenArray = array.filter(num => num % 2 === 0);
console.log(evenArray);

const evenTripled = evenArray.map(num => num * 3 );
console.log(evenTripled);

const sumOfAllTripled = evenTripled.reduce((total,num) => total += num);
console.log(sumOfAllTripled);

return sumOfAllTripled;
}

let arr = [1, 2, 3, 4, 5, 6,8];
sumOfTripleEvens(arr);
sumOfTripledEvens(arr);
//console.log(sumOfTripleEvens(arr))
*/








/* 
Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

That is: removes all dashes, each word after dash becomes uppercased.
 */
/* function camelize (string) {
    console.log(string)
    let arr = string.split('-');
    console.log(arr)
    let capitalizeArr = arr.map((str,ind) => ind == 0 ? str : str[0].toUpperCase() + str.slice(1));

    return console.log(capitalizeArr.join(''));
}

camelize("gabriel-nicolas-acevedo");
camelize("my-short-string")

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition'; */








// Filter Range 
/* 
Write a function filterRange(arr, a, b) that gets an array arr, 
looks for elements with values higher or equal to a and lower 
or equal to b and return a result as an array.

The function should not modify the array. 
It should return the new array. */
/* 
function filterRange(arr, a, b) {
    return console.log(arr.filter(num => num >= a && num <= b ? num  : false ));
}
let array = [1,3,5,7,9,4];
filterRange(array, 2, 6); */






/* Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

The function should only modify the array. It should not return anything. */

/* function filterRangeInPlace(arr, a, b) {
    return console.log(arr
        .filter(num => num >= a && num <= b ? num : false));
} 

let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4); */







//Sort in decreasing order
/* 
let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

console.log( arr ); // 8, 5, 2, 1, -10 */







/* We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

Create a function copySorted(arr) that returns such a copy. */

/* let arr = ["HTML", "JavaScript", "CSS"];

function copySorted(array) {
   return array.toSorted();
}

let sorted = copySorted(arr);

console.log( sorted ); // CSS, HTML, JavaScript
console.log( arr ); // HTML, JavaScript, CSS (no changes) */




/* Create a constructor function Calculator that creates “extendable” calculator objects.

The task consists of two parts.

1 First, implement the method calculate(str) that takes a string like "1 + 2" in the format “NUMBER operator NUMBER” (space-delimited) and returns the result. Should understand plus + and minus -.

2 Then add the method addMethod(name, func) that teaches the calculator a new operation. It takes the operator name and the two-argument function func(a,b) that implements it.

For instance, let’s add the multiplication *, division / and power **:

No parentheses or complex expressions in this task.
The numbers and the operator are delimited with exactly one space.
There may be error handling if you’d like to add it. */

/* function Calculator() {

    this.methods = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "*": (a, b) => a * b,
        "/": (a, b) => a / b,
        "**": (a, b) => a ** b,
    };

    this.calculate = function(str) {
        let split = str.split(' ');
        a = +split[0],
        op = split[1],
        b = +split[2];

        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
    };

    return this.methods[op](a , b);
    };
}

let calc = new Calculator;

console.log( calc.calculate("3 + 7") ); // 10
console.log( calc.calculate("3 - 7") ); // -4
console.log( calc.calculate("3 * 7") ); // 21
console.log( calc.calculate("18 / 9") ); // 2 
console.log( calc.calculate("7 ** 3") );// 343 */




/*  
    You have an array of user objects, each one has user.name. 
    Write the code that converts it into an array of names.
 */

/* let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(user => user.name);

console.log( names ); // John, Pete, Mary */






/* 
    You have an array of user objects, each one has name, surname and id.

    Write the code to create another array from it, of objects with id and fullName, 
    where fullName is generated from name and surname.
 */

/* let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];

let usersMapped = users.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
}));

console.log(usersMapped)
/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/
/*
console.log(usersMapped[0].id) // 1
console.log(usersMapped[0].fullName) // John Smith
 */








/* Write the function sortByAge(users) that gets an array 
of objects with the age property and sorts them by age. */
/* 
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

function sortByAge(array) {
    array.sort((a, b) => a.age - b.age)
}

sortByAge(arr);

// now: [john, mary, pete]
console.log(arr)
console.log(arr[0].name); // John
console.log(arr[1].name); // Mary
console.log(arr[2].name); // Pete */







/* Write the function getAverageAge(users) that gets an array of 
objects with property age and returns the average age.

The formula for the average is (age1 + age2 + ... + ageN) / N. */

/* let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

function getAverageAge(array) {
    return array.reduce((average, user) => average + user.age, 0) / array.length;
}

console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28 */




//Crea una función `unique(arr)` que devuelva un array con los elementos únicos de `arr`.

/* function unique(arr) {
    let resultado = [];

    for(let str of arr) {
        if (!resultado.includes(str)) {
            resultado.push(str);
        }
    }

    return resultado;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(strings) ); // Hare, Krishna, :-O */

/* function unique(array) {
    return array.filter((item, index) => array.indexOf(item) === index);
}
let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(strings) ); // Hare, Krishna, :-O */ 




// Crea una función groupById(arr) que cree un objeto a partir de él, 
// con id como clave y elementos del array como valores.

let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

function groupById(array) {
    return array.reduce((obj, user) => {
        obj[user.id] = user;
        return obj;
    }, {})
}

let usersById = groupById(users);

console.log(usersById)

/*
// despues de la llamada:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/