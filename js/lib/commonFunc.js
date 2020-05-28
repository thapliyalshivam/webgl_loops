var add = function(a,b){
return a+b;

}



function ParticleMovement(){
this.dx = 0
this.dy = 0
this.step = 100+Math.random()*50;

this.update=function(){
  this.dx = Math.sin(this.step%20)*Math.cos(this.step);
  this.dy  =Math.cos(this.step%20)*Math.sin(this.step);

this.step = (this.step+1)%100;
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