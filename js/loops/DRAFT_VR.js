
//scene setup
var scene = new THREE.Scene();
	scene.background = new THREE.Color( 0x0000AA );
//scene.fog = new THREE.Fog(0x0000ff, 0,300);
var camera = new  THREE.PerspectiveCamera(75,
  window.innerWidth/window.innerHeight,
  0.1,
  100);
camera.position.z = 0;
const isVR = true;

var renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio( window.devicePixelRatio);
renderer.vr.enabled = isVR;
renderer.toneMapping = THREE.ReinhardToneMapping;
renderer.setSize(window.innerWidth,window.innerHeight);
//renderer.setClearColor(new THREE.Color(0x000F4E),1.0);



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


				var light = new THREE.HemisphereLight( 0xffffff, 0x444444 );
				light.position.set( 1, 1, 1 );
				scene.add( light );
				var geometry = new THREE.IcosahedronBufferGeometry( 23, 2 );
				for ( var i = 0; i < 200; i ++ ) {
					var object = new THREE.Mesh( geometry, new THREE.MeshLambertMaterial( { color: Math.random() * 0xffffff } ) );
					object.position.x = Math.random() * 4 - 2;
					object.position.y = Math.random() * 4;
					object.position.z = Math.random() * 4 - 2;
					object.userData.velocity = new THREE.Vector3();
					object.userData.velocity.x = Math.random() * 0.01 - 0.005;
					object.userData.velocity.y = Math.random() * 0.01 - 0.005;
					object.userData.velocity.z = Math.random() * 0.01 - 0.005;
					scene.add( object );
				}






var renderScene = new THREE.RenderPass( scene, camera );

var effectFXAA = new THREE.ShaderPass( THREE.FXAAShader );
effectFXAA.uniforms[ 'resolution' ].value.set( 1 / window.innerWidth, 1 / window.innerHeight );

var bloomPass = new THREE.UnrealBloomPass( new THREE.Vector2( window.innerWidth, window.innerHeight ), 1.5, 0.4, 0.85 ); //1.0, 9, 0.5, 512);
bloomPass.bloomStrength= 2.1
bloomPass.bloomThreshold= 0
bloomPass.bloomRadius= 0.72
bloomPass.renderToScreen = true;

//rendering composer

var composer = new THREE.EffectComposer( renderer );
composer.setSize( window.innerWidth, window.innerHeight );
composer.addPass( renderScene );
composer.addPass( effectFXAA );
composer.addPass( bloomPass );
renderer.gammaInput = true;
renderer.gammaOutput = true;
renderer.toneMappingExposure = Math.pow( params.exposure, 4.0 );

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

var geometry = new THREE.SphereBufferGeometry(2,32,32);
    var material = new THREE.MeshBasicMaterial( { color: new THREE.Color("white"),  transparent:true, opacity:1, side: THREE.DoubleSide } );
    var obj = new THREE.Mesh( geometry, material );
    obj.position.set( 0, 0, 0 );
    obj.receiveShadow = true;
    obj.castShadow = true;
  //  scene.add(obj);



const dis = 100;
const step = (2*Math.PI)/halos;

for (let i=0;i<=halos;++i){

  const dub1 = obj.clone();
  dub1.position.set(
    Math.random()*100,
    Math.random()*100,
		Math.random()*100
  );
  holder.add(dub1);
}
scene.add(holder);






function Render(){
const t=Date.now()/10000;

holder.children.forEach((c,i)=>{
  c.position.set(
    Math.cos(step*i)*(dis*(Math.sin(t*3+i*7*Math.PI/halos))),
    Math.sin(step*i)*(dis*(Math.sin(t*3+i*7*Math.PI/halos))),
    Math.cos(step*i)*(dis*(Math.sin(t*3+i*7*Math.PI/halos)))+100,
  );

});


if(isVR)
renderer.render(scene, camera);
else
composer.render();
}

export  {canvas,Render,heading,renderer,isVR};
