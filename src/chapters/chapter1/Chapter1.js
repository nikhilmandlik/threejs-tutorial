// simple cube rotation

import * as THREE from 'three';

class Chapter1 {
    constructor() {
        this.camera;
        this.scene;
        this.renderer;
        this.mesh;

        this.init();
    }

    init() {
        const geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
        const material = new THREE.MeshNormalMaterial();
        // const material = new THREE.MeshLambertMaterial();

        this.mesh = new THREE.Mesh( geometry, material );

        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x999999);
        this.scene.add(this.mesh);

        this.renderer = new THREE.WebGLRenderer({ antialias: true });
    }

    animation(time) {
        this.mesh.rotation.x = time / 2000;
        this.mesh.rotation.y = time / 1000;
        this.renderer.render(this.scene, this.camera);
    }

    show(element) {
        const width = element.clientWidth - 10;
        const height = element.clientHeight - 10;

        this.camera = new THREE.PerspectiveCamera( 70, width / height, 0.01, 10);
        this.camera.position.z = 1;
        this.renderer.setSize(width, height);
        this.renderer.setAnimationLoop(this.animation.bind(this));
        element.appendChild(this.renderer.domElement);
    }
}

const chapter1 = new Chapter1();

export function show(ele) {
    chapter1.show(ele);
}

export function destroy() {
    chapter1.renderer.setAnimationLoop(null);
}