let arrayH = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
let arrayV = [
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9]
];
let array = ["11", "12", "13", "21", "22", "23", "31", "32", "33"];
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];




let fork2 = Math.floor(Math.random()*2);
let computer = Math.floor(Math.random()*9)+1;
let computer2 = 0;

let direction2 = Math.floor(Math.random()*2);
if(direction2 === 0){
  for(let i = 0; i < arrayH.length; i++){
    for(let n = 0; n < arrayH[i].length; n++){
      if(computer === arrayH[i][n]){
        if(n == 0){
          computer2 = arrayH[i][n+1];
        }
        else if(n == 2){
          computer2 = arrayH[i][n-1];
        }
        else if(n == 1){
          if(fork2 == 0){
            computer2 = arrayH[i][n-1];
          }
          else if(fork2 == 1){
            computer2 = arrayH[i][n+1];
          }
        }
      }
    }
  }
}
else if(direction2 === 1){
  for(let i = 0; i < arrayV.length; i++){
    for(let n = 0; n < arrayV[i].length; n++){
      if(computer === arrayV[i][n]){
        if(n == 0){
          computer2 = arrayV[i][n+1];
        }
        else if(n == 2){
          computer2 = arrayV[i][n-1];
        }
        else if(n == 1){
          if(fork2 == 0){
            computer2 = arrayV[i][n-1];
          }
          else if(fork2 == 1){
            computer2 = arrayV[i][n+1];
          }
        }
      }
    }
  }
}
$("#spot2").html(computer + ", " + computer2);

$("#button").click(()=>{
  let x = document.getElementById("first").value;
  let y = document.getElementById("second").value;
  let z = x + y;
  for(let a = 0; a < array.length; a++){
    if(z === array[a]){
      z = array2[a];
    }
  }
  if(z === computer || z === computer2){
    $('#' + array2[z-1]).attr('style', 'background-color: blue');
  }
});
