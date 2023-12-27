import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

//to start: npm run build --> npm start 

const ThreeContainer = () => {
    const mountRef = useRef(null);
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

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

            // Text label using CanvasTexture
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = 256;
            canvas.height = 128;
            ctx.fillStyle = '#ffffff';
            ctx.font = '40px Arial';
            ctx.fillText(`Portal ${i + 1}`, 10, 50);

            const texture = new THREE.CanvasTexture(canvas);
            const spriteMaterial = new THREE.SpriteMaterial({ map: texture });
            const textLabel = new THREE.Sprite(spriteMaterial);
            textLabel.position.set(x, y + 3, z);
            textLabel.scale.set(5, 2.5, 1);
            scene.add(textLabel);
        }

   
          

        const onMouseMove = (event) => {
            mouse.x = (event.clientX / window.innerWidth) * 2-1;
            mouse.y = - (event.clientY / window.innerHeight) * 2+1;
        };
        camera.position.z = 30;

        // Mouse event handling
        const onCanvasClick = (event) => {
            event.preventDefault();
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
            raycaster.setFromCamera(mouse, camera);
            const intersects = raycaster.intersectObjects(portals);
            if(intersects.length > 0) {
                console.log('Portal clicked:', intersects[0].object);
            }
            window.addEventListener('click', onCanvasClick); 
        };

        const rendererDomElement = renderer.domElement;
        rendererDomElement.addEventListener('click', onCanvasClick);
        window.addEventListener('mousemove', onMouseMove);

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);

            // Dynamic glowing effect
            portals.forEach((portal, index) => {
                const time = Date.now() * 0.002 + index;
                portal.material.emissiveIntensity = (Math.sin(time) * 0.5) + 0.5;
            });

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
            window.removeEventListener('click', onCanvasClick);
            mountRef.current.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={mountRef} />;
};

export default ThreeContainer;
//TO DO: 