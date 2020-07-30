import 'phaser';
import WorldScene from './scenes/worldScene.js'
import GameOverScene from './scenes/gameOverScene.js'

let game;

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
    ]
  };

  game = new Phaser.Game(config);
}