/**
 * 
 * @param {string} card 
 * @param {number} turn 
 * @param {any} divCardsPlayers 
 */

export const createCard = (card, turn, divCardsPlayers) => {
    const imgCard = document.createElement('img')
    imgCard.src=`assets/cards/${card}.png`
    imgCard.classList.add('card');
    divCardsPlayers[turn].append(imgCard);
};