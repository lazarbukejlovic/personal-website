import { Suspense, useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { pointer } from "@/lib/pointer";

useGLTF.preload("/models/robot.glb");

// Pre-allocated reusables — avoid per-frame GC
const _euler = new THREE.Euler(0, 0, 0, "YXZ");
const _quat  = new THREE.Quaternion();

// ─── Robot ────────────────────────────────────────────────────────────────────
//
// No AnimationMixer / useAnimations.
// The shared useGLTF cache means playing the clip mutates bone positions on the
// cached scene object; subsequent mounts then store corrupted "bind" poses.
// Instead, arm/shoulder motion is driven manually via sine waves — guaranteed
// stable, and the robot can never be displaced off-screen by root motion.

function Robot() {
  const rootRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/models/robot.glb");

  // ── Scale / centering ────────────────────────────────────────────────────
  const [scale, centerY] = useMemo(() => {
    const box    = new THREE.Box3().setFromObject(scene);
    const size   = new THREE.Vector3();
    const center = new THREE.Vector3();
    box.getSize(size);
    box.getCenter(center);
    const s = 2.4 / (size.y || 1);
    return [s, center.y * s];
  }, [scene]);

  // ── Material upgrade — chrome/glass look ─────────────────────────────────
  useMemo(() => {
    scene.traverse((obj) => {
      if (!(obj as THREE.Mesh).isMesh) return;
      const mesh = obj as THREE.Mesh;
      mesh.castShadow    = true;
      mesh.receiveShadow = true;
      const srcArr   = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
      const upgraded = srcArr.map((m) => {
        const src = m as THREE.MeshStandardMaterial;
        return new THREE.MeshPhysicalMaterial({
          map:                src.map,
          normalMap:          src.normalMap,
          normalScale:        src.normalScale ?? new THREE.Vector2(1, 1),
          metalnessMap:       src.metalnessMap,
          roughnessMap:       src.roughnessMap,
          aoMap:              src.aoMap,
          aoMapIntensity:     src.aoMapIntensity ?? 1,
          color:              new THREE.Color("#e8edf2"),
          metalness:          0.95,
          roughness:          0.06,
          envMapIntensity:    3.2,
          clearcoat:          0.90,
          clearcoatRoughness: 0.04,
        });
      });
      mesh.material = upgraded.length === 1 ? upgraded[0] : upgraded;
    });
  }, [scene]);

  // ── Bone references + bind-pose quaternion storage ───────────────────────
  // Bones are resolved once at mount (before any mutation occurs).
  // Each frame: bone.quaternion = bindQ × delta  ← no accumulation, no drift.
  type BoneEntry = { bone: THREE.Object3D | null; bindQ: THREE.Quaternion };

  const head     = useRef<BoneEntry>({ bone: null, bindQ: new THREE.Quaternion() });
  const neck     = useRef<BoneEntry>({ bone: null, bindQ: new THREE.Quaternion() });
  const spine2   = useRef<BoneEntry>({ bone: null, bindQ: new THREE.Quaternion() });
  const lShldr   = useRef<BoneEntry>({ bone: null, bindQ: new THREE.Quaternion() });
  const rShldr   = useRef<BoneEntry>({ bone: null, bindQ: new THREE.Quaternion() });
  const lArm     = useRef<BoneEntry>({ bone: null, bindQ: new THREE.Quaternion() });
  const rArm     = useRef<BoneEntry>({ bone: null, bindQ: new THREE.Quaternion() });
  const lForeArm = useRef<BoneEntry>({ bone: null, bindQ: new THREE.Quaternion() });
  const rForeArm = useRef<BoneEntry>({ bone: null, bindQ: new THREE.Quaternion() });

  useEffect(() => {
    const map: Record<string, BoneEntry> = {
      mixamorig_Head_06:       head.current,
      mixamorig_Neck_05:       neck.current,
      mixamorig_Spine2_04:     spine2.current,
      mixamorig_LeftShoulder_07:  lShldr.current,
      "mixamorig_RightShoulder_026": rShldr.current,
      mixamorig_LeftArm_08:    lArm.current,
      "mixamorig_RightArm_027":    rArm.current,
      mixamorig_LeftForeArm_09:    lForeArm.current,
      "mixamorig_RightForeArm_028":    rForeArm.current,
    };
    scene.traverse((obj) => {
      const entry = map[obj.name];
      if (entry) {
        entry.bone  = obj;
        entry.bindQ.copy(obj.quaternion);
      }
    });
  }, [scene]);

  // ── Damped cursor-tracking values ─────────────────────────────────────────
  const headYaw   = useRef(0);
  const headPitch = useRef(0);
  const neckYaw   = useRef(0);
  const neckPitch = useRef(0);
  const spineYaw  = useRef(0);

  // ── Per-frame ─────────────────────────────────────────────────────────────
  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;

    // Outer group: idle float only — no body yaw
    if (rootRef.current) {
      rootRef.current.position.y = Math.sin(t * 0.55) * 0.022 - centerY;
    }

    // ── Cursor tracking (head / neck / spine) ─────────────────────────────
    headYaw.current   = THREE.MathUtils.damp(headYaw.current,   pointer.nx *  0.35, 7,   delta);
    headPitch.current = THREE.MathUtils.damp(headPitch.current, pointer.ny *  0.18, 7,   delta);
    neckYaw.current   = THREE.MathUtils.damp(neckYaw.current,   pointer.nx *  0.14, 5,   delta);
    neckPitch.current = THREE.MathUtils.damp(neckPitch.current, pointer.ny *  0.07, 5,   delta);
    spineYaw.current  = THREE.MathUtils.damp(spineYaw.current,  pointer.nx *  0.06, 3.5, delta);

    const applyBind = (entry: BoneEntry, ex: number, ey: number, ez: number) => {
      if (!entry.bone) return;
      entry.bone.quaternion.copy(entry.bindQ);
      _euler.set(ex, ey, ez);
      entry.bone.quaternion.multiply(_quat.setFromEuler(_euler));
    };

    applyBind(head.current,   headPitch.current,  headYaw.current,  0);
    applyBind(neck.current,   neckPitch.current,  neckYaw.current,  0);
    applyBind(spine2.current, 0,                  spineYaw.current, 0);

    // ── Manual arm idle (no animation clip — safe and stable) ─────────────
    // Tiny sinusoidal rotations on shoulder / arm / forearm bones.
    // Amplitudes are intentionally very small (≤0.05 rad ≈ 2.9°) so the
    // motion reads as premium "alive" rather than cartoon waving.
    const s1 = Math.sin(t * 0.52);        // primary wave
    const c1 = Math.cos(t * 0.38);        // secondary wave — different frequency
    const s2 = Math.sin(t * 0.52 + 0.6);  // right side — slight phase offset

    // Left shoulder — subtle forward pitch
    applyBind(lShldr.current,   s1 * 0.040, 0, s1 * 0.018);
    // Right shoulder — mirrored phase
    applyBind(rShldr.current,  -s2 * 0.040, 0, s2 * 0.018);

    // Left arm — slight roll / twist
    applyBind(lArm.current,     c1 * 0.030, 0, c1 * 0.015);
    // Right arm — opposite roll
    applyBind(rArm.current,    -c1 * 0.030, 0, -c1 * 0.015);

    // Left forearm — tiny secondary motion
    applyBind(lForeArm.current, s1 * 0.020, 0, 0);
    // Right forearm — opposite
    applyBind(rForeArm.current, -s2 * 0.020, 0, 0);
  });

  return (
    <group ref={rootRef}>
      <primitive object={scene} scale={scale} />
    </group>
  );
}

// ─── Lighting — white/silver only ────────────────────────────────────────────

function Lights() {
  return (
    <>
      <ambientLight intensity={0.08} color="#f5f5f5" />
      <directionalLight position={[1.5, 5, 4.5]}  intensity={2.2} color="#ffffff" castShadow />
      <directionalLight position={[-5, 3, -3]}     intensity={1.5} color="#dde4ec" />
      <directionalLight position={[5, 2, -2.5]}    intensity={1.1} color="#f0ece6" />
      <directionalLight position={[0, -4, 2]}      intensity={0.15} color="#d8d4cc" />
    </>
  );
}

// ─── Exported component ───────────────────────────────────────────────────────

export default function RobotVisual() {
  return (
    <div
      style={{
        width:  "clamp(280px, 34vw, 500px)",
        height: "clamp(380px, 46vw, 640px)",
        flexShrink: 0,
      }}
    >
      <Canvas
        camera={{ position: [0, 0.8, 4.2], fov: 38, near: 0.1, far: 50 }}
        dpr={[1, 2]}
        shadows
        gl={{
          alpha:               true,
          antialias:           true,
          toneMapping:         THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.25,
        }}
        style={{ background: "transparent" }}
      >
        <Lights />
        <Suspense fallback={null}>
          <Environment preset="studio" background={false} />
          <Robot />
        </Suspense>
      </Canvas>
    </div>
  );
}
