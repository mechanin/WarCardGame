const Card = require("./card")
const Player = require("./player")

const Dealer = function(){
    this.deck = []
}

// Define card types and possible values
const suits = ["spade","club","heart","diamond"];
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

//Create 52 cards, 4 of each type
Dealer.prototype.getCards = function(){

    for (i = 0; i < suits.length; i++) {
        for (j = 0; j < values.length; j++) {
            const card = new Card(suits[i],values[j],"Dealer",false);
            this.deck.push(card);
        };
    };
};

// console.log(dealer.deck)
// console.log("size of pile is " + dealer.deck.length)

//Shuffle using Fisher-Yates (aka Knuth) Shuffle which I found here https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

Dealer.prototype.shuffleCards = function(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  
//   console.log(dealer.deck);

//Assign half the cards to each player's deck
Dealer.prototype.dealCards = function() {
    // Give first half of dealer's deck to player one
    for (k = 0; k < this.deck.length/2; k++) {
        this.deck[k].cardHolder = "playerOne";
        playerOne.deck.push(dealer.deck[k]);
    };
    // Give second half of dealer's deck to player two
    for (p = dealer.deck.length/2; p < dealer.deck.length; p++) {
        this.deck[p].cardHolder = "playerTwo";
        playerTwo.deck.push(dealer.deck[p]);
    };
};


// console.log(playerOne.deck);
console.log(playerOne.deck);
console.log(playerOne.deck.length)
console.log(playerTwo.deck);
console.log(playerTwo.deck.length)