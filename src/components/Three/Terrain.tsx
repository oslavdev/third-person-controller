import React from 'react';
import * as THREE from 'three';
import { TextureLoader } from 'three/src/loaders/TextureLoader.js'
import {  useLoader } from 'react-three-fiber'
import { usePlane } from 'use-cannon';

const Terrain = () => {

  // const [ref] = usePlane(():any => ({ rotation: [-Math.PI / 2, 0, 0] }));

  const ground = useLoader(TextureLoader, 'public/images/ground.jpg');
  const normal = useLoader(TextureLoader, 'public/images/NormalMap.png');

  ground.wrapS = THREE.RepeatWrapping;
  ground.wrapT = THREE.RepeatWrapping;
  ground.repeat.set(2000, 2000);
  
  return (
    <mesh
      visible
      position={[0, 0, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
      receiveShadow


    >
      <planeBufferGeometry attach="geometry" args={[5000, 5000, 128, 128]} />
      <meshStandardMaterial
        attach="material"
        roughness={1}
        metalness={0}
        map={ground}
        normalMap={normal}
      />
    </mesh>
  )
};

export default Terrain;