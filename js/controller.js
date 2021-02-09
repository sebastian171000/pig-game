import * as model from './model.js';
import { SCORE_FOR_WIN } from './config.js';
import pigGameView from './views/pigGameView';
const controllerDice = function (currPlayerNum) {
  const currPlayer = model[`player${currPlayerNum}`];
  model.throwDice(currPlayer);
  pigGameView.changeDice(currPlayer.dice);
  model.calcCurrent(currPlayer);
  pigGameView.showCurrent(currPlayer.current);
  pigGameView.setCurrPlayer(currPlayer);
  if (currPlayer.dice === 1) {
    pigGameView.showCurrent(0);
    currPlayer.current = 0;
    pigGameView.togglePlayerActive();
  }
};
const controllerHold = function (currPlayerNum) {
  const currPlayer = model[`player${currPlayerNum}`];

  pigGameView.showCurrent(0);
  model.calcScore(currPlayer);
  pigGameView.showScore(currPlayer.score);
  currPlayer.current = 0;
  if (currPlayer.score >= SCORE_FOR_WIN) {
    pigGameView.changeBackground(true);
    pigGameView.btnRollShouldWork(false);
    pigGameView.btnHoldShouldWork(false);
    return;
  }
  pigGameView.togglePlayerActive();
};
const controllerNew = function (currPlayerNum) {
  const currPlayer = model[`player${currPlayerNum}`];
  if (currPlayer.score >= SCORE_FOR_WIN) {
    pigGameView.changeBackground();
  }
  if (+currPlayerNum === 2) {
    pigGameView.togglePlayerActive();
  }

  model.resetPlayer(model.player1);
  model.resetPlayer(model.player2);
  pigGameView.showCurrent(0);
  pigGameView.changeDice(0);
  pigGameView.showScore(model.player1.score, true);
  pigGameView.btnRollShouldWork(true);
  pigGameView.btnHoldShouldWork(true);
};
const init = function () {
  pigGameView.showScore(model.player1.score, true);
  pigGameView.handlerBtnRoll(controllerDice);
  pigGameView.handlerBtnHold(controllerHold);
  pigGameView.handlerBtnNew(controllerNew);
};
init();
