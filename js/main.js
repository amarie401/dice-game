"use strict";

const diceGame = {
  countArray: [],
  counter: 0,
  dateHMS: moment().format('LTS'),
  dateYMD: moment().format('MMMM Do YYYY'),
  dice1: document.querySelector('.diceNum1 p'),
  dice2: document.querySelector('.diceNum2 p'),
  gameStartTime: document.querySelector('.date-field p'),
  startSeconds: null,
  timeDiff: 0,
  rollBtn: document.getElementById('rollBtn'),
  subTitle: document.querySelector('h3'),
  title: document.querySelector('header'),
  totalWin: document.querySelector('.total-wins p'),
  totalWins: 0,
  totalLoss: document.querySelector('.total-loss p'),
  totalLosses: 0,

  getDate() {
    this.gameStartTime.innerHTML = `${this.dateYMD} at ${this.dateHMS}`;
  },

  newRoll() {
    let randomNum1 = Math.floor(Math.random() * 6) + 1;
    let randomNum2 = Math.floor(Math.random() * 6) + 1;
    this.dice1.innerHTML = `${randomNum1}`;
    this.dice2.innerHTML = `${randomNum2}`;


    if (randomNum1 + randomNum2 === 11 || randomNum1 + randomNum2 === 7 ) {
      let ender = Date.now();
      this.timeDiff = Math.ceil((ender - this.startTime) / 1000);
      this.title.innerHTML = `Winner!`;
      this.subTitle.innerHTML = `It took you ${this.counter} tries and ${this.timeDiff} seconds`;
      this.counter = 0;
      this.countArray = [];
      this.totalWins++;
      this.totalWin.innerHTML = `Total Wins: ${this.totalWins}`;
      return;
    }
    else {
      this.title.innerHTML = `Try Again!`;
      this.subTitle.innerHTML = '';
      this.totalLoss.innerHTML = `Total Losses: ${this.totalLosses}`;
      this.totalLosses++;
    }
  },

  trackRolls() {
    this.rollBtn.addEventListener('click', () => {
      event.preventDefault;
      this.counter++;
      this.countArray.push(this.counter);
      this.newRoll();
      const startingTimer = Date.now();
      this.startTime = startingTimer;

      console.dir(event);
      console.log(this.counter);
      console.log(this.countArray);

    });
  },

  init() {
    this.getDate();
    this.trackRolls();
    console.log(this.dateHMS);
    console.log(this.dateYMD);
  }

};

diceGame.init();
