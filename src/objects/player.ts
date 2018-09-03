import {
    Physics,
    Input,
    Animations,
    Loader,
} from "phaser";

import dude from "../assets/dude.png";

export class Player {
    get sprite(): Physics.Arcade.Sprite {
        return this.arcadeSprite;
    }

    animationManager!: Animations.AnimationManager;
    cursorKeys!: Input.Keyboard.CursorKeys;

    private arcadeSprite!: Physics.Arcade.Sprite;
    private currentAnimation!: string;

    load(loaderPlugin: Loader.LoaderPlugin) {
        loaderPlugin.spritesheet("dude", dude, {
            frameWidth: 32,
            frameHeight: 48,
        });
    }

    create(
        animationManager: Animations.AnimationManager,
        cursorKeys: Input.Keyboard.CursorKeys,
        physics: Physics.Arcade.ArcadePhysics,
    ) {
        this.animationManager = animationManager;
        this.cursorKeys = cursorKeys;

        this.arcadeSprite = physics.add.sprite(0, 0, "dude");
        this.arcadeSprite.setBounce(0.2);
        this.arcadeSprite.setCollideWorldBounds(true);
        this.createAnimations();
    }

    update() {
        if (this.cursorKeys.left && this.cursorKeys.left.isDown) {
            this.sprite.setVelocityX(-160);
            this.launchAnimation("left");
        } else if (this.cursorKeys.right && this.cursorKeys.right.isDown) {
            this.sprite.setVelocityX(160);
            this.launchAnimation("right");
        } else {
            this.sprite.setVelocityX(0);
            this.launchAnimation("turn");
        }

        if (this.cursorKeys.up && this.cursorKeys.up.isDown) {
            this.sprite.setVelocityY(-330);
        }
    }

    private createAnimations() {
        this.animationManager.create({
            key: "left",
            frames: this.animationManager.generateFrameNumbers("dude", { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1,
        });

        this.animationManager.create({
            key: "turn",
            frames: [{ key: "dude", frame: 4 }],
            frameRate: 20,
        });

        this.animationManager.create({
            key: "right",
            frames: this.animationManager.generateFrameNumbers("dude", { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1,
        });
    }

    private launchAnimation(key: string) {
        if (this.currentAnimation !== key) {
            this.animationManager.play(key, this.sprite);
            this.currentAnimation = key;
        }
    }
}
