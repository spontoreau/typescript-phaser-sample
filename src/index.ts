import phaser from "phaser";
import { MainScene } from "./scenes/mainScene";

(() => {
    const game = new phaser.Game({
        type: phaser.AUTO,
        width: 800,
        height: 600,
        scene: new MainScene()
    });
})();
