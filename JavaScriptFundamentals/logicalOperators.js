// 1: What is the code below going to output?

// alert( null || 2 || undefined ); // will alert 2 because it's the only truthy value

// 2: What will the code below output?

// alert( alert(1) || 2 || alert(3) ); // 1 will be alerted first and 2 will be alerted 2nd. The 3rd is never run

// 3: What is this code going to show?

// alert( 1 && null && 2 ); // null because it's the first falsy value

// 4: What will this code show?

// alert( alert(1) && alert(2) );

/* The call to alert returns undefined (it just shows a message, so there’s no meaningful return).
Because of that, && evaluates the left operand (outputs 1), and immediately stops, because undefined is a falsy value. 
And && looks for a falsy value and returns it, so it’s done. */

// 5: What will the result be?

// alert( null || 2 && 3 || 4 );

/* The precedence of AND && is higher than ||, so it executes first.
The result of 2 && 3 = 3, so the expression becomes: null || 3 || 4 */


// 6: Write an if condition to check that age is between 14 and 90 inclusively.

/* if(age >= 14 && age <= 90){
    // Do cool stuff
} */

// 7: Write an if condition to check that age is NOT between 14 and 90 inclusively.

/* if(!(age >= 14 && !age <=90)){
    // Do cool stuff
} */

// 8: Which of these alerts are going to execute?

/* if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' );

// Runs.
// The result of -1 || 0 = -1, truthy
if (-1 || 0) alert( 'first' );

// Doesn't run
// -1 && 0 = 0, falsy
if (-1 && 0) alert( 'second' );

// Executes
// Operator && has a higher precedence than ||
// so -1 && 1 executes first, giving us the chain:
// null || -1 && 1  ->  null || 1  ->  1
if (null || -1 && 1) alert( 'third' ); */


 // 9 Write the code which asks for a login with prompt.

/* If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.
The password is checked as follows:
If it equals “TheMaster”, then show “Welcome!”,
Another string – show “Wrong password”,
For an empty string or cancelled input, show “Canceled” */

/* let userName = prompt('Are you admin?');
if(userName === 'Admin'){
    prompt('Enter password');
} else if(userName === '' || null){
    confirm('Canceled')
} else {
    confirm('I don\'t know this');
} */

/* let userName = prompt('Are you admin?');
let message = userName === 'Admin' ? prompt('Enter password'):
userName === '' || null ? confirm('Canceled'):
confirm('I don\'t know this'); */