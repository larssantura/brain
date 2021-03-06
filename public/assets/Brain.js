/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/Brain.glb");
  console.log(group.current);

  useFrame(({ clock }) => {
    group.current?.rotation.y = clock.getElapsedTime() / 3;
    group.current?.position.y = -1
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes["default"].geometry} material={materials.ffc2c2} />
    </group>
  );
}

useGLTF.preload("/Brain.glb");
