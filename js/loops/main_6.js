//imports and set up the canvas
import { add, ParticleMovement } from "../lib/commonFunc.js";
import  * as dat from '../../node_modules/dat.gui';


import { canvas, ctx } from "../lib/2d_context.js";
import colours from "../lib/colours.js";
document.body.appendChild(canvas);
window.ctx = ctx;

//Variable controls UI
var gui = new dat.GUI();
var controls = {
  SIZE: 4,
  NUMBER: 200,
}
gui.add(controls, 'SIZE', 2, 20);


// let cassa;

const heading = "Worms";
const isVR = false;
const isAR = true;
const renderer = null;




function clearBg() {
  ctx.rect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = `rgba(27, 35, 74,0.1)` // use the rgb array/color for fill, and amt for opacity
  ctx.fill()
}

var Dot = function () {
  this.x = 0;
  this.y = 0;
  this.colour = colours.velvet;
  this.dots = [];

  for (var i = 0; i <= controls.NUMBER; i++) {
    this.dots.push([
      new ParticleMovement(), 
      Math.random() * window.innerWidth,
       Math.random() * window.innerHeight,
      ]);
  }


};

Dot.prototype.draw = function () {
  ctx.fillStyle = this.colour;
  for (var i = 0; i <= controls.NUMBER; i++) {
    (i == 23) && (console.log(this.dots[i][0].step));
    ctx.fillRect(this.dots[i][1], this.dots[i][2], controls.SIZE, controls.SIZE);
  }

}
Dot.prototype.update = function () {
  for (var i = 0; i <= controls.NUMBER; i++) {
    this.dots[i][0].update();
    this.dots[i][1] += this.dots[i][0].dx
    this.dots[i][2] += this.dots[i][0].dy
  }
}


let dd = new Dot();
animate();
function animate() {
  window.requestAnimationFrame(Render);
}

function Render() {
  dd.update();
  clearBg();
  dd.draw();
  window.requestAnimationFrame(Render);
}

export { canvas, Render, heading, renderer, isVR };

