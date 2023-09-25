import React from "react";
import { useGLTF } from "@react-three/drei";

const Model = (props) => {
  const { nodes, materials } = useGLTF("/classroom.glb");

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Small_Windows.geometry}
        material={nodes.Small_Windows.material}
        position={[-7.79, 4.22, -6.67]}
        scale={[1, 1, 0.63]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Walls.geometry}
        material={nodes.Walls.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Window_wood.geometry}
        material={nodes.Window_wood.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Windows.geometry}
        material={nodes.Windows.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Floor.geometry}
        material={nodes.Floor.material}
        position={[2.34, 0.35, -1.92]}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Doors.geometry}
        material={nodes.Doors.material}
        position={[-7.89, 1.46, -5.24]}
        scale={2.25}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ceiling.geometry}
        material={nodes.Ceiling.material}
        position={[2.34, 6.17, -1.92]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Drawer.geometry}
        material={nodes.Drawer.material}
        position={[9.32, 1.4, -1.73]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Supports.geometry}
        material={nodes.Supports.material}
        position={[-2.98, 5.1, -0.84]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lamp_Holder.geometry}
        material={nodes.Lamp_Holder.material}
        position={[-6.6, 5.27, -0.92]}
        scale={[0.82, 0.82, 0.52]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Lamp_Cover.geometry}
          material={nodes.Lamp_Cover.material}
          position={[0, -0.23, 0]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Clock.geometry}
        material={nodes.Clock.material}
        position={[-10.32, 4.48, -1]}
        scale={[0.7, 1, 1]}
      >
        <group
          position={[0.11, -0.02, 0]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.07}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Clock_Hour.geometry}
            material={nodes.Clock_Hour.material}
            position={[0, 0, 277.74]}
            rotation={[-1.57, 1.54, 3.14]}
            scale={[2.42, 2.42, 1.45]}
          />
        </group>
        <group
          position={[0.11, -0.02, 0]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.24}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Clock_Minute.geometry}
            material={nodes.Clock_Minute.material}
            position={[0, -0.01, 83.92]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.73}
          />
        </group>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chair_Seat.geometry}
        material={nodes.Chair_Seat.material}
        position={[-8.86, 1.27, 2.87]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Chair_Legs001.geometry}
          material={nodes.Chair_Legs001.material}
          position={[0.13, -0.65, -0.06]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Student_Chair_Seat.geometry}
        material={nodes.Student_Chair_Seat.material}
        position={[-0.39, 1.27, 2.87]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Chair_Legs.geometry}
          material={nodes.Chair_Legs.material}
          position={[-0.13, -0.65, 0]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Teacher_Table_Deck.geometry}
        material={nodes.Teacher_Table_Deck.material}
        position={[-7.43, 1.45, 2.66]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Teacher_Table_legs.geometry}
          material={nodes.Teacher_Table_legs.material}
          position={[0, -0.96, 0]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Student_Table_Deck.geometry}
        material={nodes.Student_Table_Deck.material}
        position={[-1.82, 1.45, 2.87]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Student_Table_Legs.geometry}
          material={nodes.Student_Table_Legs.material}
          position={[0, -0.96, 0]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Board.geometry}
        material={nodes.Board.material}
        position={[-10.26, 2.92, -0.89]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Board_Frame.geometry}
        material={nodes.Board_Frame.material}
        position={[-10.28, 2.92, -0.89]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Board001.geometry}
        material={nodes.Board001.material}
        position={[-10.29, 3.03, 2.81]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Board002.geometry}
        material={nodes.Board002.material}
        position={[-10.26, 2.92, -0.89]}
      />
    </group>
  );
};

useGLTF.preload("/classroom.glb");

export default Model;
