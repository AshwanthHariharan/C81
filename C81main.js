var canvas = document.getElementById("mycanvas");
var color= "red";
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth=2;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
    var X = e.clientX-canvas.offsetLeft;
    var Y = e.clientY-canvas.offsetTop;
    console.log(X,Y)

    circle(X,Y);
}

function circle(X,Y) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth=2;
    ctx.arc(X,Y,40,0,2*Math.PI);
    ctx.stroke();  
}