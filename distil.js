// distillation.js
import * as THREE from 'three';

// Define the simulation parameters
const boilingPoint1 = 100;
const boilingPoint2 = 200;
const initialComposition = [0.5, 0.5];

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

// Simulate the distillation process
function simulateDistillation() {
  // Update the composition and temperature
  initialComposition[0] += 0.01;
  initialComposition[1] -= 0.01;

  // Update the particle system
  particles.children.forEach((particle) => {
    particle.material.color.setHex(0xffffff * initialComposition[0]);
    particle.scale.set(0.1 * initialComposition[1], 0.1 * initialComposition[1], 0.1 * initialComposition[1]);
  });

  // Render the scene
  renderer.render(scene, camera);
}

// Animate the simulation
function animate() {
  requestAnimationFrame(animate);
  simulateDistillation();
}

animate();