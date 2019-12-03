function change() {
  console.log("change color")
  var bg = document.querySelector("body");
  if (bg.style.backgroundColor == "pink"){
    console.log("changing to blue");
    bg.style.backgroundColor = "ccfff5";
  }
  else{
  console.log("changing to pink");
  bg.style.backgroundColor="pink";
}}
