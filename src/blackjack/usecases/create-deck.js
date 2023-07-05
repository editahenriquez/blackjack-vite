import _ from 'underscore';
/**
 * 
 * @param {array<string>} types 
 * @param {array<string>} specials 
 * @returns {array<string>}
 */

export const createDeck = (types, specials) => {
    if (!types || types.lenght ===0) throw new Error('types is requiered');
    let deck = [];
    for (let i = 2; i <=10; i++) {
        for (let tipo of types){
            deck.push(i + tipo)
        }
    }

    for (let tipo of types){
        for (let esp of specials){
            deck.push(esp + tipo);
        }
    }

    return _.shuffle(deck);
};