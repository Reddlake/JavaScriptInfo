// 1: The following function returns true if the parameter age is greater than 18.

function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      // ...
      return confirm('Did parents allow you?');
    }
  }

// Will the function work differently if else is removed?

function checkAge(age) {
    if (age > 18) {
      return true;
    }
    // ...
    return confirm('Did parents allow you?');
  }

// Yes the function will work exactly the same way. If age is falsey it will return the confirm