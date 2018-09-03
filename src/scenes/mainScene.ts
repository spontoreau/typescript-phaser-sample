import { Scene, Physics } from "phaser";
import { Player } from "../objects/player";

import sky from "../assets/sky.png";
import platform from "../assets/platform.png";

export class MainScene extends Scene {
    player: Player;
    platforms!: Physics.Arcade.StaticGroup;

    constructor() {
        super("main");
        this.player = new Player();
    }

    preload() {
        this.load.image("sky", sky);
        this.load.image("platform", platform);
        this.player.load(this.load);
    }

    create() {
        this.add.image(400, 300, "sky");

        this.platforms = this.physics.add.staticGroup();
        this.platforms.create(400, 568, "platform").setScale(2).refreshBody();
        this.platforms.create(600, 400, "platform");
        this.platforms.create(50, 250, "platform");
        this.platforms.create(750, 220, "platform");

        this.player.create(this.anims, this.input.keyboard.createCursorKeys(), this.physics);
        this.physics.add.collider(this.player.sprite, this.platforms);
    }

    update() {
        this.player.update();
    }
}
