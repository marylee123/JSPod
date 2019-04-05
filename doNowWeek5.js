const larger = (a, b) => {
  if(a > b){
    return a;
  }
  else if(b > a){
    return b;
  }
  else if(b == a){
    return "Equal";
  }
}

console.log(larger(6, 4));
