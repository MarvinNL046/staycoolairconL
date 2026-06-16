import * as THREE from 'three';

// Mounts a slowly-rotating stylized airco unit into `container`.
// Transparent background so the blue hero shows through. Returns cleanup().
export function mountAircoScene(container: HTMLElement): () => void {
  const width = container.clientWidth || 480;
  const height = container.clientHeight || 320;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(35, width / height, 0.1, 100);
  camera.position.set(0, 0.4, 6);

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(renderer.domElement);

  // Body: rounded indoor unit
  const bodyGeo = new THREE.BoxGeometry(4, 1.1, 1, 4, 1, 1);
  const bodyMat = new THREE.MeshStandardMaterial({ color: '#f4fafe', roughness: 0.45, metalness: 0.1 });
  const body = new THREE.Mesh(bodyGeo, bodyMat);

  // Front face accent strip (StayCool blue)
  const stripGeo = new THREE.BoxGeometry(4.02, 0.18, 1.02);
  const stripMat = new THREE.MeshStandardMaterial({ color: '#2080C0', roughness: 0.3, metalness: 0.2 });
  const strip = new THREE.Mesh(stripGeo, stripMat);
  strip.position.y = -0.42;

  // Louver lines
  const louvers = new THREE.Group();
  for (let i = 0; i < 3; i++) {
    const lGeo = new THREE.BoxGeometry(3.7, 0.04, 1.04);
    const lMat = new THREE.MeshStandardMaterial({ color: '#cfe7f5', roughness: 0.6 });
    const l = new THREE.Mesh(lGeo, lMat);
    l.position.y = -0.1 - i * 0.12;
    louvers.add(l);
  }

  const unit = new THREE.Group();
  unit.add(body, strip, louvers);
  unit.rotation.x = 0.15;
  scene.add(unit);

  // Lighting
  scene.add(new THREE.AmbientLight(0xffffff, 0.7));
  const key = new THREE.DirectionalLight(0xffffff, 1.1);
  key.position.set(3, 4, 5);
  scene.add(key);
  const rim = new THREE.DirectionalLight(0x40b0e0, 0.6);
  rim.position.set(-4, 1, 2);
  scene.add(rim);

  let raf = 0;
  let running = true;
  const animate = () => {
    if (!running) return;
    unit.rotation.y += 0.0035; // slow
    renderer.render(scene, camera);
    raf = requestAnimationFrame(animate);
  };
  animate();

  const onResize = () => {
    const w = container.clientWidth, h = container.clientHeight;
    if (!w || !h) return;
    camera.aspect = w / h; camera.updateProjectionMatrix(); renderer.setSize(w, h);
  };
  window.addEventListener('resize', onResize);

  return () => {
    running = false;
    cancelAnimationFrame(raf);
    window.removeEventListener('resize', onResize);
    renderer.dispose();
    bodyGeo.dispose(); bodyMat.dispose(); stripGeo.dispose(); stripMat.dispose();
    if (renderer.domElement.parentNode) renderer.domElement.parentNode.removeChild(renderer.domElement);
  };
}
