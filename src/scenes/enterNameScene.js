import InputText from 'phaser3-rex-plugins/plugins/inputtext.js';

class EnterNameScene extends Phaser.Scene {
    constructor() {
        super('EnterNameScene');
    }

    preload() {}

    create() {
        this.text = this.add.text(this.cameras.main.width / 2, this.cameras.main.height / 2 - 30, 'Enter your name', {
            fixedWidth: 150,
            fixedHeight: 36,
            fill: "#ffffff"
        });
        this.text.setOrigin(0.5, 0.5)        

        const input = this.add.dom(this.cameras.main.width / 2, this.cameras.main.height / 2, 'input', {
            type: 'text',
            name: 'nameField',
            fontSize: '32px',
            backgroundColor: '#fff',
            placeholder: 'hui'
        });
        input.scaleX = 0.4;
        input.scaleY = 0.6;

        const style = 'border: none; border-radius: 5px; color: #fff;';
        this.playButton = this.add.dom(this.cameras.main.width / 2, this.cameras.main.height / 2 + 30, 'button', style, 'Play');
        this.playButton.addListener('click');

        this.playButton.on('click', () => {
            console.log('works');
            if (input.node.value) {
                this.game.playerName = input.node.value;
                this.scene.start('WorldScene');                
            }
        });
    }

    update() {

    }
};

export default EnterNameScene