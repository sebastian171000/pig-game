import { INIT_SOCORE } from './config.js';
class Player {
  current = 0;
  score = INIT_SOCORE;
  dice = 0;
}
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export const player1 = new Player();
export const player2 = new Player();
export const throwDice = function (currPlayer) {
  currPlayer.dice = getRandomInt(6) + 1;
};
export const calcCurrent = function (currPlayer) {
  currPlayer.current += currPlayer.dice;
};
export const calcScore = function (currPlayer) {
  currPlayer.score += currPlayer.current;
};
export const resetPlayer = function (player) {
  player.current = 0;
  player.score = INIT_SOCORE;
  player.dice = 0;
};
