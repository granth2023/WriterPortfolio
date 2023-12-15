import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { TextTexture, SpriteMaterial, Sprite } from '@seregpie/three.text-texture';

const ThreeContainer = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);
        const pointLight = new THREE.PointLight(0xffffff, 0.5);
        camera.add(pointLight);

        // Portals creation
        const numPortals = 3;
        const radius = 15;
        const portals = [];
        for (let i = 0; i < numPortals; i++) {
            const angle = (2 * Math.PI / numPortals) * i;
            const x = radius * Math.cos(angle);
            const y = 0;
            const z = radius * Math.sin(angle);

            const geometry = new THREE.TorusGeometry(2, 0.5, 16, 100);
            const material = new THREE.MeshStandardMaterial({ color: 0x00ff00, emissive: 0x00ff00 });
            const portal = new THREE.Mesh(geometry, material);
            portal.position.set(x, y, z);
            scene.add(portal);
            portals.push(portal);

            // Text label
            const textTexture = new TextTexture({
                text: `Portal ${i + 1}`,
                fontFamily: 'Arial',
                fontSize: 40,
                fillColor: '#ffffff'
            });
            const spriteMaterial = new SpriteMaterial({ map: textTexture });
            const textLabel = new Sprite(spriteMaterial);
            textLabel.position.set(x, y + 3, z); // Adjust Y to position above the portal
            textLabel.scale.set(5, 2.5, 1);
            scene.add(textLabel);
        }

        camera.position.z = 30;

        // Mouse event handling
        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();
        const onMouseMove = (event) => {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
        };
        window.addEventListener('mousemove', onMouseMove);

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);

            // Dynamic glowing effect
            portals.forEach((portal, index) => {
                const time = Date.now() * 0.002 + index;
                portal.material.emissiveIntensity = (Math.sin(time) * 0.5) + 0.5;
            });

            // Update raycaster and check for hover
            raycaster.setFromCamera(mouse, camera);
            const intersects = raycaster.intersectObjects(scene.children, true);
            for (let i = 0; i < intersects.length; i++) {
                if (intersects[i].object instanceof Sprite) {
                    intersects[i].object.material.map.fillColor = '#000000';
                }
            }

            renderer.render(scene, camera);
        };
        animate();

        // Handle window resize
        const handleResize = () => {
            renderer.setSize(window.innerWidth, window.innerHeight);
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
        };
        window.addEventListener('resize', handleResize);

        // Cleanup on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', onMouseMove);
            mountRef.current.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={mountRef} />;
};

export default ThreeContainer;
