import { Game } from "phaser";
import { MainScene } from "./scenes/mainScene";

(() => {
    const game = new Game({
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        scene: new MainScene(),
        physics: {
            default: "arcade",
            arcade: {
                gravity: { y: 300 },
                debug: false,
            },
        },
    });
})();
