import 'phaser';
import RexUIPlugin from 'phaser3-rex-plugins/templates/ui/ui-plugin';
import WorldScene from './scenes/worldScene';
import GameOverScene from './scenes/gameOverScene';
import EnterNameScene from './scenes/enterNameScene';
import TitleScene from './scenes/titleScene';

window.onload = () => {
  const config = {
    type: Phaser.AUTO, // eslint-disable-line no-undef
    parent: 'content',
    width: 320,
    height: 240,
    zoom: 2,
    pixelArt: true,
    physics: {
      default: 'arcade',
      arcade: {
        gravity: {
          y: 0,
        },
      },
    },
    scene: [
      TitleScene,
      EnterNameScene,
      WorldScene,
      GameOverScene,
    ],
    dom: {
      createContainer: true,
    },
    plugins: {
      scene: [{
        key: 'rexUI',
        plugin: RexUIPlugin,
        mapping: 'rexUI',
      }],
    },
  };

  Phaser.Game.prototype.score = 0; // eslint-disable-line no-undef
  Phaser.Game.prototype.playerName = ''; // eslint-disable-line no-undef
  new Phaser.Game(config); // eslint-disable-line no-undef, no-new, no-undef
};
