import 'babel-polyfill';
import WorldScene from '../scenes/worldScene';
import TitleScene from '../scenes/titleScene';
import GameOverScene from '../scenes/gameOverScene';
import EnterNameScene from '../scenes/enterNameScene';

require('jest-canvas-mock');

const world = new WorldScene();
const title = new TitleScene();
const game = new GameOverScene();
const enter = new EnterNameScene();

test('Should be instance of WorldScene class', () => {
  expect(world).toBeInstanceOf(WorldScene);
});

test('Should be instance of TitleScene class', () => {
  expect(title).toBeInstanceOf(TitleScene);
});

test('Should be instance GameOver class', () => {
  expect(game).toBeInstanceOf(GameOverScene);
});

test('Should be instance of TitleScene class', () => {
  expect(enter).toBeInstanceOf(EnterNameScene);
});

test('Should be type of object', () => {
  expect(typeof world).toBe('object');
});

test('Should be type of object', () => {
  expect(typeof title).toBe('object');
});

test('Should be type of object', () => {
  expect(typeof game).toBe('object');
});

test('Should be type of object', () => {
  expect(typeof enter).toBe('object');
});
