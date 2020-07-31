import 'phaser';
import WorldScene from './scenes/worldScene.js'
import GameOverScene from './scenes/gameOverScene.js'

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
      WorldScene,
      GameOverScene
    ],
  };

  Phaser.Game.prototype.score = 0;
  game = new Phaser.Game(config);
  console.log(game);
}

// export default game