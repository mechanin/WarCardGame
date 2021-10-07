const Player = require ("../src/player.js");

//initialise Card object
const Card = function(cardSuit, cardValue, cardHolder, faceUp){
    this.suit = cardSuit;
    this.value = cardValue;
    this.cardHolder = cardHolder;
    this.faceUp = faceUp;
}



module.exports = Card;