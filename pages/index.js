import { OrbitControls, SpotLight, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import Brain from "/public/assets/Brain";




function Home() {


  return (
    <Canvas id="canvas" camera={{ fov: 60, position: [5, 5, 5] }}>
      <Suspense fallback={null}>
       
        <Stars />
   
        <pointLight position={[20, -10, 10]} intensity="5" color="#560779" />
        <directionalLight color="white" intensity="2" />
        <OrbitControls />
        <Brain />
      
      </Suspense>
    </Canvas>
  );
}

export default Home;
