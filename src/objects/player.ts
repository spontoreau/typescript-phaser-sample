import { Physics } from "phaser";
export class Player {
    scene: Phaser.Scene;
    sprite!: Physics.Arcade.Sprite;
    cursor!: CursorKeys;
    currentAnimation!: string;

    constructor(x: number, y: number, scene: Phaser.Scene) {
        this.scene = scene;

        this.createSprite(x, y);
        this.createAnimations();
        this.cursor = this.scene.input.keyboard.createCursorKeys();
    }

    update() {
        if (this.cursor.left && this.cursor.left.isDown && this.scene.anims) {
            this.sprite.setVelocityX(-160);
            this.launchAnimation("left");
        } else if (this.cursor.right && this.cursor.right.isDown) {
            this.sprite.setVelocityX(160);
            this.launchAnimation("right");
        } else {
            this.sprite.setVelocityX(0);
            this.launchAnimation("turn");
        }

        if (this.cursor.up && this.cursor.up.isDown) {
            this.sprite.setVelocityY(-330);
        }
    }

    private createSprite(x: number, y: number) {
        this.sprite = this.scene.physics.add.sprite(x, y, "dude");
        this.sprite.setBounce(0.2);
        this.sprite.setCollideWorldBounds(true);
    }

    private createAnimations() {
        this.scene.anims.create({
            key: "left",
            frames: this.scene.anims.generateFrameNumbers("dude", { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1,
        });

        this.scene.anims.create({
            key: "turn",
            frames: [{ key: "dude", frame: 4 }],
            frameRate: 20,
        });

        this.scene.anims.create({
            key: "right",
            frames: this.scene.anims.generateFrameNumbers("dude", { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1,
        });
    }

    private launchAnimation(key: string) {
        if (this.currentAnimation !== key) {
            this.scene.anims.play(key, this.sprite);
            this.currentAnimation = key;
        }
    }
}
