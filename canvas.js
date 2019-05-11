let paintColor = "white";

$("#color").click(()=>{
  let hex = document.getElementById("input").value;
  console.log(hex);
  $("#palette").append("<div class='" + hex + "' style=''></div>");
  $('.' + hex).attr('style', 'background-color: ' + hex);
  console.log(hex);
});
$("th").click((e)=>{
  $(e.target).attr("class", paintColor);
  console.log(paintColor);
});
$("#palette div").click((e)=>{
  paintColor = $(e.target).attr("class");
  console.log(paintColor);
  console.log(e);
});
$("#reset").click(()=>{
  $("th").attr('style', 'background-color: white');
});
//colors of those that are clicked show up on console because you console.log them (there is no problem)


/*    <label for="box">Box Size:</label>
    <input id="box"></input>

    <label for="row">Rows:</label>
    <input id="row"></input>

    <label for="column">Columns:</label>
    <input id="column"></input>*/
