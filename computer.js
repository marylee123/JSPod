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
