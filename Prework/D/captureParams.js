const { expect } = require("chai");

// Returns an object whose keys are the parameter names contained in the route path and whose values are set to true;
// Assume that all test cases are well-formed, valid inputs and will always follow the formats seen below --- only be concerned with inputs like the test cases below;
// Please see examples below;

function captureParams(routePath) {
  var obj = {};
  var paramArray = routePath.split(':');
  for (var i = 1; i < paramArray.length; i++) {
    console.log(paramArray[i]);
  }
}

/* For your own reference

// let exampleRoutePathA = "/users/:userId";
// let exampleRoutePathB = "/posts/:postId";
// let exampleRoutePathC = "/users/orders/:orderId";
// let exampleRoutePathD = "/fruit/:fruitName/:fruitColor";

// captureParams(exampleRoutePathA) ===> { userId: true };
// captureParams(exampleRoutePathB) ===> { postId: true };
// captureParams(exampleRoutePathC) ===> { orderId: true };
// captureParams(exampleRoutePathD) ===> { fruitName: true, fruitColor: true };

*/

describe("captureParams", () => {
  let studentCaptureParams;

  beforeEach(() => {
    studentCaptureParams = captureParams;
  })

  it("return an object whose keys are the parameter names contained in the route path and whose values are set to true", () => {

    let exampleRoutePathA = "/users/:userId";
    let exampleRoutePathB = "/posts/:postId";
    let exampleRoutePathC = "/users/orders/:orderId";
    let exampleRoutePathD = "/fruit/:fruitName/:fruitColor";

    let studentSolutionA = studentCaptureParams(exampleRoutePathA);
    let studentSolutionB = studentCaptureParams(exampleRoutePathB);
    let studentSolutionC = studentCaptureParams(exampleRoutePathC);
    let studentSolutionD = studentCaptureParams(exampleRoutePathD);

    expect(studentSolutionA).to.be.an('object');
    expect(studentSolutionB).to.be.an('object');
    expect(studentSolutionC).to.be.an('object');
    expect(studentSolutionD).to.be.an('object');

    expect(Object.keys(studentSolutionA)).to.have.lengthOf(1);
    expect(Object.keys(studentSolutionB)).to.have.lengthOf(1);
    expect(Object.keys(studentSolutionC)).to.have.lengthOf(1);
    expect(Object.keys(studentSolutionD)).to.have.lengthOf(2);

    expect(studentSolutionA).to.have.own.property("userId", true);
    expect(studentSolutionB).to.have.own.property("postId", true);
    expect(studentSolutionC).to.have.own.property("orderId", true);
    expect(studentSolutionD).to.have.all.keys("fruitName","fruitColor");

    let actualSolutionA = { userId: true };
    let actualSolutionB = { postId: true };
    let actualSolutionC = { orderId: true };
    let actualSolutionD = { fruitName: true, fruitColor: true };

    expect(studentSolutionA).to.eql(actualSolutionA);
    expect(studentSolutionB).to.eql(actualSolutionB);
    expect(studentSolutionC).to.eql(actualSolutionC);
    expect(studentSolutionD).to.eql(actualSolutionD);
  })

})
