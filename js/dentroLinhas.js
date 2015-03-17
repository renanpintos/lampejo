var mouseX = 0, mouseY = 0,

			windowHalfX = window.innerWidth / 2,
			windowHalfY = window.innerHeight / 2,

			SEPARATION = 200,
			AMOUNTX = 10,
			AMOUNTY = 10,

			camera, scene, renderer;
			
			var container, separation = 100, amountX = 50, amountY = 50;
				

			init();
			animate();

			function init() {


				camera = new THREE.PerspectiveCamera( 80, window.innerWidth / window.innerHeight, 1, 4000 );
				camera.position.z = 100;

				scene = new THREE.Scene();
				scene.add(camera);
				
				bolinhas();

				//renderer = new THREE.CanvasRenderer();
				renderer = new THREE.WebGLRenderer({ alpha: true });
				renderer.setSize( window.innerWidth, window.innerHeight );
				renderer.setClearColor( 0x000000, 0);
				
				document.body.appendChild( renderer.domElement );
				
								
				document.addEventListener( 'mousemove', onDocumentMouseMove, false );
				document.addEventListener( 'touchstart', onDocumentTouchStart, false );
				document.addEventListener( 'touchmove', onDocumentTouchMove, false );


				window.addEventListener( 'resize', onWindowResize, false );

			}
			
			function bolinhas() {
				
				var particle;
				// particles
                
                var vermelho, branco, preto;
				vermelho = 0xAA0011;
				branco = 0xffffff;
				preto = 0x000000;
                laranja = 0xFF6633;

				var PI2 = Math.PI * 2;
				//SpriteCanvasMaterial
				var material = new THREE.LineBasicMaterial( {

					color: laranja,
					program: function ( context ) {

						context.beginPath();
						context.arc( 0, 0, 0.5, 0, PI2, true );
						context.fill();

					}

				} );

				var geometry = new THREE.Geometry();
				

				for ( var i = 0; i < 100; i ++ ) {

					//particle = new THREE.Sprite( material );
					particle = new THREE.Mesh(new THREE.CircleGeometry(1, 64), material);
					particle.position.x = Math.random() * 2 - 1;
					particle.position.y = Math.random() * 2 - 1;
					particle.position.z = Math.random() * 2 - 1;
					particle.position.normalize();
					particle.position.multiplyScalar( Math.random() * 10 + 450 );
					particle.scale.x = particle.scale.y = 10;
					scene.add( particle );

					geometry.vertices.push( particle.position );

				}

				// lines

				var line = new THREE.Line( geometry, new THREE.LineBasicMaterial( { color: preto, opacity: 0.5 } ) );
				scene.add( line );
			}

			function onWindowResize() {

				windowHalfX = window.innerWidth / 2;
				windowHalfY = window.innerHeight / 2;

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );

			}

			//

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

			//

			function animate() {
				requestAnimationFrame( animate );

				render();
				renderer.render( scene, camera );

			}

			function render() {

				camera.position.x += ( mouseX - camera.position.x ) * .005;
				camera.position.y += ( - mouseY + 200 - camera.position.y ) * .005;
				//camera.lookAt( scene.position );
				//renderer.render( scene, camera );

			}