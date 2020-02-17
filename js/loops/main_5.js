
//scene setup
var scene = new THREE.Scene();

				scene = new THREE.Scene();
				scene.background = new THREE.Color( 0xDDDDDD );
			let	camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.1, 1000 );
				scene.add( camera );

const isVR = true;


var renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio( window.devicePixelRatio);
renderer.vr.enabled = true;
renderer.toneMapping = THREE.ReinhardToneMapping;
renderer.setSize(window.innerWidth,window.innerHeight);
//renderer.setClearColor(new THREE.Color(0x000F4E),1.0);



const canvas = renderer.domElement;
const heading = null ;
var holder = new THREE.Group();

				scene.add( new THREE.HemisphereLight( 0xFFFFFF, 0x4040FF ) );
								var geometry = new THREE.BoxBufferGeometry( 0.15, 0.15, 0.15 );
								for ( var i = 0; i < 200; i ++ ) {
									var object = new THREE.Mesh( geometry, new THREE.MeshLambertMaterial( { color: Math.random() * 0xffffff } ) );
									object.position.x = Math.random() * 4 - 2;
									object.position.y = Math.random() * 4 - 2;
									object.position.z = Math.random() * 4 - 2;
									object.rotation.x = Math.random() * 2 * Math.PI;
									object.rotation.y = Math.random() * 2 * Math.PI;
									object.rotation.z = Math.random() * 2 * Math.PI;
									object.scale.x = Math.random() + 0.5;
									object.scale.y = Math.random() + 0.5;
									object.scale.z = Math.random() + 0.5;
									object.userData.velocity = new THREE.Vector3();
									object.userData.velocity.x = Math.random() * 0.01 - 0.005;
									object.userData.velocity.y = Math.random() * 0.01 - 0.005;
									object.userData.velocity.z = Math.random() * 0.01 - 0.005;
									holder.add( object );
								}

scene.add( holder );




//rendering composer

//lights setup


function Render(){
	let t=Date.now()/10000;
		holder.rotation.x = Math.sin(t)*Math.PI;

	if(isVR)
	renderer.render(scene, camera);
	else
	composer.render();

}

export  {canvas,Render,heading,renderer,isVR};
