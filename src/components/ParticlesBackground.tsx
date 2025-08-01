// src/components/ParticlesBackground.tsx
"use client";

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { useRef, useState } from 'react';
import * as random from 'maath/random';

export function ParticlesBackground() {
  return (
    <div className="fixed inset-0 -z-50">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars />
      </Canvas>
    </div>
  );
}

function Stars() {
  const ref = useRef<any>();
  const { viewport } = useThree();

  // The number of points must be a multiple of 3 for x, y, z coordinates.
  // 5001 is divisible by 3. This fixes the NaN error.
  const [sphere] = useState(() => 
    random.inSphere(new Float32Array(5001), { radius: 1.5 })
  );
  
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;

      // Mouse interaction to make it feel more dynamic
      const x = (state.mouse.x * viewport.width) / 100;
      const y = (state.mouse.y * viewport.height) / 100;
      ref.current.rotation.x += (y - ref.current.rotation.x) * 0.01;
      ref.current.rotation.y += (-x - ref.current.rotation.y) * 0.01;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial 
          transparent
          color="#8B5CF6"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}
