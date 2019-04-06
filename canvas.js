let paintColor = "white";

$("th").click((e) => {
  console.log(paintColor);
  $(e.target).attr("class", paintColor);
});

$("#palette div").click((e) => {
  paintColor = $(e.target).attr("class");
  console.log(paintColor);
});
