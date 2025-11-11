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

/* let arr = [1, 2, 3];

alert( arr ); // 1,2,3
alert( String(arr) === '1,2,3' ); // true

alert( [] + 1 ); // "1"
alert( [1] + 1 ); // "11"
alert( [1,2] + 1 ); // "1,21" */

function sumOfTripledEvens(array) {/* 
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

