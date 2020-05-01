
var container;
// var gui = new dat.GUI();


container = document.createElement('div');
document.body.appendChild(container);
//scene setup
import * as THREE from './node_modules/three/src/Three.js';
import { OBJLoader } from './node_modules/three/examples/jsm/loaders/OBJLoader.js';
import { GLTFLoader } from './node_modules/three/examples/jsm/loaders/GLTFLoader.js';
import { ARButton } from './node_modules/three/examples/jsm/webxr/ARButton.js';
var container;
var canvas;
var camera, scene, renderer;
var controller;
var gun;

init();
animate();

function init() {



	material = new THREE.MeshStandardMaterial({
		map: new THREE.TextureLoader().load("./././images/cab.png"),
		metalness: 0.61,
		roughness: 0.5,
	  });
	  

	let loader = new GLTFLoader();
loader.load("./././models/cove.glb", function (gltf) {

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
});



	container = document.createElement('div');
	document.body.appendChild(container);

	scene = new THREE.Scene();

	camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 20);

	var light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
	light.position.set(0.5, 1, 0.25);
	scene.add(light);

	//
	renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.xr.enabled = true;

	canvas = renderer.domElement;
	container.appendChild(renderer.domElement);

	//

	document.body.appendChild(ARButton.createButton(renderer));

	//

	var geometry = new THREE.CylinderBufferGeometry(0, 0.05, 0.2, 32).rotateX(Math.PI / 2);

	function onSelect() {

		// var material = new THREE.MeshPhongMaterial({ color: 0xffffff * Math.random() });
		// var mesh = new THREE.Mesh(geometry, material);
		gun.position.set(0, 0, - 0.3).applyMatrix4(controller.matrixWorld);
		gun.quaternion.setFromRotationMatrix(controller.matrixWorld);
		scene.add(gun);

	}

	controller = renderer.xr.getController(0);
	controller.addEventListener('select', onSelect);
	scene.add(controller);

	//

	window.addEventListener('resize', onWindowResize, false);

}

function onWindowResize() {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize(window.innerWidth, window.innerHeight);

}

//

function animate() {

	renderer.setAnimationLoop(render);

}

function render() {

	renderer.render(scene, camera);

}
let pp = "asda";
let isVR = false;
export { canvas, pp, renderer, isVR };
//export  {canvas,Render,heading};
