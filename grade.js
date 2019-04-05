const score = (s) => {
  if(0 < s && s <= 15){
    return "F";
  }
  else if(15 < s && s <= 20){
    return "C";
  }
  else if(20 < s && s <= 25){
    return "B";
  }
  else if(25 < s && s <= 30){
    return "A";
  }
  else{
    return "Not A Valid Number";
  }
}

score(15);
