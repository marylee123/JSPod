let array = [7, 3, 17, 6, 5, 0];
for(let num = 0; num < array.length; num++){
  for(let num2 = 1; num2 < array.length; num2++){
    if(array[num2 - 1] > array[num2]){
      let first = array[num2 - 1];
      array[num2 - 1] = array[num2];
      array[num2] = first;
    }
    console.log(array);
  }
}
