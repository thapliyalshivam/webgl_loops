//Basic math Functions

var add = function(a,b){
return a+b;
}


//Particle Equations

function ParticleMovement(config){
this.dx = 0;
this.dy = 0;
this.stepRange = 100;
this.divisions = 100;
this.step = 0+Math.random()*100;
this.norm = 1/10;
this.norm2 = -3+Math.random()*3;
this.diff=1+Math.random()*4;

this.update=function(){
  let vv = 2*Math.PI*this.step/(this.divisions*this.norm2);
  let v2 = 2*Math.PI*this.step/(this.divisions*this.norm);
  // this.dx = Math.sin(2*Math.PI*this.norm/this.step)*this.config.diff  
  // this.dy  =Math.cos(2*Math.PI*this.norm/this.step)*this.config.diff 
  this.dx = Math.sin(vv)*this.diff  +  Math.cos(vv)*Math.cos(v2)*Math.random()*2
  this.dy  =Math.cos(vv)*this.diff  +  Math.sin(vv)*Math.sin(v2)*Math.random()*2
this.step = (this.step+1)%this.stepRange;
}
}


function InOutQuint(t) {
    if ((t *= 2) < 1) return 0.5 * t * t * t * t * t;
    return 0.5 * ((t -= 2) * t * t * t * t + 2);
  }




//Colour Conversions
let col={}

col.HextoHexa =(Hex)=>{
if (Hex ===undefined){
  console.log("No value passed to HextoHexa");
  return
}


}

export{
add,
InOutQuint,
ParticleMovement,
col

};