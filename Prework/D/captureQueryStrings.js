const { expect } = require("chai");

// Returns an object whose keys represent the query string parameters contained in the route path and whose values are set to the query string parameter values;
// Assume that all test cases are well-formed, valid inputs and will always follow the formats seen below --- only be concerned with inputs like the test cases below;
// The sole "?" symbol denotes the beginning of the query string;
// Query string parameters are on the left-side of the "=" sign and query string parameter values are on the right-side of the "=" sign;
// The "&" sign indicates that there are multiple query string parameters;
// Please see examples below;

function captureQueryStrings(routePath) {
  var str = routePath.split('?');
  console.log(str[0]);
  str[1].forEach
}

/* For your own reference

// let exampleRoutePathA1 = "/search?word=hello";
// let exampleRoutePathB2 = "/search?first=ryan&last=dahl";
// let exampleRoutePathC3 = "/search?color=blue&make=toyota&model=camry";

// captureQueryStrings(exampleRoutePathA1) ===> { word: "hello"};
// captureQueryStrings(exampleRoutePathB2) ===> { first: "ryan", last: "dahl" };
// captureQueryStrings(exampleRoutePathC3) ===> { color: "blue", make: "toyota", model: "camry" };

*/

describe("captureQueryStrings", () => {

  let studentCaptureQueryStrings;

  beforeEach(() => {
    studentCaptureQueryStrings = captureQueryStrings;
  })

  it("return an object whose keys represent the query string parameters contained in the route path and whose values are set to the query string parameter values", () => {

    let exampleRoutePathA1 = "/search?word=hello";
    let exampleRoutePathB2 = "/search?first=ryan&last=dahl";
    let exampleRoutePathC3 = "/search?color=blue&make=toyota&model=camry";

    let studentSolutionA1 = studentCaptureQueryStrings(exampleRoutePathA1);
    let studentSolutionB2 = studentCaptureQueryStrings(exampleRoutePathB2);
    let studentSolutionC3 = studentCaptureQueryStrings(exampleRoutePathC3);

    expect(studentSolutionA1).to.be.an('object');
    expect(studentSolutionB2).to.be.an('object');
    expect(studentSolutionC3).to.be.an('object');

    expect(Object.keys(studentSolutionA1)).to.have.lengthOf(1);
    expect(Object.keys(studentSolutionB2)).to.have.lengthOf(2);
    expect(Object.keys(studentSolutionC3)).to.have.lengthOf(3);

    expect(studentSolutionA1).to.have.own.property("word", "hello");
    expect(studentSolutionB2).to.have.all.keys("first","last");
    expect(studentSolutionC3).to.have.all.keys("color", "make", "model");

    let actualSolutionA1 = { word: "hello" };
    let actualSolutionB2 = { first: "ryan", last: "dahl" };
    let actualSolutionC3 = { color: "blue", make: "toyota", model: "camry" };

    expect(studentSolutionA1).to.eql(actualSolutionA1);
    expect(studentSolutionB2).to.eql(actualSolutionB2);
    expect(studentSolutionC3).to.eql(actualSolutionC3);
  })

})
