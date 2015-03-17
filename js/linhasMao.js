var mouseX = 0, mouseY = 0,

			windowHalfX = window.innerWidth / 2,
			windowHalfY = window.innerHeight / 2,
			maoEsquerda = -1170,
			maoDireita = 870,
			alturaE = 50,
			alturaD = 0,

			SEPARATION = 200,
			AMOUNTX = 10,
			AMOUNTY = 10,

			camera, scene, renderer;

            var rotationCamera;
			
			var container, separation = 100, amountX = 50, amountY = 50;

			var particle;
				var vermelho, branco, preto;
				vermelho = 0xAA0011;
				branco = 0xffffff;
				preto = 0x000000;
                laranja = 0xFF6633;
                
                var material = new THREE.LineBasicMaterial({color: branco, opacity: 0});

                var line1, line2;
				
				var obj = new THREE.Object3D();
				
				var geometry1 = new THREE.Geometry();
				var geometry2 = new THREE.Geometry();
				var geometry3 = new THREE.Geometry();
				var geometry4 = new THREE.Geometry();
				var geometry5 = new THREE.Geometry();
				var geometry6 = new THREE.Geometry();
				
				var geometry7 = new THREE.Geometry();
				var geometry8 = new THREE.Geometry();
				var geometry9 = new THREE.Geometry();
				var geometry10 = new THREE.Geometry();
				
				geometry1.vertices.push(
                        new THREE.Vector3( (maoEsquerda -30), alturaE, 0 ),
                        new THREE.Vector3(0, 0, 0));
						
				geometry2.vertices.push(
                        new THREE.Vector3( maoEsquerda, alturaE, 0 ),
                        new THREE.Vector3(0, 0, 0));
						
				geometry3.vertices.push(
                        new THREE.Vector3( (maoEsquerda + 30), alturaE, 0 ),
                        new THREE.Vector3(0, 0, 0));
						
				geometry7.vertices.push(
                        new THREE.Vector3( (maoEsquerda + 60), alturaE, 0 ),
                        new THREE.Vector3(0, 0, 0));
						
				geometry8.vertices.push(
                        new THREE.Vector3( (maoEsquerda + 90), alturaE, 0 ),
                        new THREE.Vector3(0, 0, 0));
						
						
						
				geometry4.vertices.push(
                        new THREE.Vector3( (maoDireita + 30), alturaD, 0 ),
                        new THREE.Vector3(0, 0, 0));
						
				geometry5.vertices.push(
                        new THREE.Vector3( maoDireita, alturaD, 0 ),
                        new THREE.Vector3(0, 0, 0));
						
				geometry6.vertices.push(
                        new THREE.Vector3( (maoDireita -30), alturaD, 0 ),
                        new THREE.Vector3(0, 0, 0));
						
				geometry9.vertices.push(
                        new THREE.Vector3( maoDireita + 60, alturaD, 0 ),
                        new THREE.Vector3(0, 0, 0));
						
				geometry10.vertices.push(
                        new THREE.Vector3( (maoDireita - 60), alturaD, 0 ),
                        new THREE.Vector3(0, 0, 0));

                
				line1 = new THREE.Line( geometry1, material );
				line2 = new THREE.Line( geometry2, material );
				line3 = new THREE.Line( geometry3, material );
				line4 = new THREE.Line( geometry4, material );
				line5 = new THREE.Line( geometry5, material );
				line6 = new THREE.Line( geometry6, material );
				line7 = new THREE.Line( geometry7, material );
				line8 = new THREE.Line( geometry8, material );
				line9 = new THREE.Line( geometry9, material );
				line10 = new THREE.Line( geometry10, material );
				
				

			init();
			animate();

			function init() {


				camera = new THREE.PerspectiveCamera( 80, window.innerWidth / window.innerHeight, 1, 4000 );
				camera.position.z = 1000;
                
 
				scene = new THREE.Scene();
				scene.add(camera);
				
				linhas();

				renderer = new THREE.WebGLRenderer({ alpha: true });
				renderer.setSize( window.innerWidth, window.innerHeight );
				renderer.setClearColor( 0x000000, 0);
				
				document.body.appendChild( renderer.domElement );
							
				document.addEventListener( 'mousemove', onDocumentMouseMove, false );
				document.addEventListener( 'touchstart', onDocumentTouchStart, false );
				document.addEventListener( 'touchmove', onDocumentTouchMove, false );


				window.addEventListener( 'resize', onWindowResize, false );

			}
			
			function linhas() {
				
				
				
				scene.add(line1);
				scene.add(line2);
				scene.add(line3);
				scene.add(line4);
				scene.add(line5);
				scene.add(line6);
				scene.add(line7);
				scene.add(line8);
				scene.add(line9);
				scene.add(line10);
								
				
			}

			function onWindowResize() {

				windowHalfX = window.innerWidth / 2;
				windowHalfY = window.innerHeight / 2;

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );

			}


			function onDocumentMouseMove(event) {

				mouseX = event.clientX - windowHalfX;
				mouseY = event.clientY - windowHalfY;

			}

			function onDocumentTouchStart( event ) {

				if ( event.touches.length > 1 ) {

					event.preventDefault();

					mouseX = event.touches[ 0 ].pageX - windowHalfX;
					mouseY = event.touches[ 0 ].pageY - windowHalfY;

				}

			}

			function onDocumentTouchMove( event ) {

				if ( event.touches.length == 1 ) {

					event.preventDefault();

					mouseX = event.touches[ 0 ].pageX - windowHalfX;
					mouseY = event.touches[ 0 ].pageY - windowHalfY;

				}

			}

			function animate() {
				requestAnimationFrame( animate );

				render();
				renderer.render( scene, camera );

			}

			function render() {
                	
				geometry1.vertices[1].x = mouseX;
				geometry1.vertices[1].y = -mouseY*2; 
				
				geometry2.vertices[1].x = mouseX;
				geometry2.vertices[1].y = -mouseY*2;
				
				geometry3.vertices[1].x = mouseX;
				geometry3.vertices[1].y = -mouseY*2; 
				
				geometry4.vertices[1].x = mouseX;
				geometry4.vertices[1].y = -mouseY*2;
				
				geometry5.vertices[1].x = mouseX;
				geometry5.vertices[1].y = -mouseY*2; 
				
				geometry6.vertices[1].x = mouseX;
				geometry6.vertices[1].y = -mouseY*2;
				
				geometry7.vertices[1].x = mouseX;
				geometry7.vertices[1].y = -mouseY*2; 
				
				geometry8.vertices[1].x = mouseX;
				geometry8.vertices[1].y = -mouseY*2;
				
				geometry9.vertices[1].x = mouseX;
				geometry9.vertices[1].y = -mouseY*2; 
				
				geometry10.vertices[1].x = mouseX;
				geometry10.vertices[1].y = -mouseY*2;
				
				
				geometry1.verticesNeedUpdate = true;
				geometry2.verticesNeedUpdate = true;
				geometry3.verticesNeedUpdate = true;
				geometry4.verticesNeedUpdate = true;
				geometry5.verticesNeedUpdate = true;
				geometry6.verticesNeedUpdate = true;
				geometry7.verticesNeedUpdate = true;
				geometry8.verticesNeedUpdate = true;
				geometry9.verticesNeedUpdate = true;
				geometry10.verticesNeedUpdate = true;

			}
			
			function degInRad(deg) {
				return deg * Math.PI / 180;
}  