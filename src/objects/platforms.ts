import { 
    Physics, 
    Loader 
} from "phaser";

import platform from "../assets/platform.png";

export class Platforms {
    group!: Physics.Arcade.StaticGroup;

    load(loaderPlugin: Loader.LoaderPlugin) {
        loaderPlugin.image("platform", platform);
    }

    create(physics: Physics.Arcade.ArcadePhysics) {
        this.group = physics.add.staticGroup();
        this.group.create(400, 568, "platform").setScale(2).refreshBody();
        this.group.create(600, 400, "platform");
        this.group.create(50, 250, "platform");
        this.group.create(750, 220, "platform");
    }
}