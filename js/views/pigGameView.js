// import img from 'url:../../img/';
import dice1 from 'url:../../img/dice-1.png';
import dice2 from 'url:../../img/dice-2.png';
import dice3 from 'url:../../img/dice-3.png';
import dice4 from 'url:../../img/dice-4.png';
import dice5 from 'url:../../img/dice-5.png';
import dice6 from 'url:../../img/dice-6.png';
const images = {
  dice1,
  dice2,
  dice3,
  dice4,
  dice5,
  dice6,
};
class pigGameView {
  _player1 = document.querySelector('.player--0');
  _player2 = document.querySelector('.player--1');
  _dice = document.querySelector('.dice');
  _btnRoll = document.querySelector('.btn--roll');
  _btnHold = document.querySelector('.btn--hold');
  _btnNew = document.querySelector('.btn--new');
  _currScoreLabel = document.querySelector('.player--active .current-score');
  _scoreLabel = document.querySelector('.player--active .score');
  _dataCurrPlayer;
  constructor() {
    this._dice.style.display = 'none';
  }
  btnRollShouldWork(answer = true) {
    if (!answer) {
      this._btnRoll.disabled = true;
    } else {
      this._btnRoll.disabled = false;
    }
  }
  btnHoldShouldWork(answer = true) {
    if (!answer) {
      this._btnHold.disabled = true;
    } else {
      this._btnHold.disabled = false;
    }
  }
  changeBackground(answer = false) {
    if (answer) {
      document.querySelector('.player--active').classList.add('player--winner');
    } else {
      document
        .querySelector('.player--active')
        .classList.remove('player--winner');
    }
  }
  setCurrPlayer(currPlayer) {
    this._dataCurrPlayer = currPlayer;
  }
  togglePlayerActive() {
    this._player1.classList.toggle('player--active');
    this._player2.classList.toggle('player--active');
  }
  changeDice(num) {
    if (num === 0) {
      this._dice.style.display = 'none';
      return;
    }
    this._dice.style.display = 'block';
    this._dice.src = images[`dice${num}`];
  }
  showCurrent(num) {
    this._currScoreLabel.innerHTML = num;
  }
  showScore(score, init = false) {
    if (init) {
      document.querySelectorAll('.score').forEach(sc => (sc.innerHTML = score));
      return;
    }

    this._scoreLabel.innerHTML = score;
  }
  updateScoreLabels() {
    this._currScoreLabel = document.querySelector(
      '.player--active .current-score'
    );
    this._scoreLabel = document.querySelector('.player--active .score');
  }
  handlerBtnNew(handler) {
    this._btnNew.addEventListener('click', () => {
      const currPlayerNum = document
        .querySelector('.player--active')
        .getAttribute('data-player');
      this.updateScoreLabels();
      handler(currPlayerNum);
    });
  }
  handlerBtnHold(handler) {
    this._btnHold.addEventListener('click', () => {
      const currPlayerNum = document
        .querySelector('.player--active')
        .getAttribute('data-player');
      this.updateScoreLabels();
      handler(currPlayerNum);
    });
  }
  handlerBtnRoll(handler) {
    this._btnRoll.addEventListener('click', () => {
      const currPlayerNum = document
        .querySelector('.player--active')
        .getAttribute('data-player');
      this.updateScoreLabels();
      handler(currPlayerNum);
    });
  }
}
export default new pigGameView();
