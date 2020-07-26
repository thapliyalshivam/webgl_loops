
import * as THREE from 'three';
import  * as dat from 'dat.gui';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import colours from "../lib/colours";



import cab from "../../images/cab 2.png";
import yo from "../../models/Flowerball.obj";

var gui = new dat.GUI();


//scene setup
var scene = new THREE.Scene();
//scene.fog = new THREE.Fog(0x0000ff, 0,300);
var camera = new THREE.PerspectiveCamera(15,
  window.innerWidth / window.innerHeight,
  0.1,
  2000);
camera.position.z = 12;

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(new THREE.Color(colours.acid_blue), 1.0);

const canvas = renderer.domElement;

document.body.appendChild( canvas );
// let cassa;
import cassa from '../lib/cassandra.js';
console.log(cassa);
const heading =cassa ;
const isVR = !false;

//postprocessing setup
var params = {
  projection: 'normal',
  background: false,
  exposure: 1.4,
  bloomStrength: 2.1,
  bloomThreshold: 0,  
  bloomRadius: 0.72
};


// //rendering composer
// renderer.gammaInput = true;
// renderer.gammaOutput = true;
// renderer.toneMappingExposure = Math.pow( params.exposure, 1.0 );


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
  map: new THREE.TextureLoader().load(cab),
  metalness: 0.67,
  roughness: 0.44,
});


 
 
 gui.add(material, 'metalness', 0.0, 1.0);
//  gui.add(material, 'bumpScale', 0.0, 0.04);
 gui.add(material, 'roughness', 0.0, 1.0);


var loader = new OBJLoader();
loader.load(yo, function (object) {


  object.traverse(function (child) {
    if (child.isMesh) {
console.log(child);
      child.material = material;
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
var NUM = 6;
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


// init();
animate();
function animate() {

	renderer.setAnimationLoop(Render);

}


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





  renderer.render(scene, camera);
}

export { canvas, Render, heading, renderer, isVR };
//export  {canvas,Render,heading};
