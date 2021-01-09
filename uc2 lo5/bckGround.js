var myColor = document.getElementById("main");
var colorr = ["#FF0000", "#00FF00", "#0000FF", "#f0db4f"];
var counter = 0;

function changeColor(){

    if( counter >= colorr.length)
    {
        counter = 0;
    }
  myColor.style.background = colorr[counter];
    counter++;
}
setInterval(changeColor, 200);