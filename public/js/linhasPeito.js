var mouseX = 0, mouseY = 0,

			windowHalfX = window.innerWidth / 2,
			windowHalfY = window.innerHeight / 2,

			SEPARATION = 200,
			AMOUNTX = 10,
			AMOUNTY = 10,

			camera, scene, renderer;

            var rotationCamera;
			
			var container, separation = 100, amountX = 50, amountY = 50;
			
			var obj = new THREE.Object3D();			

			init();
			animate();

			function init() {


				camera = new THREE.PerspectiveCamera( 80, window.innerWidth / window.innerHeight, 1, 4000 );
				camera.position.z = 1000;
                
                
				

				scene = new THREE.Scene();
				scene.add(camera);
				
				//linhas();

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
                
                 geometry.vertices.push(
                        new THREE.Vector3( 0, 0, 0 ),
                        new THREE.Vector3( mouseX, -mouseY*1.5, 500 ));

                line = new THREE.Line( geometry, material );
                //scene.add( line )
				obj.position.y = 0;
				obj.position.x = -180;
				obj.add( line )
				scene.add(obj);
				
				
                
                /*geometry.vertices.push(
                        new THREE.Vector3( -100, 0, 0 ),
                        new THREE.Vector3( 0, 100, 0 ),
                        new THREE.Vector3( 100, 0, 0 ));*/
                /*geometry.vertices.push(
                        new THREE.Vector3( 0, 0, 0 ),
                        new THREE.Vector3( 100, 100, 0 ));

                var line = new THREE.Line( geometry, material );
                scene.add( line );*/
                
			     /*for ( var i = 0; i < 4; i ++ ) {
                    
                   geometry.vertices.push(
                        new THREE.Vector3( 0, 0, 0 ),
                        new THREE.Vector3( 0, mouseX, 1000 ));

                line = new THREE.Line( geometry, material );
                scene.add( line );

				}*/
				
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
                
                linhas();
                //scene.add(obj);
				//obj.position.y = 0;
				//obj.position.x = -180;
				
                //camera.position.x += ( mouseX - camera.position.x ) * .001;
				//camera.position.y += ( - mouseY + 200 - camera.position.y ) * .001;
                
                //camera.position.z += (mouseX)*.008;

				obj.rotateOnAxis((new THREE.Vector3(0, 0, 1)).normalize(), degInRad(0.3));
				
				
				//camera.lookAt( scene.position );
				//renderer.render( scene, camera );

			}
			
			function degInRad(deg) {
				return deg * Math.PI / 180;
}  