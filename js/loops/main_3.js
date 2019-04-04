
//scene setup
var scene = new THREE.Scene();
//scene.fog = new THREE.Fog(0x0000ff, 0,300);
var camera = new  THREE.PerspectiveCamera(75,
  window.innerWidth/window.innerHeight,
  0.1,
  2000);
camera.position.z = 2;

var renderer = new THREE.WebGLRenderer();
renderer.toneMapping = THREE.ReinhardToneMapping;
renderer.setSize(window.innerWidth,window.innerHeight);
renderer.setClearColor(new THREE.Color(0xa0fbff),1.0);

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


//rendering composer
renderer.gammaInput = true;
renderer.gammaOutput = true;
renderer.toneMappingExposure = Math.pow( params.exposure, 4.0 );


scene.add( new THREE.AmbientLight( 0xeeeeee ) );
var directionalLight = new THREE.DirectionalLight( 0xddffff, 2 );
directionalLight.position.set( 1, 1, 1 ).normalize();
scene.add( directionalLight );
var pointLight = new THREE.PointLight( 0xffffff, 2, 800 );
scene.add( pointLight );

scene.add( new THREE.HemisphereLight( 0x443333, 0x222233, 4 ) );

//add geometries below
var holder = new THREE.Group();

const halos = 40;
var mm;
let imgTexture = new THREE.TextureLoader().load( "../../../images/hm.jpg" );

var material = new THREE.MeshStandardMaterial( {
  map: imgTexture,
  bumpMap: imgTexture,
  bumpScale: 4,
  //color: new THREE.Color(0xff0000),
  metalness: 0.2,
  roughness: 0.6,
  envMap: imgTexture

} );


//material.map.wrapS = THREE.RepeatWrapping;

var geometry = new THREE.SphereBufferGeometry(90,32,32);
    var obj = new THREE.Mesh( geometry, material );
    obj.position.set( 0, 0, 0 );
    obj.receiveShadow = true;
  // scene.add(obj);
console.log(obj);
   

var loader = new THREE.OBJLoader();
loader.load( '../../../models/yo.obj', function ( object ) {


  object.traverse( function ( child ) {
    if ( child instanceof THREE.Mesh  ) 
    {

  console.log(child);
      child.material =material;}
  } );

  object.rotation.set(Math.PI/2,Math.PI/2,Math.PI/2);
//dobject.scale.set(3,3,3);
 mm=object;
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
