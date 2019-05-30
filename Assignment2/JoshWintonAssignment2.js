let someArray = ['a', 'b', 'c', 'd'];
let allA = ['a', 'a', 'a'];

const logInput = input => {
  console.log(input);
}

const addA = input => {
  return input + 'a';
}

const myTestForA = input => {
  if (input == 'a') {
    return true;
  }
}

const myAdd = (total, input) => {
  return total + input;
}

Array.prototype.myEach = function(cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i]);
  }
}

Array.prototype.myMap = function(cb) {
  let myArray = [];
  for (let i = 0; i < this.length; i++) {
    myArray[i] = 'a';
  }
  return myArray;
}

Array.prototype.myFilter = function(cb) {
  let myArray = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) {
      myArray.push(this[i]);
    }
  }
  return myArray;
}

Array.prototype.mySome = function(cb) {
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i]) == true) {
      return true;
    }
  }
  return false;
}

Array.prototype.myEvery = function(cb) {
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i]) == false) {
      return false;
    }
  }
  return true;
}

Array.prototype.myReduce = function(cb) {
  let accumulate = this[0];
  for (let i = 1; i < this.length; i++) {
    accumulate = cb(accumulate, this[i]);
  }
  return accumulate;
}

Array.prototype.myIncludes = function(target) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === target) {
      return true;
    }
  }
  return false;
}

Array.prototype.myIndexOf = function(target) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === target) {
      return i;
    }
  }
  return -1;
}

Array.prototype.myPush = function(elementToAdd) {
  this[this.length] = elementToAdd;
}

Array.prototype.myUnshift = function(target) {
  for (let i = this.length; i >= 0; i--) {
    if (this[i] === target) {
      return i;
    }
  }
  return -1;
}

Object.grabKeys = function(object) {
  let grabArray = [];
  for (key in object) {
    grabArray.push(key);
  }
  return grabArray;
}

Object.grabValues = function(object) {
  let grabArray = [];
  for (key in object) {
    grabArray.push(object[key]);
  }
  return grabArray;
}

// TESTS

// Test for myEach (expect a, b, c, d)
console.log('Test for myEach: (expect "a, b, c, d"):')
someArray.myEach(logInput);

// Test for myMap (expect a, a, a, a)
console.log('\nTest for myMap: (expect "a, a, a, a"):');
let mapTestArray = someArray.myMap(addA);
mapTestArray.myEach(logInput);

// Test for myFilter (expect a)
console.log('\nTest for myFilter: (expect "a"):');
let filterTestArray = someArray.myFilter(myTestForA);
filterTestArray.myEach(logInput);

// Test for mySome (expect true)
console.log('\nTest for mySome (expect "true"):');
console.log(someArray.mySome(myTestForA));

// Test for myEvery (expect "true")
console.log('\nTest for myEvery (expect "true")');
console.log(allA.mySome(myTestForA));

// Test for myReduce (expect "aaa")
console.log('\nTest for myReduce (expect "aaa")')
let temp = allA.myReduce(myAdd);
console.log(temp);

// Test for myIncludes (expect "false")
console.log('\nTest for myIncludes (expect "false")');
console.log(allA.myIncludes('b'));

// Test for myIndexOf (expect "-1")
console.log('\nTest for myIndexOf (expect "-1")');
console.log(allA.myIndexOf('b'));

// Test for myPush (expect "a, a, a, b")
console.log('\nTest for myPush (expect "a, a, a, b")');
let allA2 = allA;
allA2.myPush('b');
allA2.myEach(logInput);

// Test for myUnshift (expect "5")
console.log('\nTest for myUnshift (expect "5")');
let unshiftTestArray = ['a', 'b', 'c', 'b', 'a', 'b', 'c'];
console.log(unshiftTestArray.myUnshift('b'));

// Test for grabKeys (expect "hey, whats")
console.log('\nTest for grabKeys (expect "hey, whats")');
let grabKeysObject = {
  "hey": "man",
  "whats": "up"
};
console.log(Object.grabKeys(grabKeysObject));

// Test for grabValues (expect "man, up")
console.log('\nTest for grabValues (expect "man, up")');
let grabValuesObject = {
  "hey": "man",
  "whats": "up"
};
console.log(Object.grabValues(grabValuesObject));
