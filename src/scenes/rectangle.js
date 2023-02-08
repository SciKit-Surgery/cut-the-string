// 2x 2D rectangles next to eachother
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.rect(10, 10, 120, 80);
// a second rectangle inline withe the first 
ctx.rect(130, 10, 120, 80);
ctx.stroke();