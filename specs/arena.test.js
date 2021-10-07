const Arena = require("../src/arena.js");
const Player = require("../src/player");
const Card = require("../src/card.js");
const Dealer = require("../src/dealer.js");


describe("Arena Tests", function() {

    test("arena moves top card from each player's deck into play area", function() {
    
        // Arrange
            // Create Players
            const playerOne = new Player("playerOne");
            const playerTwo = new Player("playerTwo");
            // Create Dealer
            const dealer = new Dealer();
            dealer.getCards();
            dealer.shuffleCards(dealer.deck)
            dealer.dealCards(dealer, playerOne, playerTwo);
            // Create Arena
            const arena = new Arena();
        // Act
            arena.playCards(playerOne, playerTwo);
            
    
        // Assert
            expect(playerOne.deck.length).toBe(25);
            expect(playerTwo.deck.length).toBe(25);
            expect(arena.cardsInPlayOne.length).toBe(1);
            expect(arena.cardsInPlayTwo.length).toBe(1);
    });


    test("playerOne has the higher value, playerOne should win", function() {
    
        // Arrange
            // Create Players
            const playerOne = new Player("playerOne");
            const playerTwo = new Player("playerTwo");
            // Create Dealer
            const dealer = new Dealer();
            dealer.getCards();
            dealer.shuffleCards(dealer.deck)
            dealer.dealCards(dealer, playerOne, playerTwo);
            playerOne.deck.unshift(new Card("diamond", 14, playerOne, false));
            playerTwo.deck.unshift(new Card("club", 2, playerOne, false));
            // Create Arena
            const arena = new Arena();
        // Act
            arena.playCards(playerOne, playerTwo);
            arena.compare(playerOne, arena.cardsInPlayOne, playerTwo, arena.cardsInPlayTwo);
        // Assert
            expect(arena.cardsInPlayOne.length).toBe(0);
            expect(arena.cardsInPlayTwo.length).toBe(0);
            expect(playerOne.deck.length).toBe(28);
            expect(playerTwo.deck.length).toBe(26);
    });

    test("playerOne has the higher value, playerOne should win", function() {
    
        // Arrange
            // Create Players
            const playerOne = new Player("playerOne");
            const playerTwo = new Player("playerTwo");
            // Create Dealer
            const dealer = new Dealer();
            dealer.getCards();
            dealer.shuffleCards(dealer.deck)
            dealer.dealCards(dealer, playerOne, playerTwo);
            playerOne.deck.unshift(new Card("diamond", 2, playerOne, false));
            playerTwo.deck.unshift(new Card("club", 14, playerOne, false));
            // Create Arena
            const arena = new Arena();
        // Act
            arena.playCards(playerOne, playerTwo);
            arena.compare(playerOne, arena.cardsInPlayOne, playerTwo, arena.cardsInPlayTwo);
        // Assert
            expect(arena.cardsInPlayOne.length).toBe(0);
            expect(arena.cardsInPlayTwo.length).toBe(0);
            expect(playerOne.deck.length).toBe(26);
            expect(playerTwo.deck.length).toBe(28);
    });

    // test("When players stalemate, their cards go into their war array, each player draws 1 card face up and 2 more cards to their war array", function() {
    
        // // Arrange
        //     // Create Players
        //     const playerOne = new Player("playerOne");
        //     const playerTwo = new Player("playerTwo");
        //     // Create Dealer
        //     const dealer = new Dealer();
        //     dealer.getCards();
        //     dealer.shuffleCards(dealer.deck)
        //     dealer.dealCards(dealer, playerOne, playerTwo);
        //     playerOne.deck.unshift(new Card("diamond", 2, playerOne, false));
        //     playerTwo.deck.unshift(new Card("club", 14, playerOne, false));
        //     // Create Arena
        //     const arena = new Arena();
        // // Act
        //     arena.playCards(playerOne, playerTwo);
        //     arena.compare(playerOne, arena.cardsInPlayOne, playerTwo, arena.cardsInPlayTwo);
        // // Assert
        //     expect(arena.cardsInPlayOne.length).toBe(0);
        //     expect(arena.cardsInPlayTwo.length).toBe(0);
        //     expect(playerOne.deck.length).toBe(26);
        //     expect(playerTwo.deck.length).toBe(28);
//     });

});
