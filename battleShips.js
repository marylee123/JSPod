let arrayH = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
let arrayV = [
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9]
]
let fork = Math.floor(Math.random()*2);

let ship = Math.floor(Math.random()*9)+1;
$('#' + ship).attr('style', 'background-color: red');
let ship2 = 0;

let direction = Math.floor(Math.random()*2);
if(direction === 0){
  for(let i = 0; i < arrayH.length; i++){
    for(let n = 0; n < arrayH[i].length; n++){
      if(ship === arrayH[i][n]){
        if(n == 0){
          ship2 = arrayH[i][n+1];
          $('#' + arrayH[i][n+1]).attr('style', 'background-color: red');
        }
        else if(n == 2){
          ship2 = arrayH[i][n-1];
          $('#' + arrayH[i][n-1]).attr('style', 'background-color: red');
        }
        else if(n == 1){
          if(fork == 0){
            ship2 = arrayH[i][n-1];
            $('#' + arrayH[i][n-1]).attr('style', 'background-color: red');
          }
          else if(fork == 1){
            ship2 = arrayH[i][n+1];
            $('#' + arrayH[i][n+1]).attr('style', 'background-color: red');
          }
        }
      }
    }
  }
}
else if(direction === 1){
  for(let i = 0; i < arrayV.length; i++){
    for(let n = 0; n < arrayV[i].length; n++){
      if(ship === arrayV[i][n]){
        if(n == 0){
          ship2 = arrayV[i][n+1];
          $('#' + arrayV[i][n+1]).attr('style', 'background-color: red');
        }
        else if(n == 2){
          ship2 = arrayV[i][n-1];
          $('#' + arrayV[i][n-1]).attr('style', 'background-color: red');
        }
        else if(n == 1){
          if(fork == 0){
            ship2 = arrayV[i][n-1];
            $('#' + arrayV[i][n-1]).attr('style', 'background-color: red');
          }
          else if(fork == 1){
            ship2 = arrayV[i][n+1];
            $('#' + arrayV[i][n+1]).attr('style', 'background-color: red');
          }
        }
      }
    }
  }
}
$("#spot").html(ship + ", " + ship2);
//array - in the if statements, there will be a loop, so it will check if the id of the chosen tile is in the array.
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

let array = ["11", "12", "13", "21", "22", "23", "31", "32", "33"];
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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
    /*$('#' + array2[z-1]).attr('style', 'background-color: black');
    if(array2[computer].style.backgroundColor === "black" && array2[computer2].style.backgroundColor === "black"){
      alert("You win!");
    }*/
    let attribute = document.getElementById(array2[computer-1]).getAttribute('style', 'background-color:' );
    console.log(attribute);
  }
  else{
    $('#' + array2[z-1]).attr('style', 'background-color: blue');
  }
});
