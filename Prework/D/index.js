const Mocha = require('mocha');
const runner = new Mocha({});

runner.addFile('./captureParams.js'); // 1 test;
runner.addFile('./captureQueryStrings.js'); // 1 test;

runner.run(failures => {
  if (failures) {
    console.error(failures);
  } 
  else {
    console.log('All tests passed!');
  }
});