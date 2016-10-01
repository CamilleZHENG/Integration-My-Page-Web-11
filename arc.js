"use strict";

//window.onload = function(){
//	draw();
//};

function draw() {
    var canvas = document.getElementById("arc");
    
    var ctx1 = canvas.getContext("2d");
    ctx1.beginPath();
    ctx1.arc(150, 150, 150,(Math.PI/180)*30,(Math.PI/180)*(-90),true); 
    ctx1.arc(150, 150, 75,(Math.PI/180)*(-90),(Math.PI/180)*30,false);
    ctx1.fillStyle="rgb(243, 69, 60)";
    ctx1.fill();

    var ctx2 = canvas.getContext("2d");
    ctx2.beginPath();
    ctx2.arc(150, 150, 150,(Math.PI/180)*150,(Math.PI/180)*30,true); 
    ctx2.arc(150, 150, 75,(Math.PI/180)*30,(Math.PI/180)*150,false); 
    ctx2.fillStyle="rgb(244, 129, 58)";
    ctx2.fill();

    var ctx3 = canvas.getContext("2d");
    ctx3.beginPath();
    ctx3.arc(150, 150, 150,(Math.PI/180)*270,(Math.PI/180)*150,true); 
    ctx3.arc(150, 150, 75,(Math.PI/180)*150,(Math.PI/180)*270,false); 
    ctx3.fillStyle="rgb(245, 174, 40)";
    ctx3.fill();
}