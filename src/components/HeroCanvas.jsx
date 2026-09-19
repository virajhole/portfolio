import { useEffect, useRef } from "react"
import * as THREE from "three"

export default function HeroCanvas() {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    const width = mount.clientWidth
    const height = mount.clientHeight

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100)
    camera.position.z = 6

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    mount.appendChild(renderer.domElement)

    // Wireframe icosahedron — the "signal" motif
    const geometry = new THREE.IcosahedronGeometry(2.4, 1)
    const wireframe = new THREE.WireframeGeometry(geometry)
    const material = new THREE.LineBasicMaterial({
      color: 0x6c8cff,
      transparent: true,
      opacity: 0.55,
    })
    const mesh = new THREE.LineSegments(wireframe, material)
    scene.add(mesh)

    // A quieter inner shell for depth
    const geometry2 = new THREE.IcosahedronGeometry(1.5, 0)
    const wireframe2 = new THREE.WireframeGeometry(geometry2)
    const material2 = new THREE.LineBasicMaterial({
      color: 0xffb86c,
      transparent: true,
      opacity: 0.25,
    })
    const mesh2 = new THREE.LineSegments(wireframe2, material2)
    scene.add(mesh2)

    let frameId
    let t = 0

    const render = () => {
      t += 0.0016
      mesh.rotation.x = t * 0.6
      mesh.rotation.y = t
      mesh2.rotation.x = -t * 0.4
      mesh2.rotation.y = -t * 0.7
      renderer.render(scene, camera)
      frameId = requestAnimationFrame(render)
    }

    if (prefersReduced) {
      // Render a single static frame, no animation loop.
      mesh.rotation.set(0.4, 0.6, 0)
      mesh2.rotation.set(-0.3, 0.4, 0)
      renderer.render(scene, camera)
    } else {
      render()
    }

    const handleResize = () => {
      const w = mount.clientWidth
      const h = mount.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      if (frameId) cancelAnimationFrame(frameId)
      geometry.dispose()
      wireframe.dispose()
      material.dispose()
      geometry2.dispose()
      wireframe2.dispose()
      material2.dispose()
      renderer.dispose()
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement)
      }
    }
  }, [])

  return <div className="hero__canvas" ref={mountRef} aria-hidden="true" />
}
