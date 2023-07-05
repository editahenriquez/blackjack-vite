import _ from 'underscore';
import {createDeck, dealCard, createCard, amountPoints, turnComputer} from './usecases';

/*
  2C = Two of clubs
  2D = Two of Diamonds
  2H = Two of Hearts
  2S = Two of Spades
*/

const myModule = (() => {
  'use strict';

  let deck = [];
  const types = ['C', 'D', 'H', 'S'],
        specials = ['A','J','Q','K'];

  let pointsPlayers = [];

  //HTM References
  const btnDeal = document.querySelector('#btnDeal'),
        btnStand = document.querySelector('#btnStand'),
        btnReset = document.querySelector('#btnReset');

  
  const divCardsPlayers = document.querySelectorAll('.divCards'),
        pointsHTML = document.querySelectorAll('small'),
        score = document.querySelectorAll('.score');

  const resetGame = (numPlayers = 2) => {
    deck = createDeck(types, specials);
    pointsPlayers= [];

      for (let i = 0; i < numPlayers; i++){
          pointsPlayers.push(0);
      }

      pointsHTML.forEach( elem => elem.innerText = 0);
      divCardsPlayers.forEach( elem => elem.innerText = '');
      score.forEach( elem => elem.innerText = '');

      btnDeal.disabled = false;
      btnStand.disabled = false;
  };

  //Events
  btnDeal.addEventListener('click',()=>{
      const card = dealCard(deck);
      let points= amountPoints(card, 0, pointsPlayers, pointsHTML);

      createCard(card, 0, divCardsPlayers);

      if (points > 21) {
          score[pointsPlayers.length - 1].innerText = '  Winner!🥇';

          btnDeal.disabled = true;
          btnStand.disabled = true;
          turnComputer(points, deck, pointsPlayers, pointsHTML, divCardsPlayers, score );

      } else if (points === 21) {
          score[0].innerText = '  Winner!🥇';
          btnDeal.disabled = true;
          btnStand.disabled = true;
          turnComputer(points, deck, pointsPlayers, pointsHTML, divCardsPlayers, score );
      };
  });


  btnStand.addEventListener('click', () => {
      btnDeal.disabled = true;
      btnStand.disabled = true;
      turnComputer(pointsPlayers[0], deck, pointsPlayers, pointsHTML, divCardsPlayers, score );
  });

  btnReset.addEventListener('click', () => {
      resetGame();
  });

  return {
      newGame: resetGame
  };
})();