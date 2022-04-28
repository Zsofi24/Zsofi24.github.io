$(document).ready(function(){
function myFunction() {
    var x = document.getElementById("nav");
    if (x.className === "nav-flexbox") {
      x.className += " responsive";
    } else {
      x.className = "nav-flexbox";
    }
  }
});

