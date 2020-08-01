import titleScreen from '../assets/GameTitle.png'
import TweenHelper from '../helperClasses/tweenHelper.js'

class TitleScene extends Phaser.Scene {
    preload() {
        this.load.image('background', titleScreen, {
            frameWidth: 320,
            frameHeight: 240
        });
    }

    create() {
        this.background = this.add.sprite(0, 0, 'background');

        this.background.displayWidth = this.game.config.width;
        this.background.displayOriginX = 0;
        this.background.displayHeight = this.game.config.height;
        this.background.displayOriginY = 0;

        this.textStart = this.add.text(this.cameras.main.width / 4 + 10, this.cameras.main.width / 2 + 50, `Press space to start`, {
            font: "16px Arial",
            fill: "#ffffff",
            align: "center"
        });

        TweenHelper.flashElement(this, this.textStart);

        this.cursor = this.input.keyboard.createCursorKeys();
    }

    update() {

        if (this.cursor.space.isDown) {
            this.game.score = 0;
            this.scene.start("EnterNameScene");
        }
    }
}

export default TitleScene