(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{22:function(t,i,n){"use strict";i.a={green:"#00ff00",velvet:"#AE1C59",base_blue:"#161b33",acid_pink:"#FE46A5",acid_yellow:"#FCD51D",acid_blue:"#0029FF",acid_green:"#02BF66",acid_orange:"#FC5E21",acid_cyan:"#00ADEC",matte_pink:"#b5aeb5"}},9:function(t,i,n){"use strict";n.r(i),n.d(i,"canvas",(function(){return o})),n.d(i,"Render",(function(){return p})),n.d(i,"heading",(function(){return c})),n.d(i,"renderer",(function(){return l})),n.d(i,"isVR",(function(){return u}));function e(t){this.dx=0,this.dy=0,this.stepRange=100,this.divisions=100,this.step=0+100*Math.random(),this.norm=.1,this.norm2=3*Math.random()-3,this.diff=1+4*Math.random(),this.update=function(){let t=2*Math.PI*this.step/(this.divisions*this.norm2),i=2*Math.PI*this.step/(this.divisions*this.norm);this.dx=Math.sin(t)*this.diff+Math.cos(t)*Math.cos(i)*Math.random()*2,this.dy=Math.cos(t)*this.diff+Math.sin(t)*Math.sin(i)*Math.random()*2,this.step=(this.step+1)%this.stepRange}}var s=n(19);let o=document.createElement("canvas");o.height=window.innerHeight,console.log(document.innerHeight),console.log(document.innerWidth),o.width=window.innerWidth;let d=o.getContext("2d");var h=n(22);document.body.appendChild(o),window.ctx=d;var a=new s.a,r={SIZE:4,NUMBER:200};a.add(r,"SIZE",2,20);const c="Worms",u=!1,l=null;var f=function(){this.x=0,this.y=0,this.colour=h.a.velvet,this.dots=[];for(var t=0;t<=r.NUMBER;t++)this.dots.push([new e,Math.random()*window.innerWidth,Math.random()*window.innerHeight])};f.prototype.draw=function(){d.fillStyle=this.colour;for(var t=0;t<=r.NUMBER;t++)23==t&&console.log(this.dots[t][0].step),d.fillRect(this.dots[t][1],this.dots[t][2],r.SIZE,r.SIZE)},f.prototype.update=function(){for(var t=0;t<=r.NUMBER;t++)this.dots[t][0].update(),this.dots[t][1]+=this.dots[t][0].dx,this.dots[t][2]+=this.dots[t][0].dy};let w=new f;function p(){w.update(),d.rect(0,0,o.width,o.height),d.fillStyle="rgba(27, 35, 74,0.1)",d.fill(),w.draw(),window.requestAnimationFrame(p)}window.requestAnimationFrame(p)}}]);