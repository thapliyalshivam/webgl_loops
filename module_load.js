async function loadModule() {
  const num = window.location.hash.substr(1) || 1;
  const module = await
  import (`./js/loops/main_${num}.js`);
  document.body.appendChild(module.canvas);
  document.body.style.margin="0px";
  if (module.heading!=undefined)
  {
    let head  = document.createElement("h4");
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
      requestAnimationFrame(update);
      module.Render();
    }

    update();


}
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
