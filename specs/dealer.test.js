const Dealer = require("../src/dealer.js")
const Player = require("../src/player.js")
const Card = require("../src/card.js");

describe("Dealer Tests", function() {

    test("There are 52 cards in a fresh deck", function() {
    
        // Arrange
            // Create Players
    
            //Create Dealer
            const dealer = new Dealer();
        // Act
            dealer.getCards();
    
        // Assert
            expect(dealer.deck.length).toBe(52);
            console.log(dealer.deck);
    });
    
    test("There are 4 jacks in a fresh deck", function() {
            // Arrange
            // Create Dealer
            const dealer = new Dealer();
            // Act
            dealer.getCards();
    
            const filtered = dealer.deck.filter(function(card) {
                return card.value == 11;
    
            })
            // Assert
            expect(filtered.length).toBe(4);
    });
    
    test("There are 14 diamonds in a fresh deck", function(){
            // Arrange
            // Create Dealer
            const dealer = new Dealer();
            // Act
            dealer.getCards();
    
            const filtered = dealer.deck.filter(function(card) {
                return card.suit == "diamond";
            })
            // Assert
            expect(filtered.length).toBe(13);
    });
    
});

    test("The dealer shuffles their deck correctly (check 1st value)", function(){
            // Arrange
            // Create Dealer
            const dealer = new Dealer();
            // Act
            dealer.getCards();
            firstCardBeforeShuffle = dealer.deck[0,1,2,3,4,5,6,7,8]

            dealer.shuffleCards(dealer.deck);
            firstCardAfterShuffle = dealer.deck[0,1,2,3,4,5,6,7,8]
            // Assert
            expect(firstCardBeforeShuffle == firstCardAfterShuffle).toBeFalsy();
    }); 

    test("The dealer deals 26 cards to each player", function(){
            // Arrange
            // Create Dealer
            const dealer = new Dealer();
            dealer.getCards();
            dealer.shuffleCards(dealer.deck);
            
            //Create Players
            const playerOne = new Player("playerOne");
            const playerTwo = new Player("playerTwo");

            // Act
            dealer.dealCards(dealer, playerOne, playerTwo)

            // Assert
            expect(playerOne.deck.length).toBe(26);
            expect(playerTwo.deck.length).toBe(26);
    })




