const Mocha = require('mocha');
const runner = new Mocha({});

runner.addFile('./pairSum.js');

runner.run(failures => {
  if (failures) {
    console.error(failures);
  } 
  else {
    console.log('All 5 tests passed!');
  }
});