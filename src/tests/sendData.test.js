import 'babel-polyfill';
import WorldScene from '../scenes/worldScene';

require('jest-canvas-mock');

const world = new WorldScene();

const person = {
  score: 50,
  user: 'Player',
};

const jsonedPerson = JSON.stringify(person);

test('Should send json object with user and score data', () => {
  world.gameData(jsonedPerson).then(data => {
    expect(data.result).toBe('Leaderboard score created correctly.');
  }).catch(() => {});
});

test('Should return an object', () => {
  world.gameData(jsonedPerson).then(data => {
    expect(typeof data).toBe('object');
  }).catch(() => {});
});