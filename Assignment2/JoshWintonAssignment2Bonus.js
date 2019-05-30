const range = (start, end, step) => {
  let arrayLength;
  let array = [];

  if(step == undefined){
    step = 1;
  }

  if(end >= start){
    arrayLength = end-start;
  } else {
    arrayLength = start-end;
  }

  let incrementer = start;

  for (let i = 0; i <= arrayLength; i++) {
    array[i] = incrementer;
    incrementer += step;
  }

  return array;
}

const sum = array => {
  let temp = 0;
  for (let i = 0; i < array.length; i++) {
    temp += array[i]
  }
  return temp;
}

const reverseArray = array => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray[array.length-i-1] = array[i];
  }
  return newArray;
}

const reverseArrayInPlace = array => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray[array.length-i-1] = array[i];
  }
  for (let i = 0; i < array.length; i++) {
    array[i] = newArray[i];
  }
}

// not finished after this
const arrayToList = array => {
  let list = {};
  if (array.length == 1){
    list.value = array[0];
    list.rest = null;
    return list;
  } else {
    list.value = array[0];
    list.rest = arrayToList[array.slice(1)];
    return list;
  }
}

const listToArray = list => {
  let array = [];
  if(list.rest==null){
    array.push(list.value);
    return array;
  } else {
    array.push(list.value);

  }
}

const deepEqual = (objA, objB) => {
  if (typeof objA == typeof objB) {
    for (key in objA){
      console.log(key, key)
      console.log(objA[key], objB[key])
      if(objA[key] !== objB[key]){
        return false;
      }
    }
    return true;
  }
  return false;
}

console.log('Tests for The Sum of a Range (with Bonus!): ')
console.log('console.log(range(1, 10));')
console.log(range(1, 10));

console.log('\nconsole.log(range(5, 2. -1));');
console.log(range(5, 2, -1));

console.log('\nconsole.log(sum(range(1, 10)));');
console.log(sum(range(1, 10)));

console.log('\nTests for Reversing an Array: ');
console.log('console.log(reverseArray(["A", "B", "C"]));');
console.log(reverseArray(["A", "B", "C"]));

console.log('\nlet arrayValue = [1, 2, 3, 4, 5];');
console.log('reverseArrayInPlace(arrayValue);');
console.log('console.log(arrayValue);');
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);

console.log('\nTests for A List: ');
console.log(arrayToList([10, 20, 30, 40, 50, 60]));
// → {value: 10, rest: {value: 20, rest: null}}




console.log('\nTests for Deep Comparison: ')
console.log('let obj = {here: {is: "an"}, object: 2};');
console.log('console.log(deepEqual(obj, obj));');
let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));

console.log('\nconsole.log(deepEqual(obj, {here: 1, object: 2}));');
console.log(deepEqual(obj, {here: 1, object: 2}));

console.log('\nconsole.log(deepEqual(obj, {here: {is: "an"}, object: 2}));');
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
