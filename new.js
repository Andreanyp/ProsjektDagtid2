var canvas;
var to;



window.onload = function(){
    canvas=document.getElementById("game");
    to=canvas.getContext("2d");

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

    
}