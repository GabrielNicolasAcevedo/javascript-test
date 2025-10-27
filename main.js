// My learning process

// Step_1 Get user input number and store in answer
let answer = Number(prompt("Enter your number to FizzBuzz:"));

// Step 2 Print numbers starting in 1 to number inputted by user
/* for (let n = 1; n <= input; n++) {
    console.log(n);
} */

// Step 3 Print numbers from 1 to num input (answer) 
/* for (let n = 1; n <= answer; n++) {
    // 1 - If num is divisible by 3 print "Fizz"
    if (!(n % 3)) {
        console.log("Fizz");
        }    

    // 2 - If num is divisible by 5 print "Buzz"
    else if ( !(n % 5)) {
        console.log("Buzz")
    }

    // 3 -If num is divisible by 3 AND 5, print "FizzBuzz" 
    else if (!(n % 3) && !(n%5))  {
        console.log("FizzBuzz")
    }
    // 4 -Else print num
    else {
        console.log(n);
    }
}  */

/* 
div3     check n % 3 and print "Fizz". (Success)
div3     check n % 5 and print "Buzz". (Success)
div3and5 check n % 3 AND n % 5 and print "FizzBuzz". (Failed)

On num 15, it should print "FizzBuzz" but instead prints "Fizz"
Since the first condition is true, it breaks out of the if statements and iterates to next num
Solution could be to check first if num is divisible by 3 and 5.
*/

for (let n = 1; n <= answer; n++) {
    // 3 -If num is divisible by 3 AND 5, print "FizzBuzz" 
    if (!(n % 3) && !(n%5))  {
        console.log("FizzBuzz")
    }

    // 1 - If num is divisible by 3 print "Fizz"
    else if (!(n % 3)) {
        console.log("Fizz");
        }    

    // 2 - If num is divisible by 5 print "Buzz"
    else if ( !(n % 5)) {
        console.log("Buzz")
    }

    // 4 -Else print num
    else {
        console.log(n);
    }
} 

// It works!
