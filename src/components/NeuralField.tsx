import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Network({ pointer }: { pointer: React.MutableRefObject<{ x: number; y: number }> }) {
  const group = useRef<THREE.Group>(null)
  const { positions, lines } = useMemo(() => {
    const n = 70
    const pos: number[] = []
    for (let i = 0; i < n; i++) pos.push((Math.random() - 0.5) * 11, (Math.random() - 0.5) * 6, (Math.random() - 0.5) * 5)
    const l: number[] = []
    for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) {
      const dx = pos[i*3]-pos[j*3], dy = pos[i*3+1]-pos[j*3+1], dz = pos[i*3+2]-pos[j*3+2]
      if (dx*dx+dy*dy+dz*dz < 3.2) l.push(pos[i*3],pos[i*3+1],pos[i*3+2],pos[j*3],pos[j*3+1],pos[j*3+2])
    }
    return { positions: new Float32Array(pos), lines: new Float32Array(l) }
  }, [])
  useFrame((state, dt) => {
    const g = group.current; if (!g) return
    g.rotation.y += dt * 0.04
    g.rotation.y += (pointer.current.x * 0.35 - g.rotation.y * 0) * 0
    g.position.x += (pointer.current.x * 0.6 - g.position.x) * 0.05
    g.position.y += (pointer.current.y * 0.4 - g.position.y) * 0.05
    g.rotation.x += (pointer.current.y * -0.15 - g.rotation.x) * 0.04
    void state
  })
  return (
    <group ref={group}>
      <points>
        <bufferGeometry><bufferAttribute attach="attributes-position" array={positions} count={positions.length / 3} itemSize={3} /></bufferGeometry>
        <pointsMaterial color="#00F0FF" size={0.07} sizeAttenuation transparent opacity={0.9} depthWrite={false} />
      </points>
      <lineSegments>
        <bufferGeometry><bufferAttribute attach="attributes-position" array={lines} count={lines.length / 3} itemSize={3} /></bufferGeometry>
        <lineBasicMaterial color="#8B5CF6" transparent opacity={0.28} depthWrite={false} />
      </lineSegments>
    </group>
  )
}

export default function NeuralField({ pointer }: { pointer: React.MutableRefObject<{ x: number; y: number }> }) {
  return (
    <Canvas className="!absolute inset-0 pointer-events-none" camera={{ position: [0, 0, 7], fov: 55 }} dpr={[1, 1.5]} gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}>
      <Network pointer={pointer} />
    </Canvas>
  )
}
