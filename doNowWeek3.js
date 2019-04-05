let array = [3, 17, 3, 2, 4, 4, 3];
let array2 = [];
for(let num = 0; num < array.length; num++){
  for(let x = 0; x < array.length; x++){
    if(array[num] === array[x] && num != x){
      array2.push(array[num]);
    }
  }
}
console.log(array2);
