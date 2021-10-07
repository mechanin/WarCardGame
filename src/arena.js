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
    // Comparing face up cards for both players and if playerone's card is higher then both cards go into the back of player ones deck and both played card are removed from the top of player and player two's deck.
    if (cardsInPlayOne[0].value > cardsInPlayTwo[0].value) {
        playerOne.deck.push(cardsInPlayOne[0]);
        cardsInPlayOne.shift();
        playerOne.deck.push(cardsInPlayTwo[0]);
        cardsInPlayTwo.shift();
        console.log("Player 1 wins round");
    }   // Comparing face up cards for both players and if playertwo's card is higher then both cards go into the back of player twos deck
    else if (cardsInPlayTwo[0].value > cardsInPlayOne[0].value) {
        playerTwo.deck.push(cardsInPlayOne[0]);
        cardsInPlayOne.shift();
        playerTwo.deck.push(cardsInPlayTwo[0]);
        cardsInPlayTwo.shift();
        console.log("Player 2 wins round");
    } //if the vard value from player and player two are equal, print "Draw, war!" and call on function arena.war
    else {
        console.log("Draw, War!");

        // return method  Arena.war
    //     for (i = 0; i = 3; i +=1) {
    //         this.warDeckOne.push(playerOne.deck[i]);
    //         playerOne.deck.shift()
    //         this.warDeckTwo.push(playerTwo.deck[i]);
    //         playerTwo.deck.shift()
    }
}

Arena.prototype.war = function(playerOne, cardsInPlayOne, warDeckOne, playerTwo, cardsInPlayTwo, warDeckTwo){
   //   Players take their cards from arena.cardsInPlayOne and from arena.cardsInPlayTwo arrays and put them into arena.warDeckOne and arena.warDeckTwo
     warDeckOne.push(cardsInPlayOne[0]);
     cardsInPlayOne.shift();
     warDeckTwo.push(cardsInPlayTwo[0]);
     cardsInPlayTwo.shift();
   //   Players draw top card from player.deck and put into arena.cardsInPlayOne and from arena.cardsInPlayTwo arrays
    Arena.playCards(playerOne, playerTwo);
   //   Players take two cards from player.deck and put into arena.warDeckOne and arena.warDeckTwo
    warDeckOne.push(playerOne.deck[0,1]);
    playerOne.deck.shift();
    playerOne.deck.shift();

    warDeckTwo.push(playerTwo.deck[0,1]);
    playerTwo.deck.shift();
    playerTwo.deck.shift();
   //   arena.compare arena.cardsInPlayOne arena.cardsInPlayTwo
    arena.compare(playerOne, playerTwo);
}


// Arena.prototype.compareWar = function(warDeckOne, warDeckTwo) {
//     if (warDeckOne.value[0] > warDeckTwo.value[0]) {
//         playerOne.deck.push(warDeckOne)
//         playerOne.deck.push(warDeckTwo)
        
//     } 

  

      

      
Arena.prototype.declareLoser = function(playerOne) {
    if (playerOne.deck.length === 0) {
        return "Player one loses";
    } else {
        return "Player two loses";
    }
}

module.exports = Arena;