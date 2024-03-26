import { deck } from '../src/index.js';

//OUTPUT TOTAL NUMBER OF CARDS
//The code below will output the total number of cards within the deck array.
const cardDeck = deck(5);
console.log(`Total number of cards in the deck:\n${cardDeck.length}`)
console.log("----------------------------------------")

//---------------------------------------------------------------------------------------------------------
//OUTPUT ALL CARDS
//The code below will output a full list of all the cards stored within the deck array

console.log("Output ALL cards within the deck:");
cardDeck.forEach(card => {
  console.log(card); // Output each card object
});
console.log("----------------------------------------")

//---------------------------------------------------------------------------------------------------------
//SPLICING THE DECK
//The code below will loop through all cards removing 1 card on each itteration.
//This provides a visual of random cards being output.

const count = cardDeck.length;

for (let i = 0; i < count; i++) {
  const randomCard = cardDeck.splice(Math.floor(Math.random() * cardDeck.length), 1)
  console.log(randomCard)
  console.log(`Remaining number of cards in the deck :\n${cardDeck.length}`)
}
console.log("----------------------------------------")
