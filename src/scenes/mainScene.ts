import { Scene } from "phaser";

import { Player } from "../objects/player";
import { Platforms } from "../objects/platforms";

import sky from "../assets/sky.png";

export class MainScene extends Scene {
    player: Player;
    platforms: Platforms;

    constructor() {
        super("main");
        this.player = new Player();
        this.platforms = new Platforms();
    }

    preload() {
        this.load.image("sky", sky);
        this.platforms.load(this.load);
        this.player.load(this.load);
    }

    create() {
        this.add.image(400, 300, "sky");
        this.platforms.create(this.physics);
        this.player.create(this.anims, this.input.keyboard.createCursorKeys(), this.physics);
        this.physics.add.collider(this.player.sprite, this.platforms.group);
    }

    update() {
        this.player.update();
    }
}
