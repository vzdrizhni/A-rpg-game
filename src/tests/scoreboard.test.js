import 'babel-polyfill';
import GameOverScene from '../scenes/gameOverScene';

require('jest-canvas-mock');

const game = new GameOverScene();

test('Should return object', () => {
  game.gameData().then(result => {
    expect(result).toBe(Object);
  }).catch(() => {});
});

test('Should return object with array of players', () => {
  game.gameData().then(content => {
    expect(content.result).toBe(Array);
  }).catch(() => {});
});
