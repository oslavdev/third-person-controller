import React, { Suspense } from 'react'
import { Canvas } from 'react-three-fiber'
import Light from '@/components/Three/Light';
import {  Sky} from "drei";
import Terrain from '@/components/Three/Terrain';
import { PLAYER__MODEL__URL } from '@/config/constants';
import Player from "@/components/Three/Player";

export default function Test() {
  return (
    <Canvas gl={{ antialias: true }} camera={{ near: 0.01, far: 100, fov: 70, aspect: window.innerWidth / window.innerHeight }} className="main" shadowMap >
      <Sky sunPosition={[7, 5, 1]} />
      <Light />
      <Suspense fallback={null}>
        <Player url={PLAYER__MODEL__URL} />
          <Terrain />
      </Suspense>
    </Canvas>
  )
}
