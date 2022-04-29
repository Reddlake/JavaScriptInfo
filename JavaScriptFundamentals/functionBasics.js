// 1: The following function returns true if the parameter age is greater than 18.

/* function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      // ...
      return confirm('Did parents allow you?');
    }
  } */

// Will the function work differently if else is removed?

/* function checkAge(age) {
    if (age > 18) {
      return true;
    }
    // ...
    return confirm('Did parents allow you?');
  } */

// Yes the function will work exactly the same way. If age is falsey it will return the confirm


// 2: The following function returns true if the parameter age is greater than 18.

/* function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Did parents allow you?');
    }
  } */

/* Rewrite it, to perform the same, but without if, in a single line.

Make two variants of checkAge:

Using a question mark operator ?
Using OR || */


/* let age = 18
let checkAge = age > 18 ? true : confirm('Did parents allow you?');

let checkAge = age > 18 || confirm('Did parents allow you'); */

// 3: Write a function min(a,b) which returns the least of two numbers a and b.


/* let num1 = 4
let num2 = 3
let findMin = num1 < num2 ? num1 : num2;
console.log(findMin) */

// 4: Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

/* let num = Number(prompt('Enter an integer', ''));
let pow = Number(prompt('Enter an integer', ''));
let numPow = num * pow
console.log(numPow); // written without a function */

function findPow(x,n){
    let result = x;

    for(i = 1; i < n; i++){
        result *= x
    }
    return result
}
let x = Number(prompt('Enter a number'));
let n = Number(prompt('Enter a number'));

if(n < 1) {
    alert('Pick a positive number')
} else {
    alert(findPow(x,n));
}

/* Create a web-page that prompts for x and n, and then shows the result of pow(x,n).

P.S. In this task the function should support only natural values of n: integers up from 1. */