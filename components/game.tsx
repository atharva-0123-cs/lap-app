
import { Canvas } from '@react-three/fiber/native';
import { useState } from 'react';
import { View, Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import Box from './box';


export default function Game() {

  const [score, setScore] = useState(0);
  const [totalCubes, setTotalCubes] = useState(5);

  const handleCollect = () => {
    setScore((p) => p + 1);
  }

  const resetGame = () => {
    setScore(0);
    setTotalCubes(5);
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        {/* Game Canvas */}
        <Canvas
          style={{ flex: 1 }}
          camera={{ position: [0, 0, 5], fov: 75 }}
          gl={{ antialias: true }}
        >
          <ambientLight intensity={0.3} />
          <directionalLight color={"white"} position={[0, 5, 5]} />

          {/* Generate cubes */}
          {Array.from({ length: totalCubes }).map((_, index) => (
            <Box
              key={index}
              position={[Math.random() * 4 - 2, Math.random() * 4 - 2, 0]}
              onCollect={handleCollect}
            />
          ))}
        </Canvas>

        {/* Display score */}
        <View
          style={{
            position: 'absolute',
            top: 50,
            left: 0,
            right: 0,
            alignItems: 'center',
          }}
        >
          <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Score: {score}</Text>
          {score === totalCubes && (
            <Text style={{ fontSize: 18, color: 'green' }}>You collected all the cubes!</Text>
          )}
          {score === totalCubes && (
            <Text style={{ fontSize: 18, color: 'blue' }} onPress={resetGame}>
              Tap to play again
            </Text>
          )}
        </View>
      </View>
    </GestureHandlerRootView>
  );
}




