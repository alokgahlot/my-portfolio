import React from "react";
import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  return (
    // Loading component for the fallback

    <Html>
      <span className="canvas-load"></span>
      <p
        style={{
          fontSize: 14,
          fontWeight: 800,
          color: "#f1f1f1",
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
      {/* <sphereGeometry args={[1, 16, 16]} />
      <meshBasicMaterial color="gray" /> */}
    </Html>
  );
};

export default Loader;
