// manipulate box using keyboard

import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const MAX_SPEED = 0.15;

let funcKeyDown;
let funcKeyUp;

class Chapter2 {
    constructor() {
        this.camera;
        this.scene;
        this.renderer;
        this.mesh;

        this.speed = 0;
        this.direction = 0;
        this.forward = new THREE.Vector3(0, 0, -1);

        this.init();
    }

    init() {
        const geometry = new THREE.BoxGeometry(0.1, 0.1, 0.2);
        const material = new THREE.MeshLambertMaterial( { color: 0xff0000 } );

        this.mesh = new THREE.Mesh( geometry, material );
        this.mesh.position.x = 1.9;
        this.mesh.position.z = -0.4;
        this.mesh.rotation.y = 17.8;

        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x999999);
        this.scene.add(this.mesh);

        this.addPlane();
        this.addLights();

        this.renderer = new THREE.WebGLRenderer({ antialias: true });
    }

    addPlane() {
        const loader = new THREE.TextureLoader();
        const texture = loader.load('https://thumbs.dreamstime.com/z/white-laminate-parquet-background-wooden-texture-city-map-race-circuit-road-silhouette-wooden-race-track-circle-157012894.jpg');
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping; 
        texture.repeat.set(1, 1);
        const material = new THREE.MeshBasicMaterial({
          map: texture, side: THREE.DoubleSide
        });
        const geometry = new THREE.PlaneGeometry(10, 10, 1, 1);
        const plane = new THREE.Mesh(geometry, material);
        plane.position.y = -0.05;
        plane.rotation.x = Math.PI / 2;
        
        this.scene.add(plane);
      }

    addEventListeners() {
        funcKeyDown = this.keyDown.bind(this);
        funcKeyUp = this.keyUp.bind(this);
        document.addEventListener('keydown', funcKeyDown);
        document.addEventListener('keyup', funcKeyUp);
    }

    keyUp(e) {
        if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
            this.speed = 0;
        }

        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
            this.direction = 0;
        }
    }

    keyDown(e) {
        if (e.key === 'ArrowUp') {
            this.speed = MAX_SPEED;
        }

        if (e.key === 'ArrowDown') {
            this.speed = -MAX_SPEED / 3;
        }

        if (e.key === 'ArrowLeft') {
            this.direction = 1;
        }

        if (e.key === 'ArrowRight') {
            this.direction = -1;
        }
    }

    addLights() {
        // HemisphereLight
        const skyColor = 0xeeeeee; // light blue
        const groundColor = 0xcccccc; // brownish orange
        const intensity = 1;
        const hemisphereLight = new THREE.HemisphereLight(
            skyColor,
            groundColor,
            intensity
        );

        this.scene.add(hemisphereLight);
    }

    animation(time) {
        this.controls.update();

        const deltaTime = Math.min(Date.now()* 0.00001 - 0, 1 / 50);
        if (this.speed !== 0) {
            const value = this.direction * deltaTime;
            this.mesh.rotation.y += this.speed > 0 ? value : -value;
        }

        this.mesh.translateOnAxis(this.forward, this.speed * Math.min(Date.now()* 0.001 - 0, 1 / 20));

        const relativeCameraOffset = new THREE.Vector3(0, 0.6, 0.8);
        const cameraOffset = relativeCameraOffset.applyMatrix4(this.mesh.matrixWorld);
        this.camera.position.x = cameraOffset.x;
        this.camera.position.y = cameraOffset.y;
        this.camera.position.z = cameraOffset.z;
        this.camera.lookAt(this.mesh.position);
        this.renderer.render(this.scene, this.camera);
    }

    removeEventListeners() {
        console.log('removeEventListeners', this);
        document.addEventListener('keydown', funcKeyDown);
        document.addEventListener('keyup', funcKeyUp);
    }

    show(element) {
        this.addEventListeners();
        const width = element.clientWidth - 10;
        const height = element.clientHeight - 10;

        this.camera = new THREE.PerspectiveCamera( 70, width / height, 0.01, 10);
        this.camera.position.z = 1;
        this.camera.position.y = 1.5;

        this.controls = new OrbitControls( this.camera, this.renderer.domElement );

        this.renderer.setSize(width, height);
        this.renderer.setAnimationLoop(this.animation.bind(this));

        element.appendChild(this.renderer.domElement);
    }
}

const chapter2 = new Chapter2();

export function show(ele) {
    chapter2.show(ele);
}

export function destroy() {
    chapter2.renderer.setAnimationLoop(null);
    chapter2.removeEventListeners();
}

