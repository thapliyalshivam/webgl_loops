(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{20:function(e,n,t){"use strict";n.a=t.p+"cb436fd22757e3ece36118598c6c706b.png"},21:function(e,n,t){"use strict";n.a="samosavaio"},5:function(e,n,t){"use strict";t.r(n),t.d(n,"canvas",(function(){return w})),t.d(n,"Render",(function(){return E})),t.d(n,"heading",(function(){return h})),t.d(n,"renderer",(function(){return p})),t.d(n,"isVR",(function(){return m}));var o=t(14),a=(t(18),t(19)),s=t(17),r=t(20),i=t.p+"4c96fae42fd07b92aa03bee8b45851f6.glb",c=t(21),l=function(e,n={}){function t(){a.style.display="",a.style.cursor="auto",a.style.left="calc(50% - 75px)",a.style.width="150px",a.onmouseenter=null,a.onmouseleave=null,a.onclick=null,a.textContent="AR NOT SUPPORTED"}function o(e){e.style.position="absolute",e.style.bottom="20px",e.style.padding="12px 6px",e.style.border="1px solid #fff",e.style.borderRadius="4px",e.style.background="rgba(0,0,0,0.1)",e.style.color="#fff",e.style.font="normal 13px sans-serif",e.style.textAlign="center",e.style.opacity="0.5",e.style.outline="none",e.style.zIndex="999"}if("xr"in navigator){var a=document.createElement("button");return a.style.display="none",o(a),navigator.xr.isSessionSupported("immersive-ar").then((function(o){o?function(){var t=null;function o(n){n.addEventListener("end",s),e.xr.setReferenceSpaceType("local"),e.xr.setSession(n),a.textContent="STOP AR",t=n}function s(){t.removeEventListener("end",s),a.textContent="START AR",t=null}a.style.display="",a.style.cursor="pointer",a.style.left="calc(50% - 50px)",a.style.width="100px",a.textContent="START AR",a.onmouseenter=function(){a.style.opacity="1.0"},a.onmouseleave=function(){a.style.opacity="0.5"},a.onclick=function(){null===t?navigator.xr.requestSession("immersive-ar",n).then(o):t.end()}}():t()})).catch(t),a}var s=document.createElement("a");return!1===window.isSecureContext?(s.href=document.location.href.replace(/^http:/,"https:"),s.innerHTML="WEBXR NEEDS HTTPS"):(s.href="https://immersiveweb.dev/",s.innerHTML="WEBXR NOT AVAILABLE"),s.style.left="calc(50% - 90px)",s.style.width="180px",s.style.textDecoration="none",o(s),s},d=new s.a;console.log(o.u);var u=new o.w;u.fog=new o.g(255,0,300),d.add(u.fog,"near",0,100),d.add(u.fog,"far",0,100);var f=new o.r(15,window.innerWidth/window.innerHeight,.1,2e3);f.position.z=12,d.add(f.position,"z");var p=new o.B;console.log(p),p.setSize(window.innerWidth,window.innerHeight),p.setClearColor(new o.c(7799039),1);const w=p.domElement;document.body.appendChild(p.domElement),console.log(c.a);const h=c.a,m=!1;l(p);u.add(new o.a(15658734));var y=new o.e(16777215,3);(y=new o.e(16777215,.5)).position.set(-2,2,2),y.castShadow=!0,y.shadow.camera.near=-1,y.shadow.camera.far=10,u.add(y);var v=new o.e(16777215,.5);v.position.set(1,2,1),v.castShadow=!0,v.shadow.camera.near=-4,v.shadow.camera.far=10,u.add(v),u.add(new o.i(4469555,2236979,4));new o.h;var x,g=new o.p({map:(new o.z).load(r.a),metalness:.61,roughness:.5});d.add(g,"metalness",0,1),d.add(g,"roughness",0,1),console.log(g),(new a.a).load(i,(function(e){e.scene.traverse((function(e){e.isMesh&&(x=e,e.material=g)})),function(){for(let e=0;e<23;++e){let e=x.clone();b.push(e),u.add(e)}}()}));var b=[];var S=performance.now();Math.PI;function E(){const e=1e-4*(performance.now()-S)%41,n=.001*(performance.now()-S)%41;b.forEach((t,o)=>{var a;t.position.set(1*Math.cos(2*o*Math.PI/23),1*Math.sin(2*o*Math.PI/23),0),t.rotation.set(e*Math.PI*2+1.7*o,e*Math.PI*2+1.7*o,0),t.scale.setScalar(.7+(a=(Math.sin(n+6*Math.PI/23*100*o/41)+1)/2,((a*=2)<1?.5*a*a*a*a*a:.5*((a-=2)*a*a*a*a+2))/2))}),p.render(u,f)}p.setAnimationLoop(E)}}]);