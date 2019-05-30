const range = (start, end) => {
  let arrayLength = end-start;
  let array = [];
  for (let i = 0; i <= arrayLength; i++) {
    array[i] = start+i;
  }
  return array;
}

console.log(range(0, 20));
