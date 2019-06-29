async function loadModule() {

async function getscript(){
    const num = window.location.hash.substr(1) || 1;
    const module = await
    import (`./js/loops/main_${num}.js`);
    document.body.appendChild(module.canvas);
    return module;
}

document.body.style.margin="0px";
let module = await getscript();
let head, animationLoop, vbutton;

  if (module.heading!=undefined)
  {
      head  = document.createElement("h4");
    head.innerHTML = module.heading;
    head.style.position="absolute";
    head.style.position= "absolute";
    head.style.top= "0";
    head.style["font-weight"]="500";
    head.style.color= "white";
    head.style.background= "#272bca";
    head.style.padding= "8px 55px";
    head.style["border-radius"] = "6px";
    head.style["font-family"]= "arial";
    document.body.appendChild(head);
  }

  function update() {
    // console.log(module);
    if(module.isVR!=undefined&&module.isVR){
      vbutton = WEBVR.createButton( module.renderer )
      document.body.appendChild(  vbutton );
      module.renderer.setAnimationLoop(module.Render);}
    else{
      animationLoop = requestAnimationFrame(update);
      module.Render();
        }
  }

  update();

async function refresh(){
  if (module && module.canvas)
 {
   if(module.isVR!=undefined&&module.isVR){
     document.body.removeChild(  vbutton );
   }else{
     window.cancelAnimationFrame(animationLoop)
   }
   document.body.removeChild(module.canvas);
(module.heading!=undefined&&head!=undefined)&&document.body.removeChild(head);


  module = await getscript();
  if (module.heading!=undefined)
  {
      head  = document.createElement("h4");
    head.innerHTML = module.heading;
    head.style.position="absolute";
    head.style.position= "absolute";
    head.style.top= "0";
    head.style["font-weight"]="500";
    head.style.color= "white";
    head.style.background= "#272bca";
    head.style.padding= "8px 55px";
    head.style["border-radius"] = "6px";
    head.style["font-family"]= "arial";
    document.body.appendChild(head);
  }
  update();
 }

}

module.canvas.addEventListener("click",e=>{
window.location.reload();
});
 window.addEventListener("hashchange",e=>{refresh();});
}

  //
  // if (module.isVR!=undefined&& isVR==true)
  // {
  //   let script  = document.createElement("script");
  //   script.src = "js/lib/WebVR.js";
  //
  //       document.body.appendChild(script);
  // }



//
// async function init() {
//   let module = await loadModule();
//
//   async function reload() {
//     if (module && module.canvas) {
//       try {
//         document.body.removeChild(module.canvas);
//       } catch (e) {
//
//       }
//     }
//     module = await loadModule();
//   }
//
//   window.addEventListener('hashchange', async e => {
//     reload();
//   })
// }

window.addEventListener('load', loadModule);
