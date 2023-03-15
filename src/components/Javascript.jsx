import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Jsmark from "./Jsmark";

const Javascript = () => {
  return (
    <>
      <Canvas>
        <Stage environment="city" intensity={0.6}>
          <Jsmark />
        </Stage>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </>
  );
};

export default Javascript;
