import {valueCard} from './';

/**
 * 
 * @param {number} card 
 * @param {number} turn 
 * @param {Array<string>} pointsPlayers 
 * @param {Array<any>} pointsHTML 
 * @returns number
 */
export const amountPoints = (card, turn, pointsPlayers, pointsHTML) => {
    pointsPlayers[turn] = pointsPlayers[turn] + valueCard(card);
    pointsHTML[turn].innerText = pointsPlayers[turn];
    return pointsPlayers[turn];
};
