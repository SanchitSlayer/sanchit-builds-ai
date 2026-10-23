import { useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, PerformanceMonitor, PresentationControls } from "@react-three/drei";
import * as THREE from "three";
import { atoms, bonds, kindHex, type Atom } from "@/content/molecule";

// The static drawing uses a 480 x 480 board; this maps it to about 8 x 8 world units.
const SCALE = 1 / 60;
const BOND_RADIUS = 0.025;
const UP = new THREE.Vector3(0, 1, 0);
const CAMERA_Z = 11.2;

const basePosition = (a: Atom) => new THREE.Vector3((a.x - 240) * SCALE, -(a.y - 240) * SCALE, a.z * 1.6);
const radiusOf = (a: Atom) => a.size * SCALE * 0.85;

type SceneProps = {
  reducedMotion: boolean;
  onSelect: (section: string) => void;
};

function Molecule({ reducedMotion, onSelect }: SceneProps) {
  const spin = useRef<THREE.Group>(null);
  const atomRefs = useRef<(THREE.Group | null)[]>([]);
  const bondRefs = useRef<(THREE.Mesh | null)[]>([]);
  const [hovered, setHovered] = useState<string | null>(null);

  const base = useMemo(() => atoms.map(basePosition), []);
  const index = useMemo(() => Object.fromEntries(atoms.map((a, i) => [a.id, i])), []);
  const current = useMemo(() => atoms.map(() => new THREE.Vector3()), []);
  const scratch = useMemo(() => ({ dir: new THREE.Vector3(), mid: new THREE.Vector3() }), []);

  useFrame((state, delta) => {
    // Slow idle spin, paused while the reader is pointing at an atom.
    if (spin.current && !reducedMotion && !hovered) spin.current.rotation.y += delta * 0.12;

    // Scrolling down pulls the atoms apart (up to 35% further from the centre)
    // while the camera eases back, so the molecule loosens without leaving the frame.
    const progress = reducedMotion ? 0 : Math.min(window.scrollY / (window.innerHeight * 0.9), 1);
    const spread = 1 + progress * 0.35;
    state.camera.position.z = CAMERA_Z + progress * 2.6;

    atoms.forEach((a, i) => {
      current[i].copy(base[i]).multiplyScalar(spread);
      const node = atomRefs.current[i];
      if (!node) return;
      node.position.copy(current[i]);
      const target = hovered === a.id ? 1.25 : 1;
      node.scale.setScalar(THREE.MathUtils.damp(node.scale.x, target, 10, delta));
    });

    // Bonds are unit cylinders stretched and turned to join their two atoms.
    bonds.forEach(([from, to], i) => {
      const mesh = bondRefs.current[i];
      if (!mesh) return;
      const p1 = current[index[from]];
      const p2 = current[index[to]];
      scratch.dir.subVectors(p2, p1);
      const length = scratch.dir.length();
      mesh.position.copy(scratch.mid.addVectors(p1, p2).multiplyScalar(0.5));
      mesh.quaternion.setFromUnitVectors(UP, scratch.dir.normalize());
      mesh.scale.set(1, length, 1);
    });
  });

  const setCursor = (value: string) => {
    document.body.style.cursor = value;
  };

  return (
    <group ref={spin}>
      {bonds.map(([from, to], i) => (
        <mesh key={`${from}-${to}`} ref={(m) => (bondRefs.current[i] = m)}>
          <cylinderGeometry args={[BOND_RADIUS, BOND_RADIUS, 1, 8]} />
          <meshStandardMaterial color="#4a525e" roughness={0.6} />
        </mesh>
      ))}

      {atoms.map((a, i) => {
        const r = radiusOf(a);
        const active = hovered === a.id;
        return (
          <group key={a.id} ref={(g) => (atomRefs.current[i] = g)}>
            <mesh
              onPointerOver={(e) => {
                e.stopPropagation();
                setHovered(a.id);
                setCursor("pointer");
              }}
              onPointerOut={() => {
                setHovered((h) => (h === a.id ? null : h));
                setCursor("");
              }}
              onClick={(e) => {
                e.stopPropagation();
                // A drag that ends on an atom is a rotation, not a click.
                if (e.delta > 4) return;
                setCursor("");
                onSelect(a.section);
              }}
            >
              <sphereGeometry args={[r, 32, 32]} />
              <meshStandardMaterial
                color={kindHex[a.kind]}
                emissive={kindHex[a.kind]}
                emissiveIntensity={active ? 0.9 : 0.35}
                roughness={0.35}
                metalness={0.1}
              />
            </mesh>
            {/* Soft halo, like the ring in the flat drawing */}
            <mesh scale={1.45}>
              <sphereGeometry args={[r, 24, 24]} />
              <meshBasicMaterial color={kindHex[a.kind]} transparent opacity={active ? 0.16 : 0.07} depthWrite={false} />
            </mesh>
            <Html
              position={[0, -r - 0.22, 0]}
              center
              zIndexRange={active ? [20, 20] : [10, 0]}
              style={{ pointerEvents: "none" }}
            >
              <div
                aria-hidden
                className={`rounded bg-bg/70 px-1 text-center whitespace-nowrap transition-opacity select-none ${
                  hovered && !active ? "opacity-25" : "opacity-100"
                }`}
              >
                <p className={`font-mono text-[11px] ${active ? "text-text" : "text-muted"}`}>{a.label}</p>
                {active && <p className="mt-0.5 font-mono text-[11px] text-accent-strong">{a.detail}</p>}
              </div>
            </Html>
          </group>
        );
      })}
    </group>
  );
}

type Props = SceneProps & {
  active: boolean;
  onReady: () => void;
};

export default function Molecule3D({ active, onReady, ...scene }: Props) {
  const [dpr, setDpr] = useState(() => Math.min(window.devicePixelRatio, 1.5));

  return (
    <Canvas
      dpr={dpr}
      // Stop drawing entirely when the hero is off screen.
      frameloop={active ? "always" : "never"}
      camera={{ position: [0, 0, CAMERA_Z], fov: 42 }}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      onCreated={() => requestAnimationFrame(onReady)}
      aria-hidden
      // On touch screens, vertical swipes still scroll the page; sideways drags rotate.
      style={{ touchAction: "pan-y" }}
    >
      {/* Drop to 1x resolution if the frame rate falls on a weaker GPU */}
      <PerformanceMonitor onDecline={() => setDpr(1)} />
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 5, 6]} intensity={1.6} />
      <pointLight position={[-4, -2, 3]} intensity={8} color="#2dd4bf" />
      <PresentationControls
        global={false}
        cursor={false}
        speed={1.4}
        polar={[-0.5, 0.5]}
        azimuth={[-Infinity, Infinity]}
        config={{ mass: 1, tension: 170, friction: 26 }}
      >
        <Molecule {...scene} />
      </PresentationControls>
    </Canvas>
  );
}
