(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{9:function(e,n,t){"use strict";t.r(n),t.d(n,"canvas",(function(){return o})),t.d(n,"pp",(function(){return w})),t.d(n,"renderer",(function(){return l})),t.d(n,"isVR",(function(){return y}));var i,o,r,d,l,a,s=t(11),c=(t(12),t(13),function(e,n={}){function t(){o.style.display="",o.style.cursor="auto",o.style.left="calc(50% - 75px)",o.style.width="150px",o.onmouseenter=null,o.onmouseleave=null,o.onclick=null,o.textContent="AR NOT SUPPORTED"}function i(e){e.style.position="absolute",e.style.bottom="20px",e.style.padding="12px 6px",e.style.border="1px solid #fff",e.style.borderRadius="4px",e.style.background="rgba(0,0,0,0.1)",e.style.color="#fff",e.style.font="normal 13px sans-serif",e.style.textAlign="center",e.style.opacity="0.5",e.style.outline="none",e.style.zIndex="999"}if("xr"in navigator){var o=document.createElement("button");return o.style.display="none",i(o),navigator.xr.isSessionSupported("immersive-ar").then((function(i){i?function(){var t=null;function i(n){n.addEventListener("end",r),e.xr.setReferenceSpaceType("local"),e.xr.setSession(n),o.textContent="STOP AR",t=n}function r(){t.removeEventListener("end",r),o.textContent="START AR",t=null}o.style.display="",o.style.cursor="pointer",o.style.left="calc(50% - 50px)",o.style.width="100px",o.textContent="START AR",o.onmouseenter=function(){o.style.opacity="1.0"},o.onmouseleave=function(){o.style.opacity="0.5"},o.onclick=function(){null===t?navigator.xr.requestSession("immersive-ar",n).then(i):t.end()}}():t()})).catch(t),o}var r=document.createElement("a");return!1===window.isSecureContext?(r.href=document.location.href.replace(/^http:/,"https:"),r.innerHTML="WEBXR NEEDS HTTPS"):(r.href="https://immersiveweb.dev/",r.innerHTML="WEBXR NOT AVAILABLE"),r.style.left="calc(50% - 90px)",r.style.width="180px",r.style.textDecoration="none",i(r),r});function u(){r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),l.setSize(window.innerWidth,window.innerHeight)}function p(){l.render(d,r)}i=document.createElement("div"),document.body.appendChild(i),function(){i=document.createElement("div"),document.body.appendChild(i),d=new s.y,r=new s.s(70,window.innerWidth/window.innerHeight,.01,20);var e=new s.j(16777215,12303359,1);e.position.set(.5,1,.25),d.add(e),(l=new s.F({antialias:!0,alpha:!0})).setPixelRatio(window.devicePixelRatio),l.setSize(window.innerWidth,window.innerHeight),l.xr.enabled=!0,o=l.domElement,i.appendChild(l.domElement),document.body.appendChild(c(l));var n=new s.d(0,.05,.2,32).rotateX(Math.PI/2);(a=l.xr.getController(0)).addEventListener("select",(function(){var e=new s.p({color:16777215*Math.random()}),t=new s.l(n,e);t.position.set(0,0,-.3).applyMatrix4(a.matrixWorld),t.quaternion.setFromRotationMatrix(a.matrixWorld),d.add(t)})),d.add(a),window.addEventListener("resize",u,!1)}(),l.setAnimationLoop(p);let w="asda",y=!1}}]);