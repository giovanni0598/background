import { useHelper } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const Lights = () => {
  const directionalLightRef = useRef();
  const pointLightRef = useRef();
  const lightTargetRef = useRef();

  // useHelper(
  //   directionalLightRef,
  //   THREE.DirectionalLightHelper
  // );
  // useHelper(pointLightRef, THREE.PointLightHelper);

  useEffect(() => {
    directionalLightRef.current.target =
      lightTargetRef.current;
  }, []);

  return (
    <>
      {/* 101632 */}
      <object3D
        ref={lightTargetRef}
        position={[-10, 2, 0]}
      />
      <ambientLight color={"#5362AD"} intensity={1} />
      <directionalLight
        ref={directionalLightRef}
        intensity={20}
        color={"#FFAC92"}
        castShadow
        shadow-mapSize={2048}
        shadow-bias={-0.001}
        position={[5, 2.75, 10]}
      />
      <pointLight
        intensity={3.5}
        color={"#19ACFF"}
        position={[-7.5, 1.5, 4]}
        distance={10.2}
      />

      <pointLight
        ref={pointLightRef}
        intensity={3.5}
        color={"#19ACFF"}
        position={[5, 2, 3]}
        distance={6.85}
      />

      {/* <pointLight
        ref={pointLightRef}
        intensity={5.5}
        color={"#19ACFF"}
        position={[0, 0, 1]}
        distance={3.5}
      /> */}
    </>
  );
};

export default Lights;
