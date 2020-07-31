class GameOverScene extends Phaser.Scene {
    constructor() {
        super('GameOverScene');
    }
    preload() {
    }
    create() {
        
        this.text = this.add.text(0, 0, `Score: ${this.game.score}`, {
            font: "16px Arial",
            fill: "#ffffff",
            align: "center"
        });

        this.textName = this.add.text(0, 30, `Name: ${this.game.playerName}`, {
            font: "16px Arial",
            fill: "#ffffff",
            align: "center"
        });
       
    }
    
    update() {}
}

export default GameOverScene