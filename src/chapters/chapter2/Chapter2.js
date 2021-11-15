// add orbital control and lights

import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GUI } from 'three/examples/jsm/libs/dat.gui.module.js';


class Chapter2 {
    constructor() {
        this.camera;
        this.scene;
        this.renderer;
        this.mesh;

        this.rotation = {
            x: 0,
            y: 0
        };

        this.guiItems = [];

        this.init();
    }

    init() {
        const geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
        const material = new THREE.MeshLambertMaterial( { color: 0xff0000 } );

        this.mesh = new THREE.Mesh( geometry, material );

        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x999999);
        this.scene.add(this.mesh);

        this.addLights();

        this.renderer = new THREE.WebGLRenderer({ antialias: true });
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

        // // PointLight
        // const pointLight = new THREE.PointLight(0xffffff, 1, 100);
        // pointLight.position.set(5, 10, -5);
        // this.scene.add(pointLight);
        
        // const light = new THREE.AmbientLight( 0x404040 ); // soft white light
        // this.scene.add(light);
    }

    animation(time) {
        this.controls.update();

        this.mesh.rotation.x = this.rotation.x;
        this.mesh.rotation.y = this.rotation.y;

        this.renderer.render(this.scene, this.camera);
    }

    show(element) {
        const width = element.clientWidth - 10;
        const height = element.clientHeight - 10;

        this.camera = new THREE.PerspectiveCamera( 70, width / height, 0.01, 10);
        this.camera.position.z = 1;

        this.controls = new OrbitControls( this.camera, this.renderer.domElement );

        this.renderer.setSize(width, height);
        this.renderer.setAnimationLoop(this.animation.bind(this));

        this.gui = new GUI();
        this.guiItems.push(this.gui.add(this.rotation, 'x', 0, 1));
        this.guiItems.push(this.gui.add(this.rotation, 'y', 0, 1 ));
        this.gui.open();

        element.appendChild(this.renderer.domElement);
    }
}

const chapter2 = new Chapter2();

export function show(ele) {
    chapter2.show(ele);
}

export function destroy() {
    chapter2.renderer.setAnimationLoop(null);

    chapter2.gui.destroy();
}

