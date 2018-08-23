import { Scene, Physics } from "phaser";
import { Player } from "../objects/player";

import sky from "../assets/sky.png";
import platform from "../assets/platform.png";
import dude from "../assets/dude.png";

export class MainScene extends Scene {
    player!: Player;
    platforms!: Physics.Arcade.StaticGroup;

    constructor() {
        super("Main");
    }

    preload() {
        this.load.image("sky", sky);
        this.load.image("platform", platform);
        this.load.spritesheet("dude", dude, {
            frameWidth: 32,
            frameHeight: 48,
        });
    }

    create() {
        this.add.image(400, 300, "sky");
        this.add.image(400, 580, "platform");
        this.player = new Player(400, 536, this);
    }

    update() {
        this.player.update();
    }
}
