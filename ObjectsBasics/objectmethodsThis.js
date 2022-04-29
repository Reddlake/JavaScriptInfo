/* 1: Here the function makeUser returns an object.

What is the result of accessing its ref? Why? */

function makeUser() {
    return {
      name: "John",
      ref: this
    };
  }
  
  let user = makeUser();
  
  console.log(( user.ref.name )); // What's the result? Undefined

/* 2: Create an object calculator with three methods:

read() prompts for two values and saves them as object properties with names a and b respectively.
sum() returns the sum of saved values.
mul() multiplies saved values and returns the result. */

/* let calculator = {
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    },
    read() {
        this.a = prompt('a?', 0);
        this.b = prompt('b', 0);
    }
};
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() ); */

// 3 There’s a ladder object that allows to go up and down:

let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { // shows the current step
      alert( this.step );
      return this;
    }
  };

// Now, if we need to make several calls in sequence, can do it like this:

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0

// Modify the code of up, down and showStep to make the calls chainable, like this:

ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0