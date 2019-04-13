let array = [32, 14, 3, 1, 6, 7, 24, 900];
for(let i = 0; i < array.length; i++){
  array[i] -= Math.floor(Math.random()*100)+1;
}
console.log(array);
