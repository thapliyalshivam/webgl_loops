
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
renderer.setClearColor(new THREE.Color(0x0000ff), 1.0);

const canvas = renderer.domElement;
const heading = "Gun Flower";
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
  map: new THREE.TextureLoader().load("./././images/cab.png"),
  metalness: 0.61,
  roughness: 0.5,
});



var loader = new THREE.OBJLoader();
loader.load('./././models/yo.obj', function (object) {


  object.traverse(function (child) {
    if (child instanceof THREE.Mesh) {
      child.material = material;
    }
  });


  gun = object;
  init();
});





var objs = [];
var NUM = 20;
function init() {
  for (let j = 0; j < NUM; ++j) {
    let dub = gun.clone();
    objs.push(dub);
    scene.add(dub);
  }
}

const loopDuration = 21;
var startTime = performance.now();
const radius = 1;
function Render() {

  const time = ( .0001 * (performance.now()-startTime)) % loopDuration;

  const t = Date.now() / 1000;
  objs.forEach((gun, id) => {

    gun.position.set(
      Math.cos(id * 2 *Math.PI/NUM)*radius,
      Math.sin(id * 2 *Math.PI/NUM)*radius,
      0
    )
    gun.rotation.set(
      (time*Math.PI*2) + id*(0.7),
      (time*Math.PI*2) + id*(0.7),

    
      0
    )



  })

  if (gun) {
    gun.rotation.set(Math.sin(t) * Math.PI, Math.sin(t) * Math.PI, Math.sin(t) * Math.PI);
  }




  renderer.render(scene, camera);
}

export { canvas, Render, heading, renderer, isVR };
//export  {canvas,Render,heading};
