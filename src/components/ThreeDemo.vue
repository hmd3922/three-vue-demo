<template>
  <div ref="container" style="width: 100%; height: 400px"></div>
</template>

<script setup>
import * as THREE from 'three'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { onMounted, onUnmounted, ref } from 'vue'
import Vertex from '@/shader/test/vertex.glsl'
let scene, camera, renderer
let cube
const container = ref(null)
console.log(Vertex)
onMounted(() => {
  // 初始化场景、相机和渲染器
  init()
  // 渲染循环
  animate()
})

onUnmounted(() => {
  renderer.dispose()
})

function init() {
  // 创建场景
  scene = new THREE.Scene()

  // 创建透视相机
  camera = new THREE.PerspectiveCamera(
    75,
    container.value.clientWidth / container.value.clientHeight,
    0.1,
    1000
  )
  camera.position.z = 5

  // 创建渲染器
  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(container.value.clientWidth, container.value.clientHeight)
  container.value.appendChild(renderer.domElement)

  // 创建立方体
  const geometry = new THREE.BoxGeometry(1, 1, 1)
  const material = new THREE.MeshBasicMaterial({ color: 0xffdecdf4 })
  cube = new THREE.Mesh(geometry, material)
  scene.add(cube)
  //   创建轨道控制器
  // const controls = new OrbitControls(camera, renderer.domElement)
  // //   允许缩放
  // controls.enableZoom = true
  // controls.enableDamping = true
  //   添加坐标轴辅助线
  const axesHelper = new THREE.AxesHelper(5)
  scene.add(axesHelper)
}

function animate() {
  // 请求动画帧:requestAnimationFrame:告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。
  requestAnimationFrame(animate)
  cube.rotation.x += 0.01
  cube.rotation.y += 0.01
  cube.position.x += 0.01
  if (cube.position.x > 5) {
    cube.position.x = 0
  }
  renderer.render(scene, camera)
}
</script>
