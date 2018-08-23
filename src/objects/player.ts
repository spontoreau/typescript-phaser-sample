import { Scene, GameObjects} from "phaser";
export class Player {
    scene: Phaser.Scene;
    sprite!: GameObjects.Sprite;
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
            this.sprite.setX(this.sprite.x - 2);
            this.launchAnimation("left");
        } else if (this.cursor.right && this.cursor.right.isDown) {
            this.sprite.setX(this.sprite.x + 2);
            this.launchAnimation("right");
        }  else {
            this.launchAnimation("turn");
        }
    }

    private createSprite(x: number, y: number) {
        this.sprite = this.scene.add.sprite(x, y, "dude");
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
