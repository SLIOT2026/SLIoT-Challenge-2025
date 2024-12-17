import { shape } from "@/assets";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeJSAnimation = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    let camera, scene, renderer, mesh, mesh2;
    let animationFrameId;

    const init = () => {
      const container = containerRef.current;

      // Create a canvas element dynamically
      const canvas = document.createElement("canvas");
      canvasRef.current = canvas; // Store reference for cleanup
      container.appendChild(canvas);

      renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setPixelRatio(window.devicePixelRatio || 2);

      scene = new THREE.Scene();
      camera = new THREE.OrthographicCamera(-10, 10, 10, -10, -10, 10);

      const textureLoader = new THREE.TextureLoader();
      const texture = textureLoader.load(shape);
      const texture2 = textureLoader.load();

      const material = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
      });

      const material2 = new THREE.MeshBasicMaterial({
        map: texture2,
        transparent: true,
      });

      const geometry = new THREE.SphereGeometry(9.98, 50, 50);
      mesh = new THREE.Mesh(geometry, material);

      const geometry2 = new THREE.SphereGeometry(10, 50, 50);
      mesh2 = new THREE.Mesh(geometry2, material2);

      mesh.rotation.y = -Math.PI / 2;
      mesh2.rotation.y = -Math.PI / 2;

      scene.add(mesh2);
      scene.add(mesh);
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      render();
    };

    const render = () => {
      mesh2.rotation.y -= 0.0009;
      mesh.rotation.y += 0.0009;
      renderer.render(scene, camera);
    };

    const handleMouseMove = (event) => {
      const posX =
        (((360 * (event.pageX - window.innerWidth / 2)) / window.innerWidth) *
          (Math.PI / 180)) /
          2 -
        Math.PI / 2;

      const posY =
        ((360 * (event.pageY - window.innerHeight / 8)) / window.innerHeight) *
          (Math.PI / 180) -
        Math.PI / 2;

      mesh2.rotation.y = -posX - Math.PI;
      mesh.rotation.y = posX;

      mesh2.rotation.x = posY / 10;
      mesh.rotation.x = posY / 10;
    };

    // Initialize the Three.js scene
    init();
    animate();

    // Event listeners for mouse movement
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();

      // Remove the canvas element from DOM
      if (canvasRef.current) {
        containerRef.current.removeChild(canvasRef.current);
        canvasRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: "200px", // Adjust the width as needed
        height: "200px", // Adjust the height as needed
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    ></div>
  );
};

export default ThreeJSAnimation;
