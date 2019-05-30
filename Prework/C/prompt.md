<!-- ASSIGNMENT C: COUNTDOWNSUM AND FACTORIAL -->

Please write out method declarations and method definitions for both "countDownSum" and "factorial" within their respective classes.

You will only need to modify "countDownSum.js" and "factorial.js" --- nothing else. Do not modify the test cases.

While this is a way to become more familiar with JavaScript syntax as well as recursion, this exercise also involves unit testing for particular behaviors and outcomes courtesy of Mocha, Chai, and Sinon (Assignment B also used Mocha and Chai), randomized testing, classes and instance methods in JavaScript requiring modules, and environmental variables. We will go over some of these concepts during the cohort.

Regarding submission of this assignment, please follow a similar protocol to the previous assignments.

That is, solve the problems in your own REPL, create a gist on GitHub with your code for "countDownSum.js" and "factorial.js" and include a link to your REPL within that Gist.

If you are submitting this assignment by itself, please include the subject line as: `${YOUR_NAME} - Assignment C Pre-Work`

If you are submitting this assignment and all the other assignments together (whichever you prefer), please include the subject line as: `${YOUR_NAME} - Pre-Work (ALL)`

Thank you!

Resources:

"https://medium.freecodecamp.org/recursion-is-not-hard-858a48830d83"

<!-- When you have finished with everything, you should see something similar to the following:

  countDownSum
    ✓ should be a function
    ✓ should take in one parameter
    ✓ should return a number
    ✓ should return an accurate summation of all numbers from `num` down to and including 1

***Given 76, your countDownSum function actually returned 2926 when the test expected an output of 2926


***Given 24, your countDownSum function actually returned 300 when the test expected an output of 300


***Given 20, your countDownSum function actually returned 210 when the test expected an output of 210

    ✓ should pass the randomized testing inputs
    ✓ should be a recursive implementation where the function is called `num` times

  factorial
    ✓ should be a function
    ✓ should take in one parameter
    ✓ should return a number
    ✓ should return an accurate product of all numbers from `num` down to and including 1

***Given 2, your factorial function actually returned 2 when the test expected an output of 2


***Given 3, your factorial function actually returned 6 when the test expected an output of 6


***Given 9, your factorial function actually returned 362880 when the test expected an output of 362880

    ✓ should pass the randomized testing inputs
    ✓ should be a recursive implementation where the function is called `num` times


  12 passing (27ms)

All tests passed!

 -->