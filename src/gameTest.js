const Card = require("./card");
const Player = require("./player");
const Dealer = require ("./dealer.js");
const Arena = require ("./arena.js");

// Create Players
const playerOne = new Player("playerOne");
const playerTwo = new Player("playerTwo");

//Create Dealer
const dealer = new Dealer();
dealer.getCards();
dealer.shuffleCards(dealer.deck)
dealer.dealCards();

//Create Arena
const arena = new Arena();
const playerOneWin = cardsInPlay.compare();
expect(playerOneWin).toBe()

// arena.cardsInPlay.compare();

//Play a round
cardsInPlay.compare();





