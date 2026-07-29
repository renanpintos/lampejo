var mouseX = 0, mouseY = 0,

			windowHalfX = window.innerWidth / 2,
			windowHalfY = window.innerHeight / 2,

			SEPARATION = 200,
			AMOUNTX = 10,
			AMOUNTY = 10,

			camera, scene, renderer;

            var rotationCamera;
			
			var container, separation = 100, amountX = 50, amountY = 50;

            var lines;
				

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
				
				var particle;
				var vermelho, branco, preto;
				vermelho = 0xAA0011;
				branco = 0xffffff;
				preto = 0x000000;
                laranja = 0xFF6633;
                
                var material = new THREE.LineBasicMaterial({color: branco, opacity: 0});

                var geometry = new THREE.Geometry();
                var line;
                lines = [];
                
                        
                
			     for ( var i = 0; i < 4; i ++ ) {
                    
                   geometry.vertices.push(
                        new THREE.Vector3( 0, 0, 0 ),
                        new THREE.Vector3(0, 0,0 ));

                line = new THREE.Line( geometry, material );
                     
                lines.push(line);
                scene.add( line );

				}
				
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

			//

			function animate() {
				requestAnimationFrame( animate );

				render();
				renderer.render( scene, camera );

			}

			function render() {
                
                
                for (var i = 0; i < lines.length; i ++) {
                    var line = lines[i];
                    line.geometry.vertices.push(
                        new THREE.Vector3( 0, 0, 0 ),
                        new THREE.Vector3(0, 0,0 ));
                    scene.add( line );
                }
                
                //linhas();
                
                //camera.position.x += ( mouseX - camera.position.x ) * .001;
				//camera.position.y += ( - mouseY + 200 - camera.position.y ) * .001;
                
                //camera.position.z += (mouseX)*.008;

				//camera.rotateOnAxis((new THREE.Vector3(0, 0, 1)).normalize(), degInRad(0.3));
				
				
				//camera.lookAt( scene.position );
				//renderer.render( scene, camera );

			}
			
			function degInRad(deg) {
				return deg * Math.PI / 180;
}  