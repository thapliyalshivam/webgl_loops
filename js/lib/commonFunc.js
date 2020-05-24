var add = function(a,b){
return a+b;

}





function InOutQuint(t) {
    if ((t *= 2) < 1) return 0.5 * t * t * t * t * t;
    return 0.5 * ((t -= 2) * t * t * t * t + 2);
  }


export{
add,
InOutQuint

};