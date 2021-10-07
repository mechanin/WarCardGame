const Dealer = require ("./dealer.js")
const Card = require ("./card.js")

const Arena = function(){
    this.cardsInPlayOne = [];
    this.cardsInPlayTwo = [];
    this.Player = null;
    this.warDeckOne = [];
    this.warDeckTwo = [];
}

Arena.prototype.playCards = function(){
    // Take top card of Player 1's deck, turn it face up, add to play
    playerOne.deck[0].faceUp = true
    this.cardsInPlayOne.push(playerOne.deck[0])
    playerOne.deck.shift()
    
    //Take top card of Player 2's deck, turn it face up, add to play
    playerTwo.deck[0].faceUp = true
    this.cardsInPlayTwo.push(playerTwo.deck[0])
    playerTwo.deck.shift()
}

Arena.prototype.compare(cardsInPlayOne, cardsInPlayTwo) {

    if (cardsInPlayOne.value > cardsInPlayTwo.value) {
        playerOne.deck.push(cardsInPlayOne);
        cardsInPlayOne.shift();
        playerOne.deck.push(cardsInPlayTwo);
        cardsInPlayTwo.shift();
        console.log("Player 1 wins round");
    }
    else if (playerTwoCard.value > playerOneCard.value) {
        playerTwo.deck.push(cardsInPlayOne);
        cardsInPlayOne.shift();
        playerTwo.deck.push(cardsInPlayTwo);
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


Arena.prototype.declareLoser(playerOne.deck, playerTwo.deck) {
    if (playerOne.deck.length === 0) {
        return "Player one loses";
    } else {
        return "Player two loses";
    }
}

module.exports = Arena();