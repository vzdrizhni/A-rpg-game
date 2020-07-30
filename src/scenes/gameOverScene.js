import WorldScene from './worldScene'

class GameOverScene extends Phaser.Scene {
    constructor() {
        super('GameOverScene');
    }
    preload() {
    }
    create() {
        this.world = new WorldScene();
        this.text = this.add.text(0, 0, `Score: ${this.world.counter}`, {
            font: "16px Arial",
            fill: "#ffffff",
            align: "center"
        });
       
    }
    
    update() {}
}

export default GameOverScene