/**
 * 
 * @param {array<string>} deck 
 * @returns <string>
 */
export const dealCard = (deck) => {
    if ( !deck || deck.length === 0) {
        throw 'Theres no cards in the deck'
    }

    return deck.pop();
};