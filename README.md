# dice-cards

A fairer way to provide 2d6 dice rolls

## What works so far

```
const diceCards = require('dice-cards')

# Get a new deck of dice cards
# A deck is an array of card objects
# each card has 3 elements, die1, die2 and sum
const deck = diceCards.deck()

# Get a card from a random place in the deck
# This assigns 1 card to the variable randomCard and removes it from the deck
const randomCard = deck.splice(Math.floor(Math.random() * deck.length), 1)


console.log(randomCard)
# [ { die1: 5, die2: 3, sum: 8 } ]
```

## TODO

- Create a stack of multiple decks to reduce predictability
- Persist a single instance of the deck, removing need for handling the deck in client application
- Create a draw card function that returns a random card from the deck
- Reset and shuffle the deck 
- Allow card to be returned to the deck
- Introduce robust tests
- Auto publish package on push to repository
- Improve documentation
