import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text, Sphere } from "@react-three/drei";
import * as THREE from "three";

const skills = [
  "React", "TypeScript", "Node.js", "Python", "AI", "N8N",
  "OpenAI", "TensorFlow", "REST API", "GraphQL", 
  "Supabase", "Firebase", "Tailwind"
];

function SkillParticle({ position, skill, index }: { position: [number, number, number], skill: string, index: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const textRef = useRef<any>(null);

  useFrame((state) => {
    if (meshRef.current && textRef.current) {
      const time = state.clock.getElapsedTime();
      meshRef.current.position.y = position[1] + Math.sin(time + index) * 0.1;
      textRef.current.position.y = position[1] + Math.sin(time + index) * 0.1;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group>
      <Sphere ref={meshRef} args={[0.15, 16, 16]} position={position}>
        <meshStandardMaterial color="#00ccff" emissive="#00ccff" emissiveIntensity={0.5} />
      </Sphere>
      <Text
        ref={textRef}
        position={[position[0], position[1] - 0.3, position[2]]}
        fontSize={0.2}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        {skill}
      </Text>
    </group>
  );
}

function SkillsScene() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002;
    }
  });

  const positions = useMemo(() => {
    return skills.map((_, i) => {
      const phi = Math.acos(-1 + (2 * i) / skills.length);
      const theta = Math.sqrt(skills.length * Math.PI) * phi;
      const radius = 3;
      
      return [
        radius * Math.cos(theta) * Math.sin(phi),
        radius * Math.sin(theta) * Math.sin(phi),
        radius * Math.cos(phi),
      ] as [number, number, number];
    });
  }, []);

  return (
    <group ref={groupRef}>
      {skills.map((skill, i) => (
        <SkillParticle key={skill} position={positions[i]} skill={skill} index={i} />
      ))}
      <Sphere args={[2.5, 32, 32]}>
        <meshBasicMaterial color="#00ccff" wireframe opacity={0.1} transparent />
      </Sphere>
    </group>
  );
}

export const SkillsSphere3D = () => {
  return (
    <section id="skills-3d" className="py-20 px-4 scroll-mt-20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Interactive <span className="gradient-text">Skills</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Explore my technology stack in 3D
        </p>

        <div className="h-[600px] glass-card rounded-lg border border-primary/30 overflow-hidden">
          <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <SkillsScene />
            <OrbitControls enableZoom={true} enablePan={false} />
          </Canvas>
        </div>
      </div>
    </section>
  );
};
