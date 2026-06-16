import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

// Loads a glTF/GLB airco model into `container` and slowly rotates it.
// Transparent background so the blue hero shows through.
// REJECTS if the model can't be loaded (e.g. file not present yet) — the caller
// then keeps the static poster image instead of showing an empty canvas.
// Returns a cleanup() function on success.
export async function mountAircoScene(
  container: HTMLElement,
  modelUrl: string,
): Promise<() => void> {
  // Load first — if this rejects, we never touch the DOM (poster stays).
  const loader = new GLTFLoader();
  const gltf = await loader.loadAsync(modelUrl);
  const model = gltf.scene;

  const width = container.clientWidth || 480;
  const height = container.clientHeight || 320;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(35, width / height, 0.1, 100);
  camera.position.set(0, 0.3, 6);

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.1;
  container.appendChild(renderer.domElement);

  // Image-based lighting so glTF PBR materials look realistic (soft reflections).
  const pmrem = new THREE.PMREMGenerator(renderer);
  const envTex = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environment = envTex;

  // Normalize: center the model at the origin and scale it to a consistent size,
  // so however you export from Blender (scale/offset) it always fits nicely.
  const box = new THREE.Box3().setFromObject(model);
  const size = box.getSize(new THREE.Vector3());
  const center = box.getCenter(new THREE.Vector3());
  const maxDim = Math.max(size.x, size.y, size.z) || 1;
  const scale = 3.6 / maxDim;
  model.position.sub(center);          // recenter
  const pivot = new THREE.Group();
  pivot.add(model);
  pivot.scale.setScalar(scale);
  pivot.rotation.x = 0.12;
  scene.add(pivot);

  // A little direct light on top of the IBL for crisp highlights.
  scene.add(new THREE.AmbientLight(0xffffff, 0.25));
  const key = new THREE.DirectionalLight(0xffffff, 1.0);
  key.position.set(3, 4, 5);
  scene.add(key);
  const rim = new THREE.DirectionalLight(0x40b0e0, 0.5);
  rim.position.set(-4, 1, 2);
  scene.add(rim);

  let raf = 0;
  let running = true;
  const animate = () => {
    if (!running) return;
    pivot.rotation.y += 0.0035; // slow
    renderer.render(scene, camera);
    raf = requestAnimationFrame(animate);
  };
  animate();

  const onResize = () => {
    const w = container.clientWidth, h = container.clientHeight;
    if (!w || !h) return;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  };
  window.addEventListener('resize', onResize);

  return () => {
    running = false;
    cancelAnimationFrame(raf);
    window.removeEventListener('resize', onResize);
    // Dispose every geometry/material/texture the model brought in.
    model.traverse((obj) => {
      const mesh = obj as THREE.Mesh;
      if (mesh.geometry) mesh.geometry.dispose();
      const mat = mesh.material as THREE.Material | THREE.Material[] | undefined;
      if (Array.isArray(mat)) mat.forEach((m) => m.dispose());
      else if (mat) mat.dispose();
    });
    envTex.dispose();
    pmrem.dispose();
    renderer.dispose();
    if (renderer.domElement.parentNode) {
      renderer.domElement.parentNode.removeChild(renderer.domElement);
    }
  };
}
