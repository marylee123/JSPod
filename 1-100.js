for(let num = 1; num < 101; num++){
  if(num%10 === 0){
    $("body").append(`<p style="color: red">${num}</p>`);
  }
  else{
    $("body").append(`<p>${num}</p>`);
  }
}
