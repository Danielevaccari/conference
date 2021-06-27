import React, { useRef } from 'react'
import { Canvas, useThree, useFrame, extend } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'



extend({ OrbitControls })



const Controls = () => {
    //const orbitRef = useRef()
    const meshRef = useRef()
    const { camera, gl } = useThree()


    useFrame(() => {
        //orbitRef.current.update()
        meshRef.current.rotation.y += 0.01
    })
    return (
        <>
            <orbitControls args={[camera, gl.domElement]} ref={meshRef} />
            <mesh ref={meshRef}>
                <boxBufferGeometry attach='geometry' args={[1, 1, 1]} />
                <meshBasicMaterial attach='material' color='hotpink' />
            </mesh>

        </>
    )
}

const Visual = () => {
    return (
        <>
            <Canvas style={{ height: '100vh', width: '100vw'}}>
                <Controls />
            </Canvas>
        </>
    )
}

export default Visual

