import { deck } from '../src/index.js';

//Check function for default values, 5 decks and shuffle set to true.
const cardDeck = deck();
console.log(`Total number of cards in the deck (default value): ${cardDeck.length}`)
console.log("Output ALL cards within the deck:");
cardDeck.forEach(card => {
  console.log(card);
});
console.log("----------------------------------------\n")

//---------------------------------------------------------------------------------------------------------

//Check function when passing an int value for ONLY the number of decks.
const cardDeck2 = deck(2);
console.log(`Total number of cards in the deck (2 passed as arg): ${cardDeck2.length}`)
console.log("Output ALL cards within the deck:");
cardDeck2.forEach(card => {
  console.log(card);
});
console.log("----------------------------------------\n")

//---------------------------------------------------------------------------------------------------------

//Check function when passing a bool value for ONLY shuffling.
const cardDeck3 = deck(false);
console.log(`Total number of cards in the deck (false passed as arg): ${cardDeck3.length}`)
console.log("Output ALL cards within the deck:");
cardDeck3.forEach(card => {
  console.log(card);
});
console.log("----------------------------------------\n")

//---------------------------------------------------------------------------------------------------------

//SPLICING THE DECK
//The code below will loop through all cards removing 1 card on each itteration.
//This provides a visual of random cards being output.
const count = cardDeck.length;
for (let i = 0; i < count; i++) {
  const randomCard = cardDeck.splice(Math.floor(Math.random() * cardDeck.length), 1)
  console.log(randomCard)
  console.log(`Remaining number of cards in the deck : ${cardDeck.length}`)
}
