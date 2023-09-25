import "./styles.css";

import {
  EffectComposer,
  Bloom
} from "@react-three/postprocessing";
import { Canvas } from "@react-three/fiber";
import {
  Image,
  PresentationControls,
  SoftShadows
} from "@react-three/drei";

import Model from "./components/scene/Model";
import Lights from "./components/scene/Lights";
import Overlay from "./components/overlay/Overlay";
import { Suspense } from "react";

export default function App() {
  return (
    <>
      <Overlay />
      <Canvas
        linear
        shadows
        camera={{ position: [7.4, 2, -5] }}
      >
        {/* Postroccessing */}
        <EffectComposer>
          <Bloom
            intensity={0.55}
            luminanceThreshold={0.8}
            luminanceSmoothing={0.2}
          />
        </EffectComposer>

        {/* Shadows and Light setup */}
        <SoftShadows
          enabled
          size={2}
          focus={0}
          samples={10}
        />
        <Lights />

        {/* Static background */}
        <Image
          toneMapped={false}
          scale={125}
          url={"./clouds.jpg"}
          position={[0, 40, 35]}
          rotation={[0, Math.PI, 0]}
        />

        {/* Model */}
        <PresentationControls
          snap
          polar={[-0.1, 0]}
          azimuth={[0, 1.1]}
        >
          <Suspense fallback={null}>
            <Model />
          </Suspense>
        </PresentationControls>
      </Canvas>
    </>
  );
}
