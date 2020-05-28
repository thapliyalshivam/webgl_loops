var add = function(a,b){
return a+b;

}



function ParticleMovement(config){
 this.config= config||{
   diff:1+Math.random()*5
 }; 
this.dx = 0
this.dy = 0
this.stepRange = 100;
this.step = 0+Math.random()*100;
this.norm = 1/6;

this.update=function(){
  let vv = 2*Math.PI*this.step/this.stepRange;
  let v2 = 2*Math.PI*this.step/(this.stepRange*this.norm);
  // this.dx = Math.sin(2*Math.PI*this.norm/this.step)*this.config.diff  
  // this.dy  =Math.cos(2*Math.PI*this.norm/this.step)*this.config.diff 
  this.dx = Math.sin(vv)*this.config.diff  + Math.cos(v2)*Math.random()*3
  this.dy  =Math.cos(vv)*this.config.diff  + Math.sin(v2)*Math.random()*4

this.step = (this.step+1)%this.stepRange;
// console.logth(step);
}


}


function InOutQuint(t) {
    if ((t *= 2) < 1) return 0.5 * t * t * t * t * t;
    return 0.5 * ((t -= 2) * t * t * t * t + 2);
  }


export{
add,
InOutQuint,
ParticleMovement

};