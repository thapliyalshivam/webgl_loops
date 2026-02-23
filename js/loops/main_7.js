import * as THREE from '../../node_modules/three/src/Three.js';
import { OBJLoader } from '../../node_modules/three/examples/jsm/loaders/OBJLoader.js';
import { GLTFLoader } from '../../node_modules/three/examples/jsm/loaders/GLTFLoader.js';
import colours from "../lib/colours.js";
import { UnrealBloomPass } from '../../node_modules/three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { GlitchPass } from '../../node_modules/three/examples/jsm/postprocessing/GlitchPass.js';
import { EffectComposer } from '../../node_modules/three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from '../../node_modules/three/examples/jsm/postprocessing/RenderPass.js';
import  * as dat from '../../node_modules/dat.gui';

import dawn from "../../images/dawn.png";
import dotted from "../../images/bump_dotted.jpg";
import flower from '../../models/flower.obj';

//Setting control GUI and data
var gui = new dat.GUI();
const heading ="Gold and blue" ;
const isVR = !false;
console.log(colours.acid_orange);

var controls = {
  SIZE: 4,
  NUMBER: 200,
}
   
//Scene Setup
var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(15,
  window.innerWidth / window.innerHeight,
  0.1,
  2000);
camera.position.z = 12;
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(new THREE.Color(colours.acid_cyan), 1.0);


gui.add(camera.position, 'z', 2, 20);

//Append the canvas to the dom
const canvas = renderer.domElement;
document.body.appendChild( renderer.domElement );

//postprocessing setup
  var params = {
    projection: 'normal',
    background: false,
    exposure: 1.4,
    bloomStrength: 1.9,
    bloomThreshold: 0.8,  
    bloomRadius: 0.41
  };
  renderer.gammaInput = true;
  renderer.gammaOutput = true;
  renderer.toneMappingExposure = Math.pow( params.exposure, 1.0 );

gui.add(camera.position, 'z', 2, 20);

 


var renderScene = new RenderPass( scene, camera );



//Setup bloom effect pass and add it to the UI
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
      
      
      


 //Compose all the passes together.     
var composer = new EffectComposer( renderer );
composer.addPass( renderScene );
composer.addPass( bloomPass );
composer.addPass( new GlitchPass(1111) );








//Light Setup
scene.add(new THREE.AmbientLight(0xeeeeee));
var directionalLight = new THREE.DirectionalLight(0xffffff, 3);

var directionalLight = new THREE.DirectionalLight(0xffffff, .5);
directionalLight.position.set(-2, 2, 2);
directionalLight.castShadow = true;
directionalLight.shadow.camera.near = -1;
directionalLight.shadow.camera.far = 10;
scene.add(directionalLight);

var directionalLight2 = new THREE.DirectionalLight(0xffffff, .5);
directionalLight2.position.set(1, 2, 1);
directionalLight2.castShadow = true;
directionalLight2.shadow.camera.near = -4;
directionalLight2.shadow.camera.far = 10;
scene.add(directionalLight2);
// scene.add( new THREE.HemisphereLight( 0x443333, 0x222233, 4 ) );







//add geometries below
var holder = new THREE.Group();

const halos = 40;
var gun;

var material = new THREE.MeshStandardMaterial({
 // map: new THREE.TextureLoader().load("./././images/dawn.png"),
  color: new THREE.Color(colours.acid_yellow),
  envMap: new THREE.TextureLoader().load(dawn),
  bumpMap:new THREE.TextureLoader().load(dotted),
  bumpScale:0.004,
  metalness: 0.96,
  roughness: 0.34,
});



gui.add(material, 'metalness', 0.0, 1.0);
gui.add(material, 'bumpScale', 0.0, 0.04);
gui.add(material, 'roughness', 0.0, 1.0);
var loader = new OBJLoader();
loader.load(flower, function (object) {

let ct = 0;
  object.traverse(function (child) {
    if (child.isMesh) {
      child.material = material;
      console.log(++ct);
    }
  });
  gun = object;
  init();
});


function InOutQuint(t) {
  if ((t *= 2) < 1) return 0.5 * t * t * t * t * t;
  return 0.5 * ((t -= 2) * t * t * t * t + 2);
}


var objs = [];
var NUM = 13;
function init() {
  for (let j = 0; j < NUM; ++j) {
    let dub = gun.clone();
    objs.push(dub);
    scene.add(dub);
  }
}

const loopDuration = 41;
var startTime = performance.now();
const radius = 1;
const turn = (Math.PI*2)/NUM;


//Call the animation and set the loop running
animate();
function animate() {
	renderer.setAnimationLoop(Render);
}



//Render Loop Function
function Render() {

  const time = ( .0001 * (performance.now()-startTime)) % loopDuration;
  const time1 = ( .001 * (performance.now()-startTime)) % loopDuration;
  const peak = 1-time/loopDuration;
  objs.forEach((gun, id) => {
    // console.log(id);

    gun.position.set(
      Math.cos(id * 2 *Math.PI/NUM)*radius,
      Math.sin(id * 2 *Math.PI/NUM)*radius,
      0
    );
    gun.rotation.set(
      (time*Math.PI*2) + id*(1.7),
      (time*Math.PI*2) + id*(1.7),
      0
    );
   gun.scale.setScalar(0.7+ InOutQuint(((Math.sin((time1+(((((6*Math.PI)/NUM)*100*(id))))/loopDuration))+1)/2))/2);

//gun.scale.setScalar(0.3+ InOutQuint(((Math.sin((time1+(((((100*Math.PI)/NUM)*(id+1))))/loopDuration))+1)/2))/2);
  //  gun.scale.setScalar(0.2+ InOutQuint(((Math.sin((time1/loopDuration+(((((2*Math.PI)/NUM)*6*(id))))))+1)    )    )/2);
  //  id ==2 && console.log(0.7+InOutQuint(Math.sin((time1*(Math.PI+( Math.PI*id/50))/loopDuration)))/2);
  // console.log(Math.sin(time1*((2*Math.PI*(id/NUM))/loopDuration)));
   //(id*(2*Math.PI/NUM)
    // gun.scale.setScalar(1 + 0.2*Math.sin(10*time*Math.PI*2 + id * 200));
  })
  composer.render();
}

export { canvas, Render, heading, renderer, isVR };
//export  {canvas,Render,heading};
