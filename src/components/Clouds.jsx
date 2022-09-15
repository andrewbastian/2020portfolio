import React, { Suspense } from "react";
import "../styles/clouds.css";
import { Canvas } from "@react-three/fiber";
import { Cloud } from "@react-three/drei";

import { lightTheme, Provider } from "@adobe/react-spectrum";
function Clouds() {
  return (
    <Provider theme={lightTheme} colorScheme="light">
      <div className="cloudDiv">
        <Suspense fallback={null}>
          <Canvas camera={{ position: [10, 10, 10] }}>
            <Cloud position={[-4, -2, 0]} args={[3, 2]} />
            <Cloud position={[-4, 2, 0]} args={[3, 2]} />
            <Cloud args={[3, 2]} />
            <Cloud position={[4, -2, 0]} args={[3, 2]} />
            <Cloud position={[4, 2, 0]} args={[3, 2]} />
          </Canvas>
        </Suspense>
      </div>
    </Provider>
  );
}

export default Clouds;
