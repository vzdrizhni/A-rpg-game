const GameOverScene = require('../scenes/gameOverScene');

const game = GameOverScene.default; 
const whatever = new game();

test('Should return object with array of players', () => {
  whatever.gameData().then(content => {
    expect(content.result).toBe(Array);
  });
});
