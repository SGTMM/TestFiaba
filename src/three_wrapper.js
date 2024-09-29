import * as THREE from 'three'

import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import Stats from 'three/examples/jsm/libs/stats.module'

window.THREE = THREE
window.PointerLockControls = PointerLockControls
window.GLTFLoader = GLTFLoader
window.Stats = Stats
window.RGBELoader = RGBELoader