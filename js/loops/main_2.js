
//scene setup

import * as THREE from '../../node_modules/three/src/Three.js';
import  * as dat from '../../node_modules/dat.gui';
import { OBJLoader } from '../../node_modules/three/examples/jsm/loaders/OBJLoader.js';
import { GLTFLoader } from '../../node_modules/three/examples/jsm/loaders/GLTFLoader.js';
import { RenderPass } from '../../node_modules/three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from '../../node_modules/three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
var scene = new THREE.Scene();
var gui = new dat.GUI();
//scene.fog = new THREE.Fog(0x0000ff, 0,300);
var camera = new  THREE.PerspectiveCamera(75,
  window.innerWidth/window.innerHeight,
  0.1,
  2000);
camera.position.z = 1000;

var renderer = new THREE.WebGLRenderer();
renderer.toneMapping = THREE.ReinhardToneMapping;
renderer.setSize(window.innerWidth,window.innerHeight);
renderer.setClearColor(new THREE.Color(0x000F4E),1.0);

renderer.gammaInput = true;
renderer.gammaOutput = true;

const canvas = renderer.domElement;
document.body.append(canvas);

//postprocessing setup
var params = {
  projection: 'normal',
  background: false,
  exposure: 1.4,
  bloomStrength: 2.1,
  bloomThreshold: 0,
  bloomRadius: 0.72
};

renderer.toneMappingExposure = Math.pow( params.exposure, 4.0 );


var renderScene = new RenderPass( scene, camera );

var bloomPass = new UnrealBloomPass( new THREE.Vector2( window.innerWidth, window.innerHeight ), 1.5, 0.4, 0.85 );
			bloomPass.threshold = params.bloomThreshold;
			bloomPass.strength = params.bloomStrength;
      bloomPass.radius = params.bloomRadius;


      gui.add( params, 'exposure', 0.1, 2 ).onChange( function ( value ) {
        renderer.toneMappingExposure = Math.pow( value, 4.0 );
      } );
      
      gui.add( params, 'bloomThreshold', 0.0, 1.0 ).onChange( function ( value ) {
        bloomPass.threshold = Number( value );
      } );
      
      gui.add( params, 'bloomStrength', 0.0, 3.0 ).onChange( function ( value ) {
        bloomPass.strength = Number( value );
      } );
      
      gui.add( params, 'bloomRadius', 0.0, 1.0 ).step( 0.01 ).onChange( function ( value ) {
        bloomPass.radius = Number( value );
      } );
      
      
      

//rendering composer

var composer = new EffectComposer( renderer );
composer.setSize( window.innerWidth, window.innerHeight );
composer.addPass( renderScene );

composer.addPass( bloomPass );


//lights setup
scene.add( new THREE.AmbientLight( 0x404040 ) );
var spotLight = new THREE.SpotLight( 0xffffff, 1 );
spotLight.position.set( 50, 100, 50 );
spotLight.angle = Math.PI / 7;
spotLight.penumbra = 0.8;
spotLight.castShadow = true;
scene.add( spotLight );

//add geometries below
var holder = new THREE.Group();

const halos = 40;

var geometry = new THREE.SphereBufferGeometry(15,32,32);
    var material = new THREE.MeshBasicMaterial( { color: new THREE.Color("white"),  transparent:true, opacity:1, side: THREE.DoubleSide } );
    var obj = new THREE.Mesh( geometry, material );
    obj.position.set( 0, 0, 0 );
    obj.receiveShadow = true;
    obj.castShadow = true;
  //  scene.add(obj);
const dub = obj.clone();

holder.add(dub);

const dis = 500;
const step = (2*Math.PI)/halos;

for (let i=0;i<=halos;++i){
  const dub1 = obj.clone();
  dub1.position.set(
    Math.cos(step*i)*dis/i,
    Math.sin(step*i)*dis/i,
    0
  );
  holder.add(dub1);
}
scene.add(holder);


// init();
animate();
function animate() {

	renderer.setAnimationLoop(Render);

}


function Render(){
const t=Date.now()/1000;

holder.children.forEach((c,i)=>{
  c.position.set(
    Math.cos(step*i)*(dis*(Math.sin(t*3+i*7*Math.PI/halos))),
    Math.sin(step*i)*(dis*(Math.sin(t*3+i*7*Math.PI/halos))),
    0
  );


});



composer.render();
//renderer.render(scene, camera);


}

export  {canvas,Render};
