(window.webpackJsonp=window.webpackJsonp||[]).push([[4],[,,,,,,,,function(e,t,r){"use strict";r.r(t),r.d(t,"canvas",(function(){return w})),r.d(t,"Render",(function(){return D})),r.d(t,"heading",(function(){return m})),r.d(t,"renderer",(function(){return b})),r.d(t,"isVR",(function(){return p}));var i=r(14),s=r(18),a=(r(19),r(24)),o=r(16),n=r(15),l=r(13),h=r(17),u=r(22),d=r.p+"560e161cff84d2d51666d62720ce2ee6.jpg",c=r(23),f=new h.a;const m="Gold and blue",p=!0;console.log(a.a.acid_orange);var v=new i.v,g=new i.q(15,window.innerWidth/window.innerHeight,.1,2e3);g.position.z=12;var b=new i.A;b.setSize(window.innerWidth,window.innerHeight),b.setClearColor(new i.c(a.a.acid_cyan),1),f.add(g.position,"z",2,20);const w=b.domElement;document.body.appendChild(b.domElement);var x={projection:"normal",background:!1,exposure:1.4,bloomStrength:2.1,bloomThreshold:0,bloomRadius:.72};b.gammaInput=!0,b.gammaOutput=!0,b.toneMappingExposure=Math.pow(x.exposure,1),f.add(g.position,"z",2,20);var T=new l.a(v,g),S=new o.a(new i.z(window.innerWidth,window.innerHeight),1.5,.4,.85);S.threshold=x.bloomThreshold,S.strength=x.bloomStrength,S.radius=x.bloomRadius,f.add(x,"exposure",.1,2).onChange((function(e){b.toneMappingExposure=Math.pow(e,4)})),f.add(x,"bloomThreshold",0,1).onChange((function(e){S.threshold=Number(e)})),f.add(x,"bloomStrength",0,3).onChange((function(e){S.strength=Number(e)})),f.add(x,"bloomRadius",0,1).step(.01).onChange((function(e){S.radius=Number(e)}));var C=new n.a(b);C.addPass(T),C.addPass(S),v.add(new i.a(15658734));var M=new i.e(16777215,3);(M=new i.e(16777215,.5)).position.set(-2,2,2),M.castShadow=!0,M.shadow.camera.near=-1,M.shadow.camera.far=10,v.add(M);var y=new i.e(16777215,.5);y.position.set(1,2,1),y.castShadow=!0,y.shadow.camera.near=-4,y.shadow.camera.far=10,v.add(y);new i.g;var _,R=new i.o({color:new i.c(a.a.acid_yellow),envMap:(new i.y).load(u.a),bumpMap:(new i.y).load(d),bumpScale:.004,metalness:.83,roughness:.34});f.add(R,"metalness",0,1),f.add(R,"bumpScale",0,.04),f.add(R,"roughness",0,1),(new s.a).load(c.a,(function(e){let t=0;e.traverse((function(e){e.isMesh&&(e.material=R,console.log(++t))})),_=e,function(){for(let e=0;e<13;++e){let e=_.clone();P.push(e),v.add(e)}}()}));var P=[];var B=performance.now();Math.PI;function D(){const e=1e-4*(performance.now()-B)%41,t=.001*(performance.now()-B)%41;P.forEach((r,i)=>{var s;r.position.set(1*Math.cos(2*i*Math.PI/13),1*Math.sin(2*i*Math.PI/13),0),r.rotation.set(e*Math.PI*2+1.7*i,e*Math.PI*2+1.7*i,0),r.scale.setScalar(.7+(s=(Math.sin(t+6*Math.PI/13*100*i/41)+1)/2,((s*=2)<1?.5*s*s*s*s*s:.5*((s-=2)*s*s*s*s+2))/2))}),C.render()}b.setAnimationLoop(D)},,,function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i,s,a,o=r(10);function n(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}Object.assign(n.prototype,{setSize:function(){},render:function(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}}),n.FullScreenQuad=(i=new o.R(-1,1,1,-1,0,1),s=new o.T(2,2),a=function(e){this._mesh=new o.G(s,e)},Object.defineProperty(a.prototype,"material",{get:function(){return this._mesh.material},set:function(e){this._mesh.material=e}}),Object.assign(a.prototype,{dispose:function(){this._mesh.geometry.dispose()},render:function(e){e.render(this._mesh,i)}}),a)},function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var i={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:["varying vec2 vUv;","void main() {","\tvUv = uv;","\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","}"].join("\n"),fragmentShader:["uniform float opacity;","uniform sampler2D tDiffuse;","varying vec2 vUv;","void main() {","\tvec4 texel = texture2D( tDiffuse, vUv );","\tgl_FragColor = opacity * texel;","}"].join("\n")}},function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var i=r(11),s=function(e,t,r,s,a){i.a.call(this),this.scene=e,this.camera=t,this.overrideMaterial=r,this.clearColor=s,this.clearAlpha=void 0!==a?a:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1};s.prototype=Object.assign(Object.create(i.a.prototype),{constructor:s,render:function(e,t,r){var i,s,a,o=e.autoClear;e.autoClear=!1,void 0!==this.overrideMaterial&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(i=e.getClearColor().getHex(),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:r),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(i,s),void 0!==this.overrideMaterial&&(this.scene.overrideMaterial=a),e.autoClear=o}})},,function(e,t,r){"use strict";r.d(t,"a",(function(){return h}));var i=r(10),s=r(12),a=r(11),o=function(e,t){a.a.call(this),this.textureID=void 0!==t?t:"tDiffuse",e instanceof i.cb?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=i.lb.clone(e.uniforms),this.material=new i.cb({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new a.a.FullScreenQuad(this.material)};o.prototype=Object.assign(Object.create(a.a.prototype),{constructor:o,render:function(e,t,r){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=r.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}});var n=function(e,t){a.a.call(this),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1};n.prototype=Object.assign(Object.create(a.a.prototype),{constructor:n,render:function(e,t,r){var i,s,a=e.getContext(),o=e.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0),this.inverse?(i=0,s=1):(i=1,s=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(a.REPLACE,a.REPLACE,a.REPLACE),o.buffers.stencil.setFunc(a.ALWAYS,i,4294967295),o.buffers.stencil.setClear(s),o.buffers.stencil.setLocked(!0),e.setRenderTarget(r),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(a.EQUAL,1,4294967295),o.buffers.stencil.setOp(a.KEEP,a.KEEP,a.KEEP),o.buffers.stencil.setLocked(!0)}});var l=function(){a.a.call(this),this.needsSwap=!1};l.prototype=Object.create(a.a.prototype),Object.assign(l.prototype,{render:function(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}});var h=function(e,t){if(this.renderer=e,void 0===t){var r={minFilter:i.y,magFilter:i.y,format:i.Z,stencilBuffer:!1},a=e.getSize(new i.mb);this._pixelRatio=e.getPixelRatio(),this._width=a.width,this._height=a.height,(t=new i.pb(this._width*this._pixelRatio,this._height*this._pixelRatio,r)).texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],void 0===s.a&&console.error("THREE.EffectComposer relies on CopyShader"),void 0===o&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new o(s.a),this.clock=new i.h};Object.assign(h.prototype,{swapBuffers:function(){var e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e},addPass:function(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)},insertPass:function(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)},isLastEnabledPass:function(e){for(var t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0},render:function(e){void 0===e&&(e=this.clock.getDelta());var t,r,i=this.renderer.getRenderTarget(),s=!1,a=this.passes.length;for(r=0;r<a;r++)if(!1!==(t=this.passes[r]).enabled){if(t.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),t.render(this.renderer,this.writeBuffer,this.readBuffer,e,s),t.needsSwap){if(s){var o=this.renderer.getContext(),h=this.renderer.state.buffers.stencil;h.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),h.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}void 0!==n&&(t instanceof n?s=!0:t instanceof l&&(s=!1))}this.renderer.setRenderTarget(i)},reset:function(e){if(void 0===e){var t=this.renderer.getSize(new i.mb);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,(e=this.renderTarget1.clone()).setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2},setSize:function(e,t){this._width=e,this._height=t;var r=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(r,i),this.renderTarget2.setSize(r,i);for(var s=0;s<this.passes.length;s++)this.passes[s].setSize(r,i)},setPixelRatio:function(e){this._pixelRatio=e,this.setSize(this._width,this._height)}});var u,d,c,f=function(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1};Object.assign(f.prototype,{setSize:function(){},render:function(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}}),f.FullScreenQuad=(u=new i.R(-1,1,1,-1,0,1),d=new i.T(2,2),c=function(e){this._mesh=new i.G(d,e)},Object.defineProperty(c.prototype,"material",{get:function(){return this._mesh.material},set:function(e){this._mesh.material=e}}),Object.assign(c.prototype,{dispose:function(){this._mesh.geometry.dispose()},render:function(e){e.render(this._mesh,u)}}),c)},function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(10),s=r(11),a=r(12),o={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new i.i(0)},defaultOpacity:{value:0}},vertexShader:["varying vec2 vUv;","void main() {","\tvUv = uv;","\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","}"].join("\n"),fragmentShader:["uniform sampler2D tDiffuse;","uniform vec3 defaultColor;","uniform float defaultOpacity;","uniform float luminosityThreshold;","uniform float smoothWidth;","varying vec2 vUv;","void main() {","\tvec4 texel = texture2D( tDiffuse, vUv );","\tvec3 luma = vec3( 0.299, 0.587, 0.114 );","\tfloat v = dot( texel.xyz, luma );","\tvec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );","\tfloat alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );","\tgl_FragColor = mix( outputColor, texel, alpha );","}"].join("\n")},n=function(e,t,r,n){s.a.call(this),this.strength=void 0!==t?t:1,this.radius=r,this.threshold=n,this.resolution=void 0!==e?new i.mb(e.x,e.y):new i.mb(256,256),this.clearColor=new i.i(0,0,0);var l={minFilter:i.y,magFilter:i.y,format:i.Z};this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;var h=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);this.renderTargetBright=new i.pb(h,u,l),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(var d=0;d<this.nMips;d++){var c=new i.pb(h,u,l);c.texture.name="UnrealBloomPass.h"+d,c.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(c);var f=new i.pb(h,u,l);f.texture.name="UnrealBloomPass.v"+d,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),h=Math.round(h/2),u=Math.round(u/2)}void 0===o&&console.error("UnrealBloomPass relies on LuminosityHighPassShader");var m=o;this.highPassUniforms=i.lb.clone(m.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new i.cb({uniforms:this.highPassUniforms,vertexShader:m.vertexShader,fragmentShader:m.fragmentShader,defines:{}}),this.separableBlurMaterials=[];var p=[3,5,7,9,11];for(h=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2),d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(p[d])),this.separableBlurMaterials[d].uniforms.texSize.value=new i.mb(h,u),h=Math.round(h/2),u=Math.round(u/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;this.compositeMaterial.uniforms.bloomFactors.value=[1,.8,.6,.4,.2],this.bloomTintColors=[new i.nb(1,1,1),new i.nb(1,1,1),new i.nb(1,1,1),new i.nb(1,1,1),new i.nb(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,void 0===a.a&&console.error("UnrealBloomPass relies on CopyShader");var v=a.a;this.copyUniforms=i.lb.clone(v.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new i.cb({uniforms:this.copyUniforms,vertexShader:v.vertexShader,fragmentShader:v.fragmentShader,blending:i.a,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this.oldClearColor=new i.i,this.oldClearAlpha=1,this.basic=new i.H,this.fsQuad=new s.a.FullScreenQuad(null)};n.prototype=Object.assign(Object.create(s.a.prototype),{constructor:n,dispose:function(){for(var e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose()},setSize:function(e,t){var r=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(r,s);for(var a=0;a<this.nMips;a++)this.renderTargetsHorizontal[a].setSize(r,s),this.renderTargetsVertical[a].setSize(r,s),this.separableBlurMaterials[a].uniforms.texSize.value=new i.mb(r,s),r=Math.round(r/2),s=Math.round(s/2)},render:function(e,t,r,i,s){this.oldClearColor.copy(e.getClearColor()),this.oldClearAlpha=e.getClearAlpha();var a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=r.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);for(var o=this.renderTargetBright,l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(r),this.fsQuad.render(e)),e.setClearColor(this.oldClearColor,this.oldClearAlpha),e.autoClear=a},getSeperableBlurMaterial:function(e){return new i.cb({defines:{KERNEL_RADIUS:e,SIGMA:e},uniforms:{colorTexture:{value:null},texSize:{value:new i.mb(.5,.5)},direction:{value:new i.mb(.5,.5)}},vertexShader:"varying vec2 vUv;\n\t\t\t\tvoid main() {\n\t\t\t\t\tvUv = uv;\n\t\t\t\t\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\t\t\t\t}",fragmentShader:"#include <common>\t\t\t\tvarying vec2 vUv;\n\t\t\t\tuniform sampler2D colorTexture;\n\t\t\t\tuniform vec2 texSize;\t\t\t\tuniform vec2 direction;\t\t\t\t\t\t\t\tfloat gaussianPdf(in float x, in float sigma) {\t\t\t\t\treturn 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;\t\t\t\t}\t\t\t\tvoid main() {\n\t\t\t\t\tvec2 invSize = 1.0 / texSize;\t\t\t\t\tfloat fSigma = float(SIGMA);\t\t\t\t\tfloat weightSum = gaussianPdf(0.0, fSigma);\t\t\t\t\tvec3 diffuseSum = texture2D( colorTexture, vUv).rgb * weightSum;\t\t\t\t\tfor( int i = 1; i < KERNEL_RADIUS; i ++ ) {\t\t\t\t\t\tfloat x = float(i);\t\t\t\t\t\tfloat w = gaussianPdf(x, fSigma);\t\t\t\t\t\tvec2 uvOffset = direction * invSize * x;\t\t\t\t\t\tvec3 sample1 = texture2D( colorTexture, vUv + uvOffset).rgb;\t\t\t\t\t\tvec3 sample2 = texture2D( colorTexture, vUv - uvOffset).rgb;\t\t\t\t\t\tdiffuseSum += (sample1 + sample2) * w;\t\t\t\t\t\tweightSum += 2.0 * w;\t\t\t\t\t}\t\t\t\t\tgl_FragColor = vec4(diffuseSum/weightSum, 1.0);\n\t\t\t\t}"})},getCompositeMaterial:function(e){return new i.cb({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},dirtTexture:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:"varying vec2 vUv;\n\t\t\t\tvoid main() {\n\t\t\t\t\tvUv = uv;\n\t\t\t\t\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\t\t\t\t}",fragmentShader:"varying vec2 vUv;\t\t\t\tuniform sampler2D blurTexture1;\t\t\t\tuniform sampler2D blurTexture2;\t\t\t\tuniform sampler2D blurTexture3;\t\t\t\tuniform sampler2D blurTexture4;\t\t\t\tuniform sampler2D blurTexture5;\t\t\t\tuniform sampler2D dirtTexture;\t\t\t\tuniform float bloomStrength;\t\t\t\tuniform float bloomRadius;\t\t\t\tuniform float bloomFactors[NUM_MIPS];\t\t\t\tuniform vec3 bloomTintColors[NUM_MIPS];\t\t\t\t\t\t\t\tfloat lerpBloomFactor(const in float factor) { \t\t\t\t\tfloat mirrorFactor = 1.2 - factor;\t\t\t\t\treturn mix(factor, mirrorFactor, bloomRadius);\t\t\t\t}\t\t\t\t\t\t\t\tvoid main() {\t\t\t\t\tgl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) + \t\t\t\t\t\t\t\t\t\t\t\t\t lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) + \t\t\t\t\t\t\t\t\t\t\t\t\t lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) + \t\t\t\t\t\t\t\t\t\t\t\t\t lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) + \t\t\t\t\t\t\t\t\t\t\t\t\t lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );\t\t\t\t}"})}}),n.BlurDirectionX=new i.mb(1,0),n.BlurDirectionY=new i.mb(0,1)},,,,,,function(e,t,r){"use strict";t.a=r.p+"2d4e2196775f2eb23bac71096c5fffcd.png"},function(e,t,r){"use strict";t.a=r.p+"ee0ff68fb6e22850d3693c563449eaca.obj"},function(e,t,r){"use strict";t.a={green:"#00ff00",velvet:"#AE1C59",base_blue:"#161b33",acid_pink:"#FE46A5",acid_yellow:"#FCD51D",acid_blue:"#0029FF",acid_green:"#02BF66",acid_orange:"#FC5E21",acid_cyan:"#00ADEC"}}]]);