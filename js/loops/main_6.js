//imports and set up the canvas
import {add,ParticleMovement} from "../lib/commonFunc.js";


import {canvas,ctx} from "../lib/2d_context.js";
document.body.appendChild( canvas );
window.ctx=ctx;

//Variable controls UI
var gui = new dat.GUI();
var controls={
SIZE:4,
NUMBER:6,
}
gui.add(controls, 'SIZE', 2,20);
gui.add(controls, 'NUMBER', 1, 30);


// let cassa;
import cassa from '../lib/cassandra.js';
import colours from "../lib/colours.js";
console.log(cassa);
const heading = cassa;
const isVR = false;
const isAR = true;
const renderer=null;




function clearBg(){
  ctx.rect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = `rgba(27, 35, 74,0.2)` // use the rgb array/color for fill, and amt for opacity
 ctx.fill()
}

var Dot = function(){
  this.x=0;
  this.y=0;
  this.colour=colours.green;
  this.dots=[];

  for (var i=0;i<=30;i++){
    this.dots.push([new ParticleMovement(),100+Math.random()*200,100+Math.random()*200]);
  }


  };
  
  Dot.prototype.draw=function(){
    ctx.fillStyle = this.colour;
    for (var i=0;i<=30;i++){
      ctx.fillRect(this.dots[i][1]*this.dots[i][0].dx, this.dots[i][2]*this.dots[i][0].dy, 4, 4);
    }
  
  }
  Dot.prototype.update=function(){
    for (var i=0;i<=30;i++){
      this.dots[i][0].update();
    }
  }


let dd = new Dot();
animate();
function animate() {
	window.requestAnimationFrame(Render);
}

function Render() {
clearBg();
dd.update();
dd.draw();


window.requestAnimationFrame(Render);
}

export { canvas, Render, heading, renderer, isVR };

