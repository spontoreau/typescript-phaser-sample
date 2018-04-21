import { Scene } from "phaser";
import sky from "../assets/sky.png";
import ground from '../assets/platform.png';
import dude from '../assets/dude.png';

export class MainScene extends Scene {
    constructor() {
        super("Main");
    }

    preload() {
        this.load.image('sky', sky);
    }

    create() {
        this.add.image(400, 300, 'sky');
    }
}