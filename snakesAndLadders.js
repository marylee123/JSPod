let count = 0;
let total = 0;
let total2 = 0;
$("#dice").click(()=>{
  count += 1;
  if(count%2 === 0){
    $('#' + total2).attr('style', 'background-color: white');

    let dice2 = Math.floor(Math.random()*5);
    document.getElementById("num").innerHTML = dice2;
    total2 += dice2;

    if(total2 == 97){
      total2 = 1;
    }
    else if(total2 == 50){
      total2 = 21;
    }
    else if(total2 == 67){
      total2 = 11;
    }
    else if(total2 == 89){
      total2 = 45;
    }
    else if(total2 == 38){
      total2 = 56;
    }
    else if(total2 == 54){
      total2 = 63;
    }
    else if(total2 == 40){
      total2 = 71;
    }
    else if(total2 == 6){
      total2 = 24;
    }

    document.getElementById("spot2").innerHTML = total2;
    $("div#log").append("<p>Player 2 got "+ dice2 + ". New position is " + total2 + ".");

    $('#' + total2).attr('style', 'background-color: blue');
  }
  else{
    $('#' + total).attr('style', 'background-color: white');

    let dice = Math.floor(Math.random()*5);
    document.getElementById("num").innerHTML = dice;
    total += dice;

    if(total == 97){
      total = 1;
    }
    else if(total == 50){
      total = 21;
    }
    else if(total == 67){
      total = 11;
    }
    else if(total == 89){
      total = 45;
    }
    else if(total == 38){
      total = 56;
    }
    else if(total == 54){
      total = 63;
    }
    else if(total == 40){
      total = 71;
    }
    else if(total == 6){
      total = 24;
    }

    document.getElementById("spot").innerHTML = total;
    $("div#log").append("<p>Player 1 got "+ dice + ". New position is " + total + ".");


    if(total === total2){
      $('#' + total).attr('style', 'background-color: purple');
      $('#' + total2).attr('style', 'background-color: purple');
    }
    else{
      $('#' + total).attr('style', 'background-color: red');
      $('#' + total).attr('style', 'background-color: blue');
    }
  }
});
