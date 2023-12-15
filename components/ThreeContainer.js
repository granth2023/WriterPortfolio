import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeContainer = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        //Lighting effect
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);
        const pointLight = new THREE.PointLight(0xffffff, 0.5);
        camera.add(pointLight);


        
        //add a simple object cube)
        const geometry = new THREE.TorusGeometry(2, 0.5, 16, 100);
        const material  = new THREE.MeshStandardMaterial({ color: 0x00ff00, emissive: 0x00ff00 });
        // const portal = new THREE.Mesh(geometry, material);
        // scene.add(portal);

        // camera.position.z = 5;

        //create and position portals
        const numPortals = 3;
        const radius = 5;
        for( let i = 0;, i < numPortals; i++){
            const angle = (Math.PI / (numPortals -1)) * i;
            const x = raidus * Math.cos(angle);
            const y =0;
            const z = radius * Math.sin(angle) - radius;
        }


        //animation loop


        const animate = () => {
            requestAnimationFrame(animate);
            portal.rotation.x += 0.01;
            portal.rotation.y += 0.01;
            renderer.render(scene, camera);
        };
        animate();

        //handle window resize

        const handleResize = () => {
            renderer.setSize(window.innerWidth, window.innerHeight);
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
        };
            window.addEventListener('resize', handleResize);

        //cleanup on unmount

        return () => {
            window.removeEventListener('resize', handleResize);
            mountRef.current.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={mountRef}/>;
}

export default ThreeContainer; 
