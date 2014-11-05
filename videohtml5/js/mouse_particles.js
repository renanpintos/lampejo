// the main three.js components - Principais componentes
var camera, scene, renderer,

// Para manter o controle da posição do mouse
mouseX = 0, mouseY = 0,

// um array para armazenar as particulas
particles = [];

init();

function init() {

	// parâmetros da câmera:
	// Campo de visão, a relação de aspecto para renderizar a saída, próximo e distante plano de corte. 
	camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 1, 4000 );	
	// Posição padrão é 0,0,0. 
	camera.position.z = 1000;

	
	// A cena contém todos os dados do objeto 3D
	scene = new THREE.Scene();				
	// camera needs to go in the scene 
	scene.add(camera);


	// E o CanvasRenderer procura o que esta na cena para desenha-lo!
	renderer = new THREE.CanvasRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );	
	// the renderer's canvas domElement is added to the body
	document.body.appendChild( renderer.domElement );
	
	
	makeParticles(); 

	 // Adiciona o movimento do mouse ouvinte
	document.addEventListener( 'mousemove', onMouseMove, false );				
	// Processar 30 vezes por segundo (também deve olhar no requestAnimationFrame)
	setInterval(update,1000/30); 

}


// A função de atualização principal, chamada 30 vezes por segundo
function update() {
	updateParticles();
	renderer.render( scene, camera );
}


// Cria um campo aleatório de objetos de partículas			
function makeParticles() { 
	
	var particle, material; 
	var vermelho, branco, preto;

	vermelho = 0xff0000;
	branco = 0xffffff;
	preto = 0x000000

	// Mudança da posição z -1000 (longe)
	// 1000 (onde a câmera está) e adicionar uma partícula aleatória a cada posição. 
	//zpos+=20 - quantidade de pasrticulas
	for ( var zpos= -1000; zpos < 1000; zpos+=20 ) {

		// definição do material e cor (padrão da particula)
		material = new THREE.ParticleCanvasMaterial( { color:0xffffff, program: particleRender } );
		// Fazer a partícula do tipo "material"
		particle = new THREE.Particle(material);

		// Dar-lhe um x aleatório na posição y. Entre -500 e 500 para o x e y
		particle.position.x = Math.random() * 1000 - 500;
		particle.position.y = Math.random() * 1000 - 500;
		// Definir a sua posição z
		particle.position.z = zpos;

		// tamanho das particulas
		particle.scale.x = particle.scale.y = 10;

		// Adicionar a particula na cena
		scene.add( particle );

		// Adicionar a particula na matriz de particulas
		particles.push(particle); 
	}
	
}

// there isn't a built in circle particle renderer 
// so we have to define our own. 

function particleRender( context ) {
	
	// Referência ao contexto do canvas (especificações das pasrticulas)
	context.beginPath();
	// arc maposicao 0,0,1 - neste caso de um arco de 0 a 2pi radianos ou 360º - um círculo completo!
	context.arc( 0, 0, 1, 0,  Math.PI * 2, true );
	context.fill();
};


// moves all the particles dependent on mouse position
function updateParticles() { 
	
	// Iterar cada partícula
	for(var i=0; i<particles.length; i++) {

		particle = particles[i]; 

		// E movê-lo para a frente depende da posição mouseY.
		particle.position.z +=  mouseY * 0.1;

		// Se a partícula estiver muito próximo movê-lo para a parte de trás
		if(particle.position.z>1000) particle.position.z-=2000;
	}

}

// called when the mouse moves
function onMouseMove( event ) {
	// store the mouseX and mouseY position 
	mouseX = event.clientX;
	mouseY = event.clientY;
}
