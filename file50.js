function MinNumber(array) {
  if (array.length === 0) {
    return undefined; 
  }

  let min = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }

  return min;
}

console.log('Мінімальне число в масиві:', min);
