// reactor.js
import * as THREE from 'three';

// Define the simulation parameters
const reactionRate = 0.1;
const initialConcentration = 1.0;

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

// Simulate the reactor reaction
function simulateReactor() {
  // Update the reactant concentration and product formation
  initialConcentration -= reactionRate * 0.01;

  // Update the particle system
  particles.children.forEach((particle) => {
    particle.material.color.setHex(0xffffff * initialConcentration);
    particle.scale.set(0.1 * initialConcentration, 0.1 * initialConcentration, 0.1 * initialConcentration);
  });

  // Render the scene
  renderer.render(scene, camera);
}

// Animate the simulation
function animate() {
  requestAnimationFrame(animate);
  simulateReactor();
}

animate();