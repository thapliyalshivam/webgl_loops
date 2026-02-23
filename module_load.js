async function loadModule() {

  async function getscript() {
    const num = window.location.hash.substr(1)||1;
    const module = await
      import(`./js/loops/main_${num}.js`);
    // document.body.appendChild(module.canvas);
    // writing chunk name asyn loader.
    return module;
  }

  document.body.style.margin = "0px";
  let module = await getscript();
  let head, animationLoop, vbutton;

  if (module.heading != undefined) {
    head = document.createElement("h4");
    head.innerHTML = module.heading;
    head.style.position = "absolute";
    head.style.bottom = "0px";
    head.style.right = "0px";
    head.style["font-weight"] = "500";
    head.style.color = "white";
    head.style.background = "#000000";
    head.style['font-size'] = "32px";
    head.style.padding = "16px 32px";
    head.style["border-radius"] = "0px";
    head.style["font-family"] = "sans-serif";
    document.body.appendChild(head);
  }


  let left = document.createElement("div");

  left.style.position = " absolute";
  left.style.top = " 50%";
  left.style.left= "20px";
  left.style.transform = "rotate(45deg)";
  left.style.height = " 40px";
  left.style["border-bottom"] = " 10px solid white";
  left.style["border-left"] = "10px solid white";
  left.style.width = " 40px";
  left.style.background = " #5f9ea000";
  document.body.appendChild(left);



  let right = document.createElement("div");

  right.style.position = " absolute";
  right.style.right = "20px";
  right.style.top = " 50%";
  right.style.transform = "rotate(-135deg)";
  right.style.height = " 40px";
  right.style["border-bottom"] = " 10px solid white";
  right.style["border-left"] = "10px solid white";
  right.style.width = " 40px";
  right.style.background = " #5f9ea000";
  document.body.appendChild(right);


  function update() {
    // document.body.appendChild(  module.arbs );
    // animationLoop = requestAnimationFrame(update);
    // module.Render();

  }
  // function update() {
  //   // console.log(module);
  //   if(module.isVR!=undefined&&module.isVR){
  //     vbutton = WEBVR.createButton( module.renderer )
  //     document.body.appendChild(  vbutton );
  //     module.renderer.setAnimationLoop(module.Render);}
  //   else{
  //     document.body.appendChild(  module.arbs );
  //     animationLoop = requestAnimationFrame(update);
  //     module.Render();
  //       }
  // }

  // update();

  async function refresh() {
    
    if (module && module.canvas) {
      if (module.isVR != undefined && module.isVR) {
        document.body.removeChild(vbutton);
      } else {
        window.cancelAnimationFrame(animationLoop)
      }
      document.body.removeChild(module.canvas);
      (module.heading != undefined && head != undefined) && document.body.removeChild(head);


      module = await getscript();
      if (module.heading != undefined) {
        head = document.createElement("h4");
        head.innerHTML = module.heading;
        head.style.position = "absolute";
        head.style.bottom = "0px";
        head.style.right = "0px";
        head.style["font-weight"] = "500";
        head.style.color = "white";
        head.style.background = "#000000";
        head.style['font-size'] = "32px";
        head.style.padding = "16px 32px";
        head.style["border-radius"] = "0px";
        head.style["font-family"] = "sans-serif";
        // document.body.appendChild(head);
      }
      update();
    }

  }

  module.canvas.addEventListener("click", e => {
    window.location.reload();
  });
  window.addEventListener("hashchange", e => {

    refresh();

  });
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
