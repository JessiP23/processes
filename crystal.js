// crystallization.js
import * as THREE from 'three';

// Define the simulation parameters
const coolingRate = 0.1;
const initialConcentration = 1.0;
const crystalSize = 0.1;

// Create the 3D scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById('canvas'),
  antialias: true
});

// Create the particle system
const particles = new THREE.Group();
scene.add(particles);

// Simulate the crystallization process
function simulateCrystallization() {
  // Update the crystal size and concentration
  crystalSize += coolingRate * 0.01;
  initialConcentration -= coolingRate * 0.01;

  // Update the particle system
  particles.children.forEach((particle) => {
    particle.scale.set(crystalSize, crystalSize, crystalSize);
    particle.material.color.setHex(0xffffff * initialConcentration);
  });

  // Render the scene
  renderer.render(scene, camera);
}

// Animate the simulation
function animate() {
  requestAnimationFrame(animate);
  simulateCrystallization();
}

animate();