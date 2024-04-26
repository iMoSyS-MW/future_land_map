<script>
	import { Router, Link } from 'svelte-routing';
    import { onMount, onDestroy } from 'svelte';
    import { fade } from 'svelte/transition';
    import * as THREE from 'three';
    
    let container;
    let camera, scene, renderer;
    let earthMesh, dotMesh;
    let frameId;
    let zoomLevel = 20;

    // let sphere, camera, scene, renderer, container;
  let containerWidth, containerHeight; //!
  let snackbarVisible = false; //!
  let flashInterval; //!

  let lastScrollTop = 0; //!
  let isContentVisible = true; //!

    
    onMount(() => {
      containerWidth = window.innerWidth;
      containerHeight = window.innerHeight;
      containerWidth = container.clientWidth;
      containerHeight = container.clientHeight;
      // Set the size of the sphere to be 90% of the window width
      // const sphereRadius = containerWidth * 0.9; //!
      const sphereRadius = Math.min(containerWidth, containerHeight) * 0.90;
      const initialScale = 1; // Starting scale of the sphere
    
      console.log(`radius ${sphereRadius}`);
      scene = new THREE.Scene();
      scene.background = new THREE.Color(0xffffff); // Set a background color //!
      
      //Init Camera
      // camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
      camera = new THREE.PerspectiveCamera(75, containerWidth / containerHeight, 0.1, 1000); //!
      camera.position.z = sphereRadius; // Position camera based on sphere size //!
      // camera.lookAt(scene.position); // Ensure the camera is always looking at the center of the scene
      
      // renderer = new THREE.WebGLRenderer();
      // renderer.setSize(container.clientWidth, container.clientHeight);
      // container.appendChild(renderer.domElement);

      // Renderer
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(containerWidth, containerHeight);
      renderer.setClearColor(0x000000, 0); // Use setClearColor with alpha 0 for transparency
      container.appendChild(renderer.domElement);

      // Apply gamma correction for realistic light intensity
      renderer.gammaFactor = 2.2;
      renderer.gammaOutput = true;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.0;
      
      // Earth texture
      const textureLoader = new THREE.TextureLoader();
      const earthTexture = textureLoader.load('/assets/images/mars.jpeg'); 
      const normalMap = textureLoader.load('/assets/images/mars_normal.jpeg');

        // Material setup with texture and normal map
        const earthMaterial = new THREE.MeshStandardMaterial({
            map: earthTexture,
            normalMap: normalMap,
            shininess: 100,
            metalness: 1.0, // Adjust for shininess
            roughness: 0.7, // Lower roughness for shiny surface
            clearcoat: 1.0  // Use clearcoat for an additional glossy layer
        });
        
      const earthGeometry = new THREE.SphereGeometry(sphereRadius * .6, 64, 64);
      earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
      earthMesh.scale.set(initialScale, initialScale, initialScale);
      scene.add(earthMesh);

      // Lighting
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.75); // Soft white light
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xff9330, 5);
      directionalLight.position.set(0, 0, 15);
      scene.add(directionalLight);

      const sunlight = new THREE.PointLight(0xffddaa, 1, 100000);
      sunlight.position.set(15, 3, 5);
      // scene.add(sunlight);

      // Optional glow effect for atmosphere
      const atmosphereGeometry = new THREE.SphereGeometry(2.1, 64, 64); // Slightly larger than the Mars sphere
      const atmosphereMaterial = new THREE.MeshBasicMaterial({
        color: 0xffaa55,
        transparent: true,
        opacity: 0.2,
        side: THREE.BackSide // Render on the inside of the atmosphere geometry
      });
      const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
      // scene.add(atmosphere);


    // Flashing dot sprite
    const dotGeometry = new THREE.SphereGeometry(0.9, 32, 32);
    const dotMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const dotMesh = new THREE.Mesh(dotGeometry, dotMaterial);
    dotMesh.position.set(5.2, 0, 0);
    earthMesh.add(dotMesh);
   
      // camera.position.z = zoomLevel;
  
      // Handle scroll events to zoom in and out
      window.addEventListener('wheel', event => {
        // event.preventDefault();
        // zoomLevel += event.deltaY * -0.05;
        // zoomLevel = Math.max(Math.min(zoomLevel, 50), 10);
        // camera.position.z = zoomLevel;
    });
  
      // Animation loop
      function animate() {
        frameId = requestAnimationFrame(animate);
        
        // Rotate the Earth
        earthMesh.rotation.y += 0.0005;
        atmosphere.rotation.y += 0.0005;

        dotMaterial.opacity = Math.abs(Math.sin(performance.now() * 0.003));
        dotMaterial.transparent = dotMaterial.opacity < 1;
        
        renderer.render(scene, camera);
      }
  
      animate();

      const sphereScreenHeight = calculateSphereScreenHeight(camera, earthMesh);
      console.log(`Sphere screen height: ${sphereScreenHeight}px`);
      // focusCameraOnBottomOfSphere(camera, earthMesh);

  
      function handleScroll() {
        const scaleFactor = window.scrollY / 1000; // Example scaling factor
        // Ensure the sphere grows but also has a limit
        const newScale = Math.max(1, initialScale + scaleFactor);
        earthMesh.scale.set(newScale, newScale, newScale);

      //   // Calculate the necessary camera Z-position
      // const sphereDiameter = earthMesh.geometry.parameters.radius * 2 * newScale;
      // const cameraZPosition = calculateCameraZPosition(sphereDiameter, camera.fov, window.innerHeight);
      // camera.position.z = cameraZPosition;

      // Move the camera upward based on the scroll, making the sphere appear to move down
      // The rate of movement can be adjusted by changing the multiplier of scrollY
      camera.position.y = initialCameraY + (scrollY * 0.005); // Example rate, adjust as needed

      // Optionally, adjust the camera's Z position to keep the growing sphere in frame
      // This step is necessary if the sphere grows large enough to be clipped by the viewport
      camera.position.z = 20 + (scrollY * 0.01); // Adjust the multiplier as needed

      // Ensure the camera still points at the center of the sphere
      camera.lookAt(sphere.position);

      }

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('wheel', handleScroll);
        renderer.dispose();
        scene.dispose();
        camera.dispose();
        earthMesh.geometry.dispose();
        earthMesh.material.dispose();
        dotMesh.geometry.dispose();
        dotMesh.material.dispose();
        if (frameId !== undefined) cancelAnimationFrame(frameId);
      };
    });
  
    onDestroy(() => {
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    });

    function calculateCameraZPosition(objectSize, fov, screenHeight) {
      const fovInRadians = fov * (Math.PI / 180);
      // Basic trigonometry to ensure the entire object is viewable
      // Adjust the divisor as needed to change how much of the object fills the view
      const distance = (objectSize / 2) / Math.tan(fovInRadians / 2);
      return distance;
    }

    function calculateSphereScreenHeight(camera, sphere) {
      // Assumes the sphere's scale is uniform in all directions
      const sphereRadius = sphere.geometry.parameters.radius * sphere.scale.x;
      const distance = camera.position.distanceTo(sphere.position);

      // Calculate the sphere's actual diameter as seen from the camera
      const vFOV = camera.fov * Math.PI / 180; // Convert vertical FOV to radians
      const sphereHeightAtDistance = 2 * Math.tan(vFOV / 2) * distance; // Full height of view at the distance of the sphere

      // Calculate the sphere's screen height based on its proportion of the view
      const screenHeight = window.innerHeight; // The height of the canvas/screen
      const sphereScreenHeight = (sphereRadius * 2 / sphereHeightAtDistance) * screenHeight;

      return sphereScreenHeight;
    }


    function focusCameraOnBottomOfSphere(camera, sphere) {
        const sphereRadius = sphere.geometry.parameters.radius;
        const spherePosition = sphere.position; // Assuming the sphere might not be at the origin

        // Position the camera slightly above and behind the bottom of the sphere
        // Adjust these values based on your specific needs
        camera.position.set(spherePosition.x, spherePosition.y + sphereRadius * 1.5, spherePosition.z + sphereRadius * 1.5);
        
        // Now, make the camera look at the bottom of the sphere
        // Adjust the y value to focus more precisely on the part you're interested in
        const targetPosition = new THREE.Vector3(spherePosition.x, spherePosition.y - sphereRadius, spherePosition.z);
        camera.lookAt(targetPosition);

        // If using OrbitControls or similar, you may want to update them
        // controls.target.set(targetPosition.x, targetPosition.y, targetPosition.z);
        // controls.update();
    }


  </script>
  
  <main>
    <div bind:this={container} id="sphere-container" style="background-color: transparent !important;"></div>
    <div id="snackbar" class="text-center" in:fade={{ delay: 300, duration: 600 }} style="background-color: transparent; !important">
      {#if isContentVisible}
        <div id="content">
          <h1 class="mt-5 mb-3 fw-bolder">Future EXPO (FXPO)</h1>
          <div class="border-dashed-y d-flex justify-content-between">
            <span>18.38°N 77.58°</span>
            <span>Ø 47.5km</span>
            <span>15 665 plots</span>
          </div>

          <div class="row mt-3">
            <div class="col-md-6">
              <p>
                The lake in the crater was present when valley networks were forming on Mars. Besides having a delta, the crater shows
              </p>
            </div>
            <div class="col-md-6">
              <p>
                point bars and inverted channels. From a study of the delta and channels, it was concluded that the lake inside the crater.
              </p>
            </div>

            <a href="/fxpo" rel="external" class="btn btn-light" style="border: 1px solid black;">Explore FXPO Map</a>
			
		</div>
          
        </div>
      {/if}
    </div>

    <div class="d-none">
      <p>LANDMAP</p>

          <!-- The "Scroll up" text with the animating dot -->
          <div id="scroll-up-box">
            <div class="scroll-up-dot">•</div>
          </div>
          <p> Scroll up</p>
    </div>
  </main>
  
  <style>
    .border-dashed-y {
      border-bottom: 1px dashed silver;
      border-top: 1px dashed silver;
      padding: 7px 0;
    }

    #snackbar {
      position: fixed;
      bottom: 0;
      width: 100%;
      height: 50%;
      align-items: center;
      backdrop-filter: blur(10px);
      background-color: rgba(255, 255, 255, 0.9) !important;
	  border-top-right-radius: 30px;
	  border-top-left-radius: 30px;
    }

    #snackbar #content {
      width: 540px;
      margin: 0 auto;
    }
    #scroll-up-box {
      width: 15px;
      margin: 0 auto;
      border-radius: 10px;
      border: 1px solid black;
    }
    /* Custom CSS for animations and styling */
    .scroll-up-dot {
      animation: dot-animation 2s infinite;
    }

    /* Add keyframes for dot animation */
    @keyframes dot-animation {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
    

    div#sphere-container {
      width: 100%;
      /* min-height: 100vh; Adjust height as needed */
      min-height: 100vh;
      z-index: 10;
    }

	@media only screen and (max-width: 768px) {
		#snackbar #content {
			width: 90%;
		}
	}
  </style>



  