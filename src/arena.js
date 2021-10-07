const Dealer = require ("./dealer.js")
const Card = require ("./card.js")

const Arena = function(){
    this.cardsInPlayOne = [];
    this.cardsInPlayTwo = [];
    this.warDeckOne = [];
    this.warDeckTwo = [];
}

Arena.prototype.playCards = function(playerOne, playerTwo){
    // Take top card of Player 1's deck, turn it face up, add to play
    playerOne.deck[0].faceUp = true
    this.cardsInPlayOne.push(playerOne.deck[0])
    playerOne.deck.shift()
    
    //Take top card of Player 2's deck, turn it face up, add to play
    playerTwo.deck[0].faceUp = true
    this.cardsInPlayTwo.push(playerTwo.deck[0])
    playerTwo.deck.shift()
}

Arena.prototype.compare = function(playerOne, cardsInPlayOne, playerTwo, cardsInPlayTwo) {

    if (cardsInPlayOne[0].value > cardsInPlayTwo[0].value) {
        playerOne.deck.push(cardsInPlayOne[0]);
        cardsInPlayOne.shift();
        playerOne.deck.push(cardsInPlayTwo[0]);
        cardsInPlayTwo.shift();
        console.log("Player 1 wins round");
    }
    else if (cardsInPlayTwo[0].value > cardsInPlayOne[0].value) {
        playerTwo.deck.push(cardsInPlayOne[0]);
        cardsInPlayOne.shift();
        playerTwo.deck.push(cardsInPlayTwo[0]);
        cardsInPlayTwo.shift();
        console.log("Player 2 wins round");
    }
    else {
        console.log("Draw, War!");
    //     for (i = 0; i = 3; i +=1) {
    //         this.warDeckOne.push(playerOne.deck[i]);
    //         playerOne.deck.shift()
    //         this.warDeckTwo.push(playerTwo.deck[i]);
    //         playerTwo.deck.shift()
    }
}

// Arena.prototype.playCardsWar = function(){ 
//     for (i = 0; i = 3; i +=1) {
//         drawDeckOne.push(playerOne.deck[i]);
//         drawDeckTwo.push(playerTwo.deck[i]);

//         if (drawDeckOne[1] > drawDeckTwo[1]){
//             playerOne.deck.push(drawDeckOne);
//             playerOne.deck.push(drawDeckTwo);
//             playerOne.deck.shift(drawDeckOne);
//             playerTwo.deck.shift(drawDeckTwo);
            

//         }
//         else if (drawDeckTwo[1] < drawDeckOne[1]) {
//             playerTwo.deck.push(drawDeckOne);
//             playerTwo.deck.push(drawDeckTwo);
//             playerOne.deck.shift(drawDeckOne);
//             playerTwo.deck.shift(drawDeckTwo);
//         }
//         else {
            
//         }
//     }
// }


Arena.prototype.declareLoser = function(playerOne) {
    if (playerOne.deck.length === 0) {
        return "Player one loses";
    } else {
        return "Player two loses";
    }
}

module.exports = Arena;