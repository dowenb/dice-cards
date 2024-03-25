import multiDeck from '../src/index.js';

//OUTPUT TOTAL NUMBER OF CARDS
//The code below will output the total number of cards within the deck array.
const deck = multiDeck();
console.log(`Total number of cards in the multi-deck:\n${deck.length}`)
console.log("----------------------------------------")

//---------------------------------------------------------------------------------------------------------
//OUTPUT ALL CARDS
//The code below will output a full list of all the cards stored within the deck array

console.log("Output ALL cards within the multi-deck:");
deck.forEach(card => {
  console.log(card); // Output each card object
});
console.log("----------------------------------------")

//---------------------------------------------------------------------------------------------------------
//SPLICING THE DECK
//The splice() method modifies the original array and returns an array containing the removed element(s).
//The code below will loop through all cards removing 1 card on each itteration.
//This provides a visual of random cards being output.

const count = deck.length;

for (let i = 0; i < count; i++) {
  const randomCard = deck.splice(Math.floor(Math.random() * deck.length), 1)
  console.log(randomCard)
  console.log(`Remaining number of cards in deck :\n${deck.length}`)
}
console.log("----------------------------------------")
