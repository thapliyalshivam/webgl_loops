(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{14:function(e,n,t){"use strict";n.a="samosavaio"},8:function(e,n,t){"use strict";t.r(n),t.d(n,"canvas",(function(){return u})),t.d(n,"Render",(function(){return g})),t.d(n,"heading",(function(){return p})),t.d(n,"renderer",(function(){return d})),t.d(n,"isVR",(function(){return f}));var o=t(11),a=(t(12),t(13)),s=t(14),r=function(e,n={}){function t(){a.style.display="",a.style.cursor="auto",a.style.left="calc(50% - 75px)",a.style.width="150px",a.onmouseenter=null,a.onmouseleave=null,a.onclick=null,a.textContent="AR NOT SUPPORTED"}function o(e){e.style.position="absolute",e.style.bottom="20px",e.style.padding="12px 6px",e.style.border="1px solid #fff",e.style.borderRadius="4px",e.style.background="rgba(0,0,0,0.1)",e.style.color="#fff",e.style.font="normal 13px sans-serif",e.style.textAlign="center",e.style.opacity="0.5",e.style.outline="none",e.style.zIndex="999"}if("xr"in navigator){var a=document.createElement("button");return a.style.display="none",o(a),navigator.xr.isSessionSupported("immersive-ar").then((function(o){o?function(){var t=null;function o(n){n.addEventListener("end",s),e.xr.setReferenceSpaceType("local"),e.xr.setSession(n),a.textContent="STOP AR",t=n}function s(){t.removeEventListener("end",s),a.textContent="START AR",t=null}a.style.display="",a.style.cursor="pointer",a.style.left="calc(50% - 50px)",a.style.width="100px",a.textContent="START AR",a.onmouseenter=function(){a.style.opacity="1.0"},a.onmouseleave=function(){a.style.opacity="0.5"},a.onclick=function(){null===t?navigator.xr.requestSession("immersive-ar",n).then(o):t.end()}}():t()})).catch(t),a}var s=document.createElement("a");return!1===window.isSecureContext?(s.href=document.location.href.replace(/^http:/,"https:"),s.innerHTML="WEBXR NEEDS HTTPS"):(s.href="https://immersiveweb.dev/",s.innerHTML="WEBXR NOT AVAILABLE"),s.style.left="calc(50% - 90px)",s.style.width="180px",s.style.textDecoration="none",o(s),s},i=new dat.GUI;console.log(o.v);var l=new o.y,c=new o.s(15,window.innerWidth/window.innerHeight,.1,2e3);c.position.z=12,i.add(c.position,"z");var d=new o.F;console.log(d),d.setSize(window.innerWidth,window.innerHeight),d.setClearColor(new o.c(7799039),1);const u=d.domElement;document.body.appendChild(d.domElement),console.log(s.a);const p=s.a,f=!1;r(d);l.add(new o.a(15658734));var w=new o.e(16777215,3);(w=new o.e(16777215,.5)).position.set(-2,2,2),w.castShadow=!0,w.shadow.camera.near=-1,w.shadow.camera.far=10,l.add(w);var h=new o.e(16777215,.5);h.position.set(1,2,1),h.castShadow=!0,h.shadow.camera.near=-4,h.shadow.camera.far=10,l.add(h),l.add(new o.j(4469555,2236979,4));new o.i;var m,y=new o.q({map:(new o.C).load("./././images/cab.png"),metalness:.61,roughness:.5});i.add(y,"metalness",0,1),i.add(y,"roughness",0,1),console.log(y),(new a.a).load("./././models/cove.glb",(function(e){e.scene.traverse((function(e){e.isMesh&&(m=e,e.material=y)})),function(){for(let e=0;e<23;++e){let e=m.clone();v.push(e),l.add(e)}}()}));var v=[];var x=performance.now();Math.PI;function g(){const e=1e-4*(performance.now()-x)%41,n=.001*(performance.now()-x)%41;v.forEach((t,o)=>{var a;t.position.set(1*Math.cos(2*o*Math.PI/23),1*Math.sin(2*o*Math.PI/23),0),t.rotation.set(e*Math.PI*2+1.7*o,e*Math.PI*2+1.7*o,0),t.scale.setScalar(.7+(a=(Math.sin(n+6*Math.PI/23*100*o/41)+1)/2,((a*=2)<1?.5*a*a*a*a*a:.5*((a-=2)*a*a*a*a+2))/2))}),d.render(l,c)}d.setAnimationLoop(g)}}]);