var canvas;
var to;

var gameLoop;
var spilleren;

window.onload = function(){
    canvas=document.getElementById("game");
    ctx = canvas.getContext("2d");
    to=canvas.getContext("2d");

  
    //dette er spilleren
    spilleren  = new Spiller(100,100);

    //engine for nå
    gameLoop = setInterval(step, 1000/30);



} 

function step() {

    spilleren.step();

    draw();
}
function draw(){
    ctx.fillStyle = "white"
    ctx.fillRect(0,0, 1280,720)
    to.moveTo(0,650);
    to.lineTo(700,650);
    to.stroke();

    to.moveTo(300,650)
    to.lineTo(300,570)
    to.stroke();

    to.moveTo(390,650)
    to.lineTo(390,570)
    to.stroke();

    to.moveTo(300,570)
    to.lineTo(390,570)
    to.stroke();

    to.moveTo(700,650)
    to.lineTo(700,720)
    to.stroke();

    to.moveTo(800,650)
    to.lineTo(1280,650)
    to.stroke();

    to.moveTo(800,650)
    to.lineTo(800,720)
    to.stroke();


    spilleren.draw();

}
