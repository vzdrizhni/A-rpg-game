import 'phaser';
import WorldScene from './scenes/worldScene.js'
import GameOverScene from './scenes/gameOverScene.js'
import RexUIPlugin from 'phaser3-rex-plugins/templates/ui/ui-plugin'
import EnterNameScene from './scenes/enterNameScene.js'

export let game

window.onload = () => {
  var config = {
    type: Phaser.AUTO,
    parent: 'content',
    width: 320,
    height: 240,
    zoom: 2,
    pixelArt: true,
    physics: {
      default: 'arcade',
      arcade: {
        gravity: {
          y: 0
        },
      }
    },
    scene: [
      GameOverScene,
      EnterNameScene,
      WorldScene,
            
    ],
    dom: {
      createContainer: true
    },
    plugins: {
      scene: [{
        key: 'rexUI',
        plugin: RexUIPlugin,
        mapping: 'rexUI'
      }]
    }
  };

  Phaser.Game.prototype.score = 0;
  Phaser.Game.prototype.playerName = "";
  game = new Phaser.Game(config);
}

// export default game