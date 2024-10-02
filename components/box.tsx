import { useFrame } from '@react-three/fiber/native';
import { useRef, useState } from 'react';
import { Mesh } from 'three';

export default function Box({ position, onCollect }: { position: [number, number, number]; onCollect: () => void }) {
  const mesh = useRef<Mesh>(null); // Correctly typed useRef


  useFrame((_state, delta) => {
    if (mesh.current && !collectd) {
      mesh.current.rotation.y += delta;
    }
  });

  const [collectd, setCollected] = useState(false);

  return (
    !collectd && (
      <mesh ref={mesh} position={position} onClick={() => { setCollected(true); onCollect(); }} >
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color={"royalblue"} />
      </mesh>)
  );
}
