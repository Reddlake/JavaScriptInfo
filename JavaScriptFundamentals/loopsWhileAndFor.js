// 1: What is the last value alerted by this code? Why?

/* let i = 3;

while (i) {
  alert( i-- );
} */

/* The last value that is alerted is 1. The first value alerted is 3. Then the loop subtracts 1 which makes it 2 then alerts that value.
It then loops again and subtracts 1 from the previous subtration which is now 1 then alerts the value.
0 is null so it is not alerted */

// 2: For every loop iteration, write down which value it outputs and then compare it with the solution.

// Both loops alert the same values, or not?

// prefix form ++i

/* let i = 0;
while (++i < 5) alert( i ); // it alerts 1 - 4

// postfix form

let i = 0;
while (i++ < 5) alert( i ); // it alerts 1 - 5 */


// 3: For each loop write down which values it is going to show. Then compare with the answer.

// Both loops alert same values or not?

/* // postfix
for (let i = 0; i < 5; i++) alert( i ); // output is 0 - 4
// prefix
for (let i = 0; i < 5; ++i) alert( i ); // output is 0 - 4 */

// 4: Use the for loop to output even numbers from 2 to 10.

/* for(i = 1; i <=10; i++){
    if(i % 2 === 0){
        console.log(i);
    }
} */

// 5: Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).

/* let i = 0;
while(i <= 10){
    i++
   if(i % 2 === 0){
       console.log(i)
   }
} */

/*  6: Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.

The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.

Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task. */
/* let num;
do {
    num = prompt('Enter a number greater than 100', 0);
} while(num <= 100 && num) */


/*  7:  An integer number greater than 1 is called a prime if it cannot be divided without a remainder by anything except 1 and itself.

In other words, n > 1 is a prime if it can’t be evenly divided by anything except 1 and n.

For example, 5 is a prime, because it cannot be divided without a remainder by 2, 3 and 4.

Write the code which outputs prime numbers in the interval from 2 to n.

For n = 10 the result will be 2,3,5,7.

P.S. The code should work for any n, not be hard-tuned for any fixed value. */

let num = prompt('Enter a number');
nextPrime:
for(i = 2; i < num; i++){
for(let divisor = 2; divisor < i; divisor++){
    if(i % divisor == 0) continue nextPrime;
}
console.log(i)
}
