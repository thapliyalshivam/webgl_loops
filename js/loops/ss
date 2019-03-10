
//scene setup
var scene = new THREE.Scene();

				scene = new THREE.Scene();
				scene.background = new THREE.Color( 0x505050 );
			let	camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.1, 1000 );
				scene.add( camera );




var renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio( window.devicePixelRatio);
renderer.vr.enabled = true;
renderer.toneMapping = THREE.ReinhardToneMapping;
renderer.setSize(window.innerWidth,window.innerHeight);
//renderer.setClearColor(new THREE.Color(0x000F4E),1.0);



const canvas = renderer.domElement;
const heading = "Broken";


				scene.add( new THREE.HemisphereLight( 0x606060, 0x404040 ) );




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
									scene.add( object );
								}






//rendering composer

//lights setup


function Render(){

renderer.render(scene, camera);


}

export  {canvas,Render,heading,renderer};
