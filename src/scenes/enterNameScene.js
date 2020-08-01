import keys from '../assets/keys.png';

class EnterNameScene extends Phaser.Scene { // eslint-disable-line no-undef
  constructor() {
    super('EnterNameScene');
  }

  preload() {
    this.load.image('keys', keys);
  }

  create() {
    this.keys = this.add.sprite(this.cameras.main.width / 4 + 45, this.cameras.main.width / 2 + 30, 'keys');
    this.keys.displayWidth = this.game.config.width / 5;
    this.keys.displayOriginX = 0;
    this.keys.displayHeight = this.game.config.height / 5;
    this.keys.displayOriginY = 0;

    this.text = this.add.text(this.cameras.main.width / 2, this.cameras.main.height / 2 - 30, 'Enter your name', {
      fixedWidth: 150,
      fixedHeight: 36,
      fill: '#ffffff',
    });
    this.text.setOrigin(0.5, 0.5);

    this.textControls = this.add.text(this.cameras.main.width / 4 + 80, this.cameras.main.height / 2 + 60, 'Game Controls', {
      font: '16px Arial',
      fill: '#ffffff',
      align: 'center',
    });
    this.textControls.setOrigin(0.5, 0.5);

    const input = this.add.dom(this.cameras.main.width / 2, this.cameras.main.height / 2, 'input', {
      type: 'text',
      name: 'nameField',
      fontSize: '32px',
      backgroundColor: '#fff',
      placeholder: 'hui',
    });
    input.scaleX = 0.4;
    input.scaleY = 0.6;

    const style = 'border: none; border-radius: 5px; color: #fff; background-color: #30302f';
    this.playButton = this.add.dom(this.cameras.main.width / 2, this.cameras.main.height / 2 + 30, 'button', style, 'Play');
    this.playButton.addListener('click');

    this.playButton.on('click', () => {
      if (input.node.value) {
        this.game.playerName = input.node.value;
        this.scene.start('WorldScene');
      }
    });
  }
}

export default EnterNameScene;