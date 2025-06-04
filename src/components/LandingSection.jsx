// components/LandingSection.jsx
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import gsap from 'gsap';

const LandingSection = ({ canvasRef, sectionRef }) => {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const geometry = new THREE.TorusGeometry(20, 3, 16, 100);
    const material = new THREE.MeshBasicMaterial({ color: 0x844282, wireframe: true, opacity: 0.8, transparent: true });
    const logoMesh = new THREE.Mesh(geometry, material);
    logoMesh.scale.set(0, 0, 0);
    scene.add(logoMesh);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    const pointLight = new THREE.PointLight(0x793276, 1);
    pointLight.position.set(25, 50, 25);
    scene.add(ambientLight, pointLight);

    camera.position.z = 40;
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enableZoom = false;

    gsap.to(logoMesh.scale, {
      x: 1, y: 1, z: 1,
      duration: 2, ease: 'elastic.out(1, 0.5)',
    });

    const animate = () => {
      requestAnimationFrame(animate);
      logoMesh.rotation.x += 0.005;
      logoMesh.rotation.y += 0.007;
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      scene.clear();
    };
  }, []);

  return (
    <section id="home" ref={sectionRef} className="section landing" aria-label="Landing Section">
      <canvas ref={canvasRef} className="three-canvas" aria-hidden="true" />
      <h1 className="tagline" tabIndex={0}>
        <span className="highlight">Unleash</span> the <span className="highlight">Infinite</span> with <span className="highlight">Infinity X Dynamics</span>
      </h1>
    </section>
  );
};

export default LandingSection;