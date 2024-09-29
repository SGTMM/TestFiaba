class Game {
    constructor() {
        this.controller = null
        this.wait = this.wait.bind(this)
        this.wait()
    }

    wait() {
        if (typeof THREE === "undefined" && typeof io === "undefined") { requestAnimationFrame(this.wait) } else { this.loadingDone() }
    }

    loadingDone() {
        this.frameCap = 1000 / 60

        this.scene = new THREE.Scene()

        this.cameraContainer = new THREE.Object3D()

        this.camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 0.01, 1000000);

        this.cameraContainer.add(this.camera)
        this.scene.add(this.cameraContainer)

        this.renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: false,
            powerPreference: "high-performance",
            stencil: false,
        });

        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.outputColorSpace = THREE.SRGBColorSpace
        this.renderer.toneMapping = THREE.NeutralToneMapping
        this.renderer.toneMappingExposure = 1.0

        this.controls = new PointerLockControls(this.camera, this.renderer.domElement);

        window.addEventListener('resize', () => {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
        });

        document.body.appendChild(this.renderer.domElement);

        this.clock = new THREE.Clock()

        this.stats = new Stats()
        document.body.appendChild(this.stats.dom)

        this.cameraContainer.position.set(4.5, 1.5, 9.5)

        this.loadScene1()
    }


    loadScene1() {
        new RGBELoader().load("background5.hdr", (texture) => {
            texture.colorSpace = THREE.LinearSRGBColorSpace
            texture.mapping = THREE.EquirectangularReflectionMapping;
            this.scene.background = texture
            this.scene.backgroundIntensity = 0.7
            this.scene.environment = texture
            this.scene.environmentIntensity = 1
            new GLTFLoader().load("testfiaba.glb", (glb) => {
                this.map = glb.scene
                this.scene.add(this.map)
                new GLTFLoader().load("testfiaba-ped.glb", (glb) => {
                    this.actionIdle = glb.animations[1]
                    this.ped = glb.scene
                    this.mixer = new THREE.AnimationMixer(this.ped)
                    this.action = this.mixer.clipAction(this.actionIdle)
                    this.action.play()
                    this.listener = new THREE.AudioListener()
                    this.listener.rotation.y = Math.PI - Math.PI / 8
                    this.camera.add(this.listener)
                    this.sound = new THREE.PositionalAudio(this.listener)
                    new THREE.AudioLoader().load("audio2.mp3", (buffer) => {
                        this.sound.setBuffer(buffer)
                        this.sound.setRefDistance(20)
                        this.sound.setLoop(true)
                        this.sound.play()
                    })
                    this.ped.add(this.sound)
                    this.scene.add(this.ped)
                    this.update()
                })
            })
        })
    }

    update() {
        setTimeout(() => {
            this.update()
        }, this.frameCap);
        this.stats.update()
        this.mixer.update(this.clock.getDelta())
        this.renderer.render(this.scene, this.camera);
    }
}

window.Game = Game
