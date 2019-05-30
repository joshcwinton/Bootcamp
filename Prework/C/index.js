// Import the "mocha" module;
const Mocha = require('mocha');
// Instantiate an instance of Mocha, with an empty options object;
const runner = new Mocha({});

// Add the files to be tested to the instance of Mocha;
runner.addFile('./countDownSum.js'); // 6 tests;
runner.addFile('./factorial.js'); // 6 tests;

// Execute the tests;
runner.run(failures => {
  if (failures) {
    console.error(failures);
  } 
  else {
    console.log('All tests passed!');
  }
});

/*

  Repl.it: Installing fresh packages

  Prior to writing any code, if you immediately press "run" and see this displayed, then you are at the starting point (note: you might have to wait a few moments for the packages to load up);

  countdownSum
    1) "before each" hook for "should be a function"

  factorial
    2) "before each" hook for "should be a function"


  0 passing (9ms)
  2 failing

  1) countdownSum
       "before each" hook for "should be a function":
     ReferenceError: countdownSum is not defined
      at Context.beforeEach (countdownSum.js:20:5)

  2) factorial
       "before each" hook for "should be a function":
     ReferenceError: factorial is not defined
      at Context.beforeEach (factorial.js:20:5)

*/