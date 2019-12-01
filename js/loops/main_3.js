
//scene setup
var scene = new THREE.Scene();
//scene.fog = new THREE.Fog(0x0000ff, 0,300);
var camera = new  THREE.PerspectiveCamera(15,
  window.innerWidth/window.innerHeight,
  0.1,
  2000);
camera.position.z = 12;

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight);
renderer.setClearColor(new THREE.Color(0x0000ff),1.0);

const canvas = renderer.domElement;
const heading = "Broken";

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


 scene.add( new THREE.AmbientLight( 0xeeeeee ) );
var directionalLight = new THREE.DirectionalLight( 0xffffff, 3);



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
var mm;
let imgTexture = new THREE.TextureLoader().load( "./././images/cab.png" );

var material = new THREE.MeshStandardMaterial( {
map: imgTexture,
//   bumpMap: imgTexture,
//   bumpScale: 4,
//   color: new THREE.Color(0xff0000),
  metalness: 0.61,
  roughness: 0.5,
  //envMap: imgTexture

} );


//material.map.wrapS = THREE.RepeatWrapping;

var geometry = new THREE.SphereBufferGeometry(90,32,32);
    var obj = new THREE.Mesh( geometry, material );
    obj.position.set( 0, 0, 0 );
    obj.receiveShadow = true;
  // scene.add(obj);
  
//console.log(obj);

var loader = new THREE.OBJLoader();
loader.load( './././models/yo.obj', function ( object ) {


  object.traverse( function ( child ) {
    if ( child instanceof THREE.Mesh  )
    {

  console.log(child);
      child.material =material;}
  } );

  object.rotation.set(Math.PI/2,Math.PI/2,Math.PI/2);

  mm=object;
  var ps = mm.clone();
  ps.position.set(2,0,1);
  scene.add(ps);
  scene.add( object );
} );




// const objLoader = new THREE.OBJLoader2();
// objLoader.load('../../../models/horse.obj', (event) => {
//   const root = event.detail.loaderRootNode;

//   scene.add(root);
// });


function Render(){
const t=Date.now()/1000;

if(mm)
mm.rotation.set(Math.sin(t)*Math.PI,Math.sin(t)*Math.PI,Math.sin(t)*Math.PI);
renderer.render(scene, camera);



}

var isVR = !false;
export  {canvas,Render,heading,renderer,isVR};
//export  {canvas,Render,heading};
