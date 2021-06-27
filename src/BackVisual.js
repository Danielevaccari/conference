import * as THREE from 'three';

var camera, scene, renderer
var boo = true

Init()


function Init() {
    scene = new THREE.Scene()

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000)
    camera.position.y = -10
    camera.position.z = 80
    camera.position.x = 0

    var loader = new THREE.FontLoader();

    loader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function (font) {

        const geometry = new THREE.TextGeometry('Clothing INC™', {
            font: font,
            size: 10,
            height: 3,
            color: 'red'

        })
        geometry.center();
        const material = new THREE.MeshLambertMaterial({ color: 0xFFCC00 })
        const mesh = new THREE.Mesh(geometry, material)
        scene.add(mesh)

    })
    window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight)
})
    renderer = new THREE.WebGL1Renderer({ antialias: true })
    renderer.setClearColor('grey')
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement);
    animate()
    return null
}
function animate() {

    requestAnimationFrame(animate);
    renderer.render(scene, camera);

    boo ? camera.position.z += 0.1 : camera.position.z -= 0.1

    if (camera.position.z > 90) {
        boo = false
    }
    if (camera.position.z < 80) {
        boo = true
    }

}

export default Init