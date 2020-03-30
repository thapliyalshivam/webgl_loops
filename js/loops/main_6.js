

var gui = new dat.GUI();


//scene setup
import * as THREE from './node_modules/three/src/Three.js';
import { OBJLoader } from './node_modules/three/examples/jsm/loaders/OBJLoader.js';
import { GLTFLoader } from './node_modules/three/examples/jsm/loaders/GLTFLoader.js';
import { ARButton } from './node_modules/three/examples/jsm/webxr/ARButton.js';

// import  '../lib/OBJLoader.js';
// var THREE = require('three');
console.log(THREE.REVISION);
var scene = new THREE.Scene();
//scene.fog = new THREE.Fog(0x0000ff, 0,300);
var camera = new THREE.PerspectiveCamera(170, window.innerWidth / window.innerHeight, 0.01, 20);
  

var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
console.log(renderer);
// renderer.xr.enabled = true;
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.xr.enabled = true;



const canvas = renderer.domElement;
// let cassa;
import cassa from '../lib/cassandra.js';
console.log(cassa);
const heading = cassa;
const isVR = false;
const isAR = true;

let arbs = ARButton.createButton(renderer);

//postprocessing setup
// var params = {
//   projection: 'normal',
//   background: false,
//   exposure: 1.4,
//   bloomStrength: 2.1,
//   bloomThreshold: 0,
//   bloomRadius: 0.72
// };


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
scene.add(new THREE.HemisphereLight(0x443333, 0x222233, 4));

//add geometries below
var holder = new THREE.Group();

const halos = 40;
var gun;
var material = new THREE.MeshStandardMaterial({
  map: new THREE.TextureLoader().load("./././images/cab.png"),
  metalness: 0.61,
  roughness: 0.5,
});


gui.add(material, 'metalness', 0.0, 1.0);
gui.add(material, 'roughness', 0.0, 1.0);

console.log(material);

// var loader = new OBJLoader();
// loader.load('./././models/pot.obj', function (object) {
// let ct = 0;
// object.traverse(function (child) {
//   if (child instanceof THREE.Mesh) {
//     child.material.map = new THREE.TextureLoader().load("./././images/cab.png");
//   }
// });
//   gun = object;
//   init();
// });


let loader = new GLTFLoader();
loader.load("./././models/cove.glb", function (gltf) {

  var geometry = new THREE.CylinderBufferGeometry( 0, 0.05, 0.2, 32 ).rotateX( Math.PI / 2 );
  var meshy = new THREE.Mesh( geometry, material );
scene.add(meshy);
  gltf.scene.traverse(function (child) {

    if (child.isMesh) {
      gun = child;
      child.material = material;

    }
  });
  // createScene( gltf.scene.children[ 0 ].geometry, 100, material );
  // gltf.scene.children[ 0 ].map=new THREE.TextureLoader().load("./././images/cab.png");
  // let mesh = new THREE.Mesh( gltf.scene.children[0].geometry, material );
  // gun = gltf;
  init();
});






function InOutQuint(t) {
  if ((t *= 2) < 1) return 0.5 * t * t * t * t * t;
  return 0.5 * ((t -= 2) * t * t * t * t + 2);
}


var objs = [];
var NUM = 23;
function init() {
  for (let j = 0; j < NUM; ++j) {
    let dub = gun.clone();
    objs.push(dub);
    scene.add(dub);
  }
}

const loopDuration = 41;
var startTime = performance.now();
const radius = 13;
const turn = (Math.PI * 2) / NUM;
function Render() {

  const time = (.0001 * (performance.now() - startTime)) % loopDuration;
  const time1 = (.001 * (performance.now() - startTime)) % loopDuration;
  const peak = 1 - time / loopDuration;
  objs.forEach((gun, id) => {
    // console.log(id);

    gun.position.set(
      Math.cos(id * 2 * Math.PI / NUM) * radius,
      Math.sin(id * 2 * Math.PI / NUM) * radius,
      0
    );
    gun.rotation.set(
      (time * Math.PI * 2) + id * (1.7),
      (time * Math.PI * 2) + id * (1.7),
      0
    );
    gun.scale.setScalar(.7 + InOutQuint(((Math.sin((time1 + (((((6 * Math.PI) / NUM) * 100 * (id)))) / loopDuration)) + 1) / 2)) / 2);

    //gun.scale.setScalar(0.3+ InOutQuint(((Math.sin((time1+(((((100*Math.PI)/NUM)*(id+1))))/loopDuration))+1)/2))/2);
    //  gun.scale.setScalar(0.2+ InOutQuint(((Math.sin((time1/loopDuration+(((((2*Math.PI)/NUM)*6*(id))))))+1)    )    )/2);
    //  id ==2 && console.log(0.7+InOutQuint(Math.sin((time1*(Math.PI+( Math.PI*id/50))/loopDuration)))/2);
    // console.log(Math.sin(time1*((2*Math.PI*(id/NUM))/loopDuration)));
    //(id*(2*Math.PI/NUM)
    // gun.scale.setScalar(1 + 0.2*Math.sin(10*time*Math.PI*2 + id * 200));
  })





  renderer.render(scene, camera);
}

export { canvas, Render, heading, renderer, isVR ,arbs};
//export  {canvas,Render,heading};
