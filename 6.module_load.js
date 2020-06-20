(window.webpackJsonp=window.webpackJsonp||[]).push([[6],[,,,function(t,e,r){"use strict";r.r(e),r.d(e,"canvas",(function(){return c})),r.d(e,"Render",(function(){return C}));var i=r(14),s=r(17),o=(r(18),r(19),r(13)),a=r(16),n=r(15),l=new i.w,h=new s.a,u=new i.r(75,window.innerWidth/window.innerHeight,.1,2e3);u.position.z=1e3;var d=new i.B;d.toneMapping=i.v,d.setSize(window.innerWidth,window.innerHeight),d.setClearColor(new i.c(3918),1),d.gammaInput=!0,d.gammaOutput=!0;const c=d.domElement;document.body.append(c);var f={projection:"normal",background:!1,exposure:1.4,bloomStrength:2.1,bloomThreshold:0,bloomRadius:.72};d.toneMappingExposure=Math.pow(f.exposure,4);var m=new o.a(l,u),p=new a.a(new i.A(window.innerWidth,window.innerHeight),1.5,.4,.85);p.threshold=f.bloomThreshold,p.strength=f.bloomStrength,p.radius=f.bloomRadius,h.add(f,"exposure",.1,2).onChange((function(t){d.toneMappingExposure=Math.pow(t,4)})),h.add(f,"bloomThreshold",0,1).onChange((function(t){p.threshold=Number(t)})),h.add(f,"bloomStrength",0,3).onChange((function(t){p.strength=Number(t)})),h.add(f,"bloomRadius",0,1).step(.01).onChange((function(t){p.radius=Number(t)}));var v=new n.a(d);v.setSize(window.innerWidth,window.innerHeight),v.addPass(m),v.addPass(p),l.add(new i.a(4210752));var g=new i.y(16777215,1);g.position.set(50,100,50),g.angle=Math.PI/7,g.penumbra=.8,g.castShadow=!0,l.add(g);var b=new i.h;var x=new i.x(15,32,32),T=new i.l({color:new i.c("white"),transparent:!0,opacity:1,side:i.f}),w=new i.k(x,T);w.position.set(0,0,0),w.receiveShadow=!0,w.castShadow=!0;const S=w.clone();b.add(S);const M=2*Math.PI/40;for(let t=0;t<=40;++t){const e=w.clone();e.position.set(500*Math.cos(M*t)/t,500*Math.sin(M*t)/t,0),b.add(e)}function C(){const t=Date.now()/1e3;b.children.forEach((e,r)=>{e.position.set(Math.cos(M*r)*(500*Math.sin(3*t+7*r*Math.PI/40)),Math.sin(M*r)*(500*Math.sin(3*t+7*r*Math.PI/40)),0)}),v.render()}l.add(b),d.setAnimationLoop(C)},,,,,,,,function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var i,s,o,a=r(10);function n(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}Object.assign(n.prototype,{setSize:function(){},render:function(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}}),n.FullScreenQuad=(i=new a.T(-1,1,1,-1,0,1),s=new a.V(2,2),o=function(t){this._mesh=new a.I(s,t)},Object.defineProperty(o.prototype,"material",{get:function(){return this._mesh.material},set:function(t){this._mesh.material=t}}),Object.assign(o.prototype,{dispose:function(){this._mesh.geometry.dispose()},render:function(t){t.render(this._mesh,i)}}),o)},function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var i={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:["varying vec2 vUv;","void main() {","\tvUv = uv;","\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","}"].join("\n"),fragmentShader:["uniform float opacity;","uniform sampler2D tDiffuse;","varying vec2 vUv;","void main() {","\tvec4 texel = texture2D( tDiffuse, vUv );","\tgl_FragColor = opacity * texel;","}"].join("\n")}},function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));var i=r(11),s=function(t,e,r,s,o){i.a.call(this),this.scene=t,this.camera=e,this.overrideMaterial=r,this.clearColor=s,this.clearAlpha=void 0!==o?o:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1};s.prototype=Object.assign(Object.create(i.a.prototype),{constructor:s,render:function(t,e,r){var i,s,o,a=t.autoClear;t.autoClear=!1,void 0!==this.overrideMaterial&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(i=t.getClearColor().getHex(),s=t.getClearAlpha(),t.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:r),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor&&t.setClearColor(i,s),void 0!==this.overrideMaterial&&(this.scene.overrideMaterial=o),t.autoClear=a}})},,function(t,e,r){"use strict";r.d(e,"a",(function(){return h}));var i=r(10),s=r(12),o=r(11),a=function(t,e){o.a.call(this),this.textureID=void 0!==e?e:"tDiffuse",t instanceof i.eb?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=i.nb.clone(t.uniforms),this.material=new i.eb({defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new o.a.FullScreenQuad(this.material)};a.prototype=Object.assign(Object.create(o.a.prototype),{constructor:a,render:function(t,e,r){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=r.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}});var n=function(t,e){o.a.call(this),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1};n.prototype=Object.assign(Object.create(o.a.prototype),{constructor:n,render:function(t,e,r){var i,s,o=t.getContext(),a=t.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0),this.inverse?(i=0,s=1):(i=1,s=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(o.REPLACE,o.REPLACE,o.REPLACE),a.buffers.stencil.setFunc(o.ALWAYS,i,4294967295),a.buffers.stencil.setClear(s),a.buffers.stencil.setLocked(!0),t.setRenderTarget(r),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(o.EQUAL,1,4294967295),a.buffers.stencil.setOp(o.KEEP,o.KEEP,o.KEEP),a.buffers.stencil.setLocked(!0)}});var l=function(){o.a.call(this),this.needsSwap=!1};l.prototype=Object.create(o.a.prototype),Object.assign(l.prototype,{render:function(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}});var h=function(t,e){if(this.renderer=t,void 0===e){var r={minFilter:i.A,magFilter:i.A,format:i.bb,stencilBuffer:!1},o=t.getSize(new i.ob);this._pixelRatio=t.getPixelRatio(),this._width=o.width,this._height=o.height,(e=new i.rb(this._width*this._pixelRatio,this._height*this._pixelRatio,r)).texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],void 0===s.a&&console.error("THREE.EffectComposer relies on CopyShader"),void 0===a&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new a(s.a),this.clock=new i.h};Object.assign(h.prototype,{swapBuffers:function(){var t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t},addPass:function(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)},insertPass:function(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)},isLastEnabledPass:function(t){for(var e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0},render:function(t){void 0===t&&(t=this.clock.getDelta());var e,r,i=this.renderer.getRenderTarget(),s=!1,o=this.passes.length;for(r=0;r<o;r++)if(!1!==(e=this.passes[r]).enabled){if(e.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),e.render(this.renderer,this.writeBuffer,this.readBuffer,t,s),e.needsSwap){if(s){var a=this.renderer.getContext(),h=this.renderer.state.buffers.stencil;h.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),h.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}void 0!==n&&(e instanceof n?s=!0:e instanceof l&&(s=!1))}this.renderer.setRenderTarget(i)},reset:function(t){if(void 0===t){var e=this.renderer.getSize(new i.ob);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,(t=this.renderTarget1.clone()).setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2},setSize:function(t,e){this._width=t,this._height=e;var r=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(r,i),this.renderTarget2.setSize(r,i);for(var s=0;s<this.passes.length;s++)this.passes[s].setSize(r,i)},setPixelRatio:function(t){this._pixelRatio=t,this.setSize(this._width,this._height)}});var u,d,c,f=function(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1};Object.assign(f.prototype,{setSize:function(){},render:function(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}}),f.FullScreenQuad=(u=new i.T(-1,1,1,-1,0,1),d=new i.V(2,2),c=function(t){this._mesh=new i.I(d,t)},Object.defineProperty(c.prototype,"material",{get:function(){return this._mesh.material},set:function(t){this._mesh.material=t}}),Object.assign(c.prototype,{dispose:function(){this._mesh.geometry.dispose()},render:function(t){t.render(this._mesh,u)}}),c)},function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var i=r(10),s=r(11),o=r(12),a={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new i.i(0)},defaultOpacity:{value:0}},vertexShader:["varying vec2 vUv;","void main() {","\tvUv = uv;","\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","}"].join("\n"),fragmentShader:["uniform sampler2D tDiffuse;","uniform vec3 defaultColor;","uniform float defaultOpacity;","uniform float luminosityThreshold;","uniform float smoothWidth;","varying vec2 vUv;","void main() {","\tvec4 texel = texture2D( tDiffuse, vUv );","\tvec3 luma = vec3( 0.299, 0.587, 0.114 );","\tfloat v = dot( texel.xyz, luma );","\tvec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );","\tfloat alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );","\tgl_FragColor = mix( outputColor, texel, alpha );","}"].join("\n")},n=function(t,e,r,n){s.a.call(this),this.strength=void 0!==e?e:1,this.radius=r,this.threshold=n,this.resolution=void 0!==t?new i.ob(t.x,t.y):new i.ob(256,256),this.clearColor=new i.i(0,0,0);var l={minFilter:i.A,magFilter:i.A,format:i.bb};this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;var h=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);this.renderTargetBright=new i.rb(h,u,l),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(var d=0;d<this.nMips;d++){var c=new i.rb(h,u,l);c.texture.name="UnrealBloomPass.h"+d,c.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(c);var f=new i.rb(h,u,l);f.texture.name="UnrealBloomPass.v"+d,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),h=Math.round(h/2),u=Math.round(u/2)}void 0===a&&console.error("UnrealBloomPass relies on LuminosityHighPassShader");var m=a;this.highPassUniforms=i.nb.clone(m.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new i.eb({uniforms:this.highPassUniforms,vertexShader:m.vertexShader,fragmentShader:m.fragmentShader,defines:{}}),this.separableBlurMaterials=[];var p=[3,5,7,9,11];for(h=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2),d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(p[d])),this.separableBlurMaterials[d].uniforms.texSize.value=new i.ob(h,u),h=Math.round(h/2),u=Math.round(u/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;this.compositeMaterial.uniforms.bloomFactors.value=[1,.8,.6,.4,.2],this.bloomTintColors=[new i.pb(1,1,1),new i.pb(1,1,1),new i.pb(1,1,1),new i.pb(1,1,1),new i.pb(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,void 0===o.a&&console.error("UnrealBloomPass relies on CopyShader");var v=o.a;this.copyUniforms=i.nb.clone(v.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new i.eb({uniforms:this.copyUniforms,vertexShader:v.vertexShader,fragmentShader:v.fragmentShader,blending:i.a,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this.oldClearColor=new i.i,this.oldClearAlpha=1,this.basic=new i.J,this.fsQuad=new s.a.FullScreenQuad(null)};n.prototype=Object.assign(Object.create(s.a.prototype),{constructor:n,dispose:function(){for(var t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose()},setSize:function(t,e){var r=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(r,s);for(var o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(r,s),this.renderTargetsVertical[o].setSize(r,s),this.separableBlurMaterials[o].uniforms.texSize.value=new i.ob(r,s),r=Math.round(r/2),s=Math.round(s/2)},render:function(t,e,r,i,s){this.oldClearColor.copy(t.getClearColor()),this.oldClearAlpha=t.getClearAlpha();var o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=r.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);for(var a=this.renderTargetBright,l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(r),this.fsQuad.render(t)),t.setClearColor(this.oldClearColor,this.oldClearAlpha),t.autoClear=o},getSeperableBlurMaterial:function(t){return new i.eb({defines:{KERNEL_RADIUS:t,SIGMA:t},uniforms:{colorTexture:{value:null},texSize:{value:new i.ob(.5,.5)},direction:{value:new i.ob(.5,.5)}},vertexShader:"varying vec2 vUv;\n\t\t\t\tvoid main() {\n\t\t\t\t\tvUv = uv;\n\t\t\t\t\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\t\t\t\t}",fragmentShader:"#include <common>\t\t\t\tvarying vec2 vUv;\n\t\t\t\tuniform sampler2D colorTexture;\n\t\t\t\tuniform vec2 texSize;\t\t\t\tuniform vec2 direction;\t\t\t\t\t\t\t\tfloat gaussianPdf(in float x, in float sigma) {\t\t\t\t\treturn 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;\t\t\t\t}\t\t\t\tvoid main() {\n\t\t\t\t\tvec2 invSize = 1.0 / texSize;\t\t\t\t\tfloat fSigma = float(SIGMA);\t\t\t\t\tfloat weightSum = gaussianPdf(0.0, fSigma);\t\t\t\t\tvec3 diffuseSum = texture2D( colorTexture, vUv).rgb * weightSum;\t\t\t\t\tfor( int i = 1; i < KERNEL_RADIUS; i ++ ) {\t\t\t\t\t\tfloat x = float(i);\t\t\t\t\t\tfloat w = gaussianPdf(x, fSigma);\t\t\t\t\t\tvec2 uvOffset = direction * invSize * x;\t\t\t\t\t\tvec3 sample1 = texture2D( colorTexture, vUv + uvOffset).rgb;\t\t\t\t\t\tvec3 sample2 = texture2D( colorTexture, vUv - uvOffset).rgb;\t\t\t\t\t\tdiffuseSum += (sample1 + sample2) * w;\t\t\t\t\t\tweightSum += 2.0 * w;\t\t\t\t\t}\t\t\t\t\tgl_FragColor = vec4(diffuseSum/weightSum, 1.0);\n\t\t\t\t}"})},getCompositeMaterial:function(t){return new i.eb({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},dirtTexture:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:"varying vec2 vUv;\n\t\t\t\tvoid main() {\n\t\t\t\t\tvUv = uv;\n\t\t\t\t\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\t\t\t\t}",fragmentShader:"varying vec2 vUv;\t\t\t\tuniform sampler2D blurTexture1;\t\t\t\tuniform sampler2D blurTexture2;\t\t\t\tuniform sampler2D blurTexture3;\t\t\t\tuniform sampler2D blurTexture4;\t\t\t\tuniform sampler2D blurTexture5;\t\t\t\tuniform sampler2D dirtTexture;\t\t\t\tuniform float bloomStrength;\t\t\t\tuniform float bloomRadius;\t\t\t\tuniform float bloomFactors[NUM_MIPS];\t\t\t\tuniform vec3 bloomTintColors[NUM_MIPS];\t\t\t\t\t\t\t\tfloat lerpBloomFactor(const in float factor) { \t\t\t\t\tfloat mirrorFactor = 1.2 - factor;\t\t\t\t\treturn mix(factor, mirrorFactor, bloomRadius);\t\t\t\t}\t\t\t\t\t\t\t\tvoid main() {\t\t\t\t\tgl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) + \t\t\t\t\t\t\t\t\t\t\t\t\t lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) + \t\t\t\t\t\t\t\t\t\t\t\t\t lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) + \t\t\t\t\t\t\t\t\t\t\t\t\t lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) + \t\t\t\t\t\t\t\t\t\t\t\t\t lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );\t\t\t\t}"})}}),n.BlurDirectionX=new i.ob(1,0),n.BlurDirectionY=new i.ob(0,1)}]]);