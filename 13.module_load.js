(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{2:function(n,o,e){"use strict";e.r(o),e.d(o,"canvas",(function(){return d})),e.d(o,"Render",(function(){return u}));var i=e(20),t=new i.w,a=new i.r(75,window.innerWidth/window.innerHeight,.1,1e3);a.position.z=100;var w=new i.B;w.setSize(window.innerWidth,window.innerHeight);const d=w.domElement;document.body.appendChild(w.domElement);var r=new i.q,s=new i.j(20,2);console.log("geometry"),console.log(s);var c=new i.n({wireframe:!0});console.log("material"),console.log(c);var l=new i.k(s,c);console.log("mesh"),console.log(l),r.add(l);s=new i.b(11,11,11),c=new i.m({color:16777215,overdraw:0});var h=new i.k(s,c);r.cube=h,r.add(h),t.add(r),r.receiveShadow=!0,t.add(new i.a(32));var p=new i.t(16711744,1,90);p.add(new i.k(new i.x(.5,16,8),new i.l({color:16711744}))),t.add(p);var v=new i.t(16639,1,90);t.add(v);var m=new i.t(8454016,1,90);t.add(m);s=new i.s(window.innerWidth,window.innerHeight,90,90),c=new i.m({color:16777215,overdraw:.5});var g=new i.k(s,c);function u(){var n=5e-4*Date.now();p.position.x=30*Math.sin(.7*n),p.position.y=40*Math.cos(.5*n),p.position.z=30*Math.cos(.3*n),v.position.x=30*Math.cos(.3*n),v.position.y=40*Math.sin(.5*n),v.position.z=30*Math.sin(.7*n),m.position.x=30*Math.sin(.7*n),m.position.y=40*Math.cos(.3*n),m.position.z=30*Math.sin(.5*n);var o=.9*Math.sin(.004444*Date.now())+2;r.rotation.y+=.01,r.rotation.x+=.01,r.scale.set(o,o,o),w.render(t,a)}t.add(g),g.position.y=0,r.rotation.x=100,r.dynamic=!0,w.setAnimationLoop(u)}}]);