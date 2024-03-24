const diceCards = require('./index')

const deck = diceCards.deck()

console.log(`Number of cards in the desk:\n${deck.length}`)

const randomCard = deck.splice(Math.floor(Math.random() * deck.length), 1)

console.log(randomCard)

console.log(`Remaining number of cards in deck :\n${deck.length}`)
