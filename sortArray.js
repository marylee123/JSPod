let array = [3, 7, 4, 1];
for(let num = 0; num < array.length; num++){
  for(let n = 0; n < array.length; n++){
    if(array[n] > array[n + 1]){
      let first = array[n];
      array[n] = array[n + 1];
      array[n + 1] = first;
    }
    console.log(array);
  }
}
