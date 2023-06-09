/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 cssmark.gltf --transform
Author: Erik Egnatosyan (https://sketchfab.com/sans.egnatosyan)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/css-logo-3d-model-17b34c2b98714c6799544939f476eed3
Title: CSS logo 3d model
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/javascriptlogo.glb");
  console.log(nodes, "노드");
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          geometry={nodes["Curve002"].geometry}
          material={materials["Material.001"]}
          position={[0, 7.94, 18.1]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[100, 100, 100]}
        />
        <mesh
          geometry={nodes["Curve004"].geometry}
          material={materials["Material.001"]}
          position={[0.11, 7.95, 18.1]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[100, 100, 100]}
        />
      </group>
    </group>
  );
}
useGLTF.preload("/javascriptlogo.glb");
