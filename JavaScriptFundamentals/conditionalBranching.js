// 1: Will alert be shown?

/* if ("0") {
    alert( 'Hello' );
} */

// Yes the alert will be shown because '0' is not empty so becomes true


// 2: The name of JavaScript

/* Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’

If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “You don’t know? ECMAScript!” */

/* let officialJavaScriptName = prompt('What is the \'official\' name of JavaScript?');
let correctName = officialJavaScriptName == 'ECMAScript' ? 'right' : 'You don\'t know? ECMAScript!';
console.log(correctName); */

// 3: Rewrite this if using the conditional operator '?':

/* let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
} */


/* let a = 2
let b = 2
let result = (a + b < 4) ? 'Below' : 'Over';
console.log(result) */


// 4 : Rewrite if..else using multiple ternary operators '?'.

// For readability, it’s recommended to split the code into multiple lines.

/* let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
} */


/* let message = (login == 'Employee') ? 'Hello':
(login == 'Director') ? 'Greetings':
(login == '') ? 'No login':
''; */