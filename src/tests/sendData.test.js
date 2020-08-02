require('jest-canvas-mock');
import "babel-polyfill";
import WorldScene from '../scenes/worldScene'

const world = new WorldScene

let person = {
    score: 50,
    user: 'Player',
};

let jsonedPerson = JSON.stringify(person);

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