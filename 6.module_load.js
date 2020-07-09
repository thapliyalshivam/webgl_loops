(window.webpackJsonp=window.webpackJsonp||[]).push([[6],[,,,,function(t,e,r){"use strict";r.r(e),r.d(e,"canvas",(function(){return c})),r.d(e,"Render",(function(){return w})),r.d(e,"heading",(function(){return f})),r.d(e,"renderer",(function(){return d})),r.d(e,"isVR",(function(){return m}));var i=r(20),s=r(17),a=r(18),o=(r(19),r(14),r(16),r(15),r(24)),n=r(25),l=new s.a;l.add({xx:3},"xx");var h=new i.w,u=new i.r(15,window.innerWidth/window.innerHeight,.1,2e3);u.position.z=12;var d=new i.B;d.setSize(window.innerWidth,window.innerHeight),d.setClearColor(new i.c(2021559),1);const c=d.domElement;document.body.appendChild(d.domElement);const f="Flower Power",m=!0;h.add(new i.a(15658734));var p=new i.e(16777215,3);(p=new i.e(16777215,.5)).position.set(-2,2,2),p.castShadow=!0,p.shadow.camera.near=-1,p.shadow.camera.far=10,h.add(p);var v=new i.e(16777215,.5);v.position.set(1,2,1),v.castShadow=!0,v.shadow.camera.near=-4,v.shadow.camera.far=10,h.add(v);new i.h;var g,b=new i.p({map:(new i.z).load(o.a),metalness:.39,roughness:.38});l.add(b,"metalness",0,1),l.add(b,"roughness",0,1),(new a.a).load(n.a,(function(t){let e=0;t.traverse((function(t){t.isMesh&&(t.material=b,console.log(++e))})),g=t,function(){for(let t=0;t<13;++t){let t=g.clone();x.push(t),h.add(t)}}()}));var x=[];var T=performance.now();Math.PI;function w(){const t=1e-4*(performance.now()-T)%41,e=.001*(performance.now()-T)%41;x.forEach((r,i)=>{var s;r.position.set(1*Math.cos(2*i*Math.PI/13),1*Math.sin(2*i*Math.PI/13),0),r.rotation.set(t*Math.PI*2+1.7*i,t*Math.PI*2+1.7*i,0),r.scale.setScalar(.7+(s=(Math.sin(e+6*Math.PI/13*100*i/41)+1)/2,((s*=2)<1?.5*s*s*s*s*s:.5*((s-=2)*s*s*s*s+2))/2))}),d.render(h,u)}d.setAnimationLoop(w)},,,,,,,,function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var i,s,a,o=r(11);function n(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}Object.assign(n.prototype,{setSize:function(){},render:function(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}}),n.FullScreenQuad=(i=new o.U(-1,1,1,-1,0,1),s=new o.W(2,2),a=function(t){this._mesh=new o.J(s,t)},Object.defineProperty(a.prototype,"material",{get:function(){return this._mesh.material},set:function(t){this._mesh.material=t}}),Object.assign(a.prototype,{dispose:function(){this._mesh.geometry.dispose()},render:function(t){t.render(this._mesh,i)}}),a)},function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var i={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:["varying vec2 vUv;","void main() {","\tvUv = uv;","\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","}"].join("\n"),fragmentShader:["uniform float opacity;","uniform sampler2D tDiffuse;","varying vec2 vUv;","void main() {","\tvec4 texel = texture2D( tDiffuse, vUv );","\tgl_FragColor = opacity * texel;","}"].join("\n")}},function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));var i=r(12),s=function(t,e,r,s,a){i.a.call(this),this.scene=t,this.camera=e,this.overrideMaterial=r,this.clearColor=s,this.clearAlpha=void 0!==a?a:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1};s.prototype=Object.assign(Object.create(i.a.prototype),{constructor:s,render:function(t,e,r){var i,s,a,o=t.autoClear;t.autoClear=!1,void 0!==this.overrideMaterial&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(i=t.getClearColor().getHex(),s=t.getClearAlpha(),t.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:r),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor&&t.setClearColor(i,s),void 0!==this.overrideMaterial&&(this.scene.overrideMaterial=a),t.autoClear=o}})},function(t,e,r){"use strict";r.d(e,"a",(function(){return h}));var i=r(11),s=r(13),a=r(12),o=function(t,e){a.a.call(this),this.textureID=void 0!==e?e:"tDiffuse",t instanceof i.gb?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=i.pb.clone(t.uniforms),this.material=new i.gb({defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new a.a.FullScreenQuad(this.material)};o.prototype=Object.assign(Object.create(a.a.prototype),{constructor:o,render:function(t,e,r){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=r.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}});var n=function(t,e){a.a.call(this),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1};n.prototype=Object.assign(Object.create(a.a.prototype),{constructor:n,render:function(t,e,r){var i,s,a=t.getContext(),o=t.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0),this.inverse?(i=0,s=1):(i=1,s=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(a.REPLACE,a.REPLACE,a.REPLACE),o.buffers.stencil.setFunc(a.ALWAYS,i,4294967295),o.buffers.stencil.setClear(s),o.buffers.stencil.setLocked(!0),t.setRenderTarget(r),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(a.EQUAL,1,4294967295),o.buffers.stencil.setOp(a.KEEP,a.KEEP,a.KEEP),o.buffers.stencil.setLocked(!0)}});var l=function(){a.a.call(this),this.needsSwap=!1};l.prototype=Object.create(a.a.prototype),Object.assign(l.prototype,{render:function(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}});var h=function(t,e){if(this.renderer=t,void 0===e){var r={minFilter:i.B,magFilter:i.B,format:i.cb,stencilBuffer:!1},a=t.getSize(new i.qb);this._pixelRatio=t.getPixelRatio(),this._width=a.width,this._height=a.height,(e=new i.tb(this._width*this._pixelRatio,this._height*this._pixelRatio,r)).texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],void 0===s.a&&console.error("THREE.EffectComposer relies on CopyShader"),void 0===o&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new o(s.a),this.clock=new i.i};Object.assign(h.prototype,{swapBuffers:function(){var t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t},addPass:function(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)},insertPass:function(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)},isLastEnabledPass:function(t){for(var e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0},render:function(t){void 0===t&&(t=this.clock.getDelta());var e,r,i=this.renderer.getRenderTarget(),s=!1,a=this.passes.length;for(r=0;r<a;r++)if(!1!==(e=this.passes[r]).enabled){if(e.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),e.render(this.renderer,this.writeBuffer,this.readBuffer,t,s),e.needsSwap){if(s){var o=this.renderer.getContext(),h=this.renderer.state.buffers.stencil;h.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),h.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}void 0!==n&&(e instanceof n?s=!0:e instanceof l&&(s=!1))}this.renderer.setRenderTarget(i)},reset:function(t){if(void 0===t){var e=this.renderer.getSize(new i.qb);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,(t=this.renderTarget1.clone()).setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2},setSize:function(t,e){this._width=t,this._height=e;var r=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(r,i),this.renderTarget2.setSize(r,i);for(var s=0;s<this.passes.length;s++)this.passes[s].setSize(r,i)},setPixelRatio:function(t){this._pixelRatio=t,this.setSize(this._width,this._height)}});var u,d,c,f=function(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1};Object.assign(f.prototype,{setSize:function(){},render:function(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}}),f.FullScreenQuad=(u=new i.U(-1,1,1,-1,0,1),d=new i.W(2,2),c=function(t){this._mesh=new i.J(d,t)},Object.defineProperty(c.prototype,"material",{get:function(){return this._mesh.material},set:function(t){this._mesh.material=t}}),Object.assign(c.prototype,{dispose:function(){this._mesh.geometry.dispose()},render:function(t){t.render(this._mesh,u)}}),c)},function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var i=r(11),s=r(12),a=r(13),o={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new i.j(0)},defaultOpacity:{value:0}},vertexShader:["varying vec2 vUv;","void main() {","\tvUv = uv;","\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","}"].join("\n"),fragmentShader:["uniform sampler2D tDiffuse;","uniform vec3 defaultColor;","uniform float defaultOpacity;","uniform float luminosityThreshold;","uniform float smoothWidth;","varying vec2 vUv;","void main() {","\tvec4 texel = texture2D( tDiffuse, vUv );","\tvec3 luma = vec3( 0.299, 0.587, 0.114 );","\tfloat v = dot( texel.xyz, luma );","\tvec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );","\tfloat alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );","\tgl_FragColor = mix( outputColor, texel, alpha );","}"].join("\n")},n=function(t,e,r,n){s.a.call(this),this.strength=void 0!==e?e:1,this.radius=r,this.threshold=n,this.resolution=void 0!==t?new i.qb(t.x,t.y):new i.qb(256,256),this.clearColor=new i.j(0,0,0);var l={minFilter:i.B,magFilter:i.B,format:i.cb};this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;var h=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);this.renderTargetBright=new i.tb(h,u,l),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(var d=0;d<this.nMips;d++){var c=new i.tb(h,u,l);c.texture.name="UnrealBloomPass.h"+d,c.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(c);var f=new i.tb(h,u,l);f.texture.name="UnrealBloomPass.v"+d,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),h=Math.round(h/2),u=Math.round(u/2)}void 0===o&&console.error("UnrealBloomPass relies on LuminosityHighPassShader");var m=o;this.highPassUniforms=i.pb.clone(m.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new i.gb({uniforms:this.highPassUniforms,vertexShader:m.vertexShader,fragmentShader:m.fragmentShader,defines:{}}),this.separableBlurMaterials=[];var p=[3,5,7,9,11];for(h=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2),d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(p[d])),this.separableBlurMaterials[d].uniforms.texSize.value=new i.qb(h,u),h=Math.round(h/2),u=Math.round(u/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;this.compositeMaterial.uniforms.bloomFactors.value=[1,.8,.6,.4,.2],this.bloomTintColors=[new i.rb(1,1,1),new i.rb(1,1,1),new i.rb(1,1,1),new i.rb(1,1,1),new i.rb(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,void 0===a.a&&console.error("UnrealBloomPass relies on CopyShader");var v=a.a;this.copyUniforms=i.pb.clone(v.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new i.gb({uniforms:this.copyUniforms,vertexShader:v.vertexShader,fragmentShader:v.fragmentShader,blending:i.a,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this.oldClearColor=new i.j,this.oldClearAlpha=1,this.basic=new i.K,this.fsQuad=new s.a.FullScreenQuad(null)};n.prototype=Object.assign(Object.create(s.a.prototype),{constructor:n,dispose:function(){for(var t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose()},setSize:function(t,e){var r=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(r,s);for(var a=0;a<this.nMips;a++)this.renderTargetsHorizontal[a].setSize(r,s),this.renderTargetsVertical[a].setSize(r,s),this.separableBlurMaterials[a].uniforms.texSize.value=new i.qb(r,s),r=Math.round(r/2),s=Math.round(s/2)},render:function(t,e,r,i,s){this.oldClearColor.copy(t.getClearColor()),this.oldClearAlpha=t.getClearAlpha();var a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=r.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);for(var o=this.renderTargetBright,l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(r),this.fsQuad.render(t)),t.setClearColor(this.oldClearColor,this.oldClearAlpha),t.autoClear=a},getSeperableBlurMaterial:function(t){return new i.gb({defines:{KERNEL_RADIUS:t,SIGMA:t},uniforms:{colorTexture:{value:null},texSize:{value:new i.qb(.5,.5)},direction:{value:new i.qb(.5,.5)}},vertexShader:"varying vec2 vUv;\n\t\t\t\tvoid main() {\n\t\t\t\t\tvUv = uv;\n\t\t\t\t\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\t\t\t\t}",fragmentShader:"#include <common>\t\t\t\tvarying vec2 vUv;\n\t\t\t\tuniform sampler2D colorTexture;\n\t\t\t\tuniform vec2 texSize;\t\t\t\tuniform vec2 direction;\t\t\t\t\t\t\t\tfloat gaussianPdf(in float x, in float sigma) {\t\t\t\t\treturn 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;\t\t\t\t}\t\t\t\tvoid main() {\n\t\t\t\t\tvec2 invSize = 1.0 / texSize;\t\t\t\t\tfloat fSigma = float(SIGMA);\t\t\t\t\tfloat weightSum = gaussianPdf(0.0, fSigma);\t\t\t\t\tvec3 diffuseSum = texture2D( colorTexture, vUv).rgb * weightSum;\t\t\t\t\tfor( int i = 1; i < KERNEL_RADIUS; i ++ ) {\t\t\t\t\t\tfloat x = float(i);\t\t\t\t\t\tfloat w = gaussianPdf(x, fSigma);\t\t\t\t\t\tvec2 uvOffset = direction * invSize * x;\t\t\t\t\t\tvec3 sample1 = texture2D( colorTexture, vUv + uvOffset).rgb;\t\t\t\t\t\tvec3 sample2 = texture2D( colorTexture, vUv - uvOffset).rgb;\t\t\t\t\t\tdiffuseSum += (sample1 + sample2) * w;\t\t\t\t\t\tweightSum += 2.0 * w;\t\t\t\t\t}\t\t\t\t\tgl_FragColor = vec4(diffuseSum/weightSum, 1.0);\n\t\t\t\t}"})},getCompositeMaterial:function(t){return new i.gb({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},dirtTexture:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:"varying vec2 vUv;\n\t\t\t\tvoid main() {\n\t\t\t\t\tvUv = uv;\n\t\t\t\t\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\t\t\t\t}",fragmentShader:"varying vec2 vUv;\t\t\t\tuniform sampler2D blurTexture1;\t\t\t\tuniform sampler2D blurTexture2;\t\t\t\tuniform sampler2D blurTexture3;\t\t\t\tuniform sampler2D blurTexture4;\t\t\t\tuniform sampler2D blurTexture5;\t\t\t\tuniform sampler2D dirtTexture;\t\t\t\tuniform float bloomStrength;\t\t\t\tuniform float bloomRadius;\t\t\t\tuniform float bloomFactors[NUM_MIPS];\t\t\t\tuniform vec3 bloomTintColors[NUM_MIPS];\t\t\t\t\t\t\t\tfloat lerpBloomFactor(const in float factor) { \t\t\t\t\tfloat mirrorFactor = 1.2 - factor;\t\t\t\t\treturn mix(factor, mirrorFactor, bloomRadius);\t\t\t\t}\t\t\t\t\t\t\t\tvoid main() {\t\t\t\t\tgl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) + \t\t\t\t\t\t\t\t\t\t\t\t\t lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) + \t\t\t\t\t\t\t\t\t\t\t\t\t lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) + \t\t\t\t\t\t\t\t\t\t\t\t\t lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) + \t\t\t\t\t\t\t\t\t\t\t\t\t lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );\t\t\t\t}"})}}),n.BlurDirectionX=new i.qb(1,0),n.BlurDirectionY=new i.qb(0,1)},,,,,,,,function(t,e,r){"use strict";e.a=r.p+"2d4e2196775f2eb23bac71096c5fffcd.png"},function(t,e,r){"use strict";e.a=r.p+"ee0ff68fb6e22850d3693c563449eaca.obj"}]]);