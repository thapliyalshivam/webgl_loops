//imports and set up the canvas
import {add} from "../lib/commonFunc.js";
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
  ctx.fillStyle = colours.base_blue;
  ctx.globalAlpha = 0.2;
  ctx.fillRect(0, 0, canvas.width,canvas.height);
  ctx.globalAlpha = 1;
}

var Dot = function(){
  this.x=0;
  this.y=0;
  this.colour=colours.green;
  };
  
  Dot.prototype.draw=function(){
    ctx.fillStyle = this.colour;
    ctx.fillRect(this.x, this.y, 4, 4);
  }
  Dot.prototype.update=function(){
   this.x += 1;
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

