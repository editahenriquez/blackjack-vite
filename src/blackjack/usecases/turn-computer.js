import { amountPoints, createCard, dealCard, defineWinner } from "./";
/**
 * 
 * @param {number} pointsMinimun 
 * @param {Array<any>} deck 
 * @param {Array<number>} pointsPlayers 
 * @param {Array>any>} pointsHTML 
 * @param {Array>any>} divCardsPlayers 
 * @param {Array<any>} score 
 */
export const turnComputer = (pointsMinimun, deck, pointsPlayers, pointsHTML, divCardsPlayers, score ) => {
    let pointsComputer = 0;
    do {
        const card = dealCard(deck);
        pointsComputer= amountPoints(card, pointsPlayers.length - 1, pointsPlayers, pointsHTML );
        createCard(card, pointsPlayers.length - 1, divCardsPlayers);
        
    }while( pointsComputer < pointsMinimun && pointsMinimun<= 21);

    defineWinner(pointsPlayers, score);
};