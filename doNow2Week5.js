const largest = (array) => {
  let i = array[0];
  for(let z = 0; z < array.length; z++){
    if(array[z] > i){
      i = array[z];
    }
  }
  return i;
}
console.log(largest([1, 2, 3, 4, 5]));
