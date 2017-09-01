var hourDeg = 0;
var minDeg = 0;
var secDeg = 0;

var secEl = document.getElementById("second");
var minEl = document.getElementById("minute");
var hourEl = document.getElementById("hour");

var secDummy = setInterval(function(){
  secDeg+=6;
  secEl.style.transform = "rotate("+secDeg+"deg)";
},1000);

var minDummy = setInterval(function(){
  minDeg+=.1;
  minEl.style.transform = "rotate("+minDeg+"deg)";
},1000);

var hourDummy = setInterval(function(){
  hourDeg+=.1;
  hourEl.style.transform = "rotate("+hourDeg+"deg)";
},12000);



