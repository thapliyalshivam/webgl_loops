!function(e){function t(t){for(var n,r,i=t[0],l=t[1],s=0,d=[];s<i.length;s++)r=i[s],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);for(a&&a(t);d.length;)d.shift()()}var n={},o={3:0};function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=i);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.src=function(e){return r.p+""+e+".module_load.js"}(e);var a=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;a.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",a.name="ChunkLoadError",a.type=r,a.request=i,n[1](a)}o[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},r.m=e,r.c=n,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r.oe=function(e){throw console.error(e),e};var i=window.webpackJsonp=window.webpackJsonp||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var a=l;r(r.s=0)}([function(e,t,n){window.addEventListener("load",(async function(){async function e(){const e=window.location.hash.substr(1)||1;return await n(1)(`./main_${e}.js`)}document.body.style.margin="0px";let t,o=await e();null!=o.heading&&(t=document.createElement("h4"),t.innerHTML=o.heading,t.style.position="absolute",t.style.bottom="0px",t.style.right="0px",t.style["font-weight"]="500",t.style.color="white",t.style.background="#000000",t.style["font-size"]="32px",t.style.padding="16px 32px",t.style["border-radius"]="0px",t.style["font-family"]="sans-serif",document.body.appendChild(t));let r=document.createElement("div");r.style.position=" absolute",r.style.top=" 50%",r.style.left="20px",r.style.transform="rotate(45deg)",r.style.height=" 40px",r.style["border-bottom"]=" 10px solid white",r.style["border-left"]="10px solid white",r.style.width=" 40px",r.style.background=" #5f9ea000",document.body.appendChild(r);let i=document.createElement("div");i.style.position=" absolute",i.style.right="20px",i.style.top=" 50%",i.style.transform="rotate(-135deg)",i.style.height=" 40px",i.style["border-bottom"]=" 10px solid white",i.style["border-left"]="10px solid white",i.style.width=" 40px",i.style.background=" #5f9ea000",document.body.appendChild(i),o.canvas.addEventListener("click",e=>{window.location.reload()}),window.addEventListener("hashchange",n=>{!async function(){o&&o.canvas&&(null!=o.isVR&&o.isVR?document.body.removeChild(void 0):window.cancelAnimationFrame(void 0),document.body.removeChild(o.canvas),null!=o.heading&&null!=t&&document.body.removeChild(t),o=await e(),null!=o.heading&&(t=document.createElement("h4"),t.innerHTML=o.heading,t.style.position="absolute",t.style.bottom="0px",t.style.right="0px",t.style["font-weight"]="500",t.style.color="white",t.style.background="#000000",t.style["font-size"]="32px",t.style.padding="16px 32px",t.style["border-radius"]="0px",t.style["font-family"]="sans-serif"))}()})}))},function(e,t,n){var o={"./main_1.js":[2,1,13],"./main_2.js":[3,0,1,2,7],"./main_3.js":[8,0,1,2,5],"./main_4.js":[4,0,1,2,6],"./main_5.js":[5,0,1,2,10],"./main_6.js":[6,2,11],"./main_7.js":[9,0,1,2,8,9],"./main_8.js":[7,0,2,4],"./main_99.js":[10,0,1,12]};function r(e){if(!n.o(o,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=o[e],r=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(r)}))}r.keys=function(){return Object.keys(o)},r.id=1,e.exports=r}]);