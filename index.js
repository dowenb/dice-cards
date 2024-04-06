export function deck(numberOfDecks = 5, shouldShuffle = true) {
    
    if (typeof numberOfDecks !== 'number') {
        shouldShuffle = numberOfDecks; // Shift arguments if only one provided
        numberOfDecks = 5; // Set default value for numberOfDecks
    }
    
    const dice6 = [1, 2, 3, 4, 5, 6];
    let cards = [];

    for (let die1Index = 0; die1Index < dice6.length; die1Index++) {
        for (let die2Index = 0; die2Index < dice6.length; die2Index++) {
            let die1 = dice6[die1Index];
            let die2 = dice6[die2Index];
            let sum;
            try {
                sum = sumDice(die1, die2);
            } catch (e) {
                console.error(e);
            }
            let card = {
                die1,
                die2,
                sum
            };
            cards.push(card);
        }
    }

    // Repeat the deck n number of times
    const repeatedDeck = repeatDeck(cards, numberOfDecks);

    // Shuffle the repeated deck to randomise order.
    //const shuffledRepeatedDeck = shuffleArray(repeatedDeck);

    if (shouldShuffle) {
        shuffleArray(repeatedDeck);
    }

    //Return (output) the shuffled deck
    return repeatedDeck;

}

function sumDice(die1, die2) {
    if (die1 < 1 || die1 > 6) {
        throw new Error('Die 1 is out of range')
    }

    if (die2 < 1 || die2 > 6) {
        throw new Error('Die 2 is out of range')
    }

    const sum = die1 + die2

    if (sum < 2 || sum > 12) {
        throw new Error('Sum of dice out of range')
    }

    return sum
}

// Function to repeat the deck 'n' times
export function repeatDeck(deck, n) {
    let repeatedDeck = [];
    for (let deckCount = 0; deckCount < n; deckCount++) {
        repeatedDeck = repeatedDeck.concat(deck);
    }
    return repeatedDeck;
}

// Function to shuffle an array (uses the Fisher-Yates (aka Knuth) Shuffle algorithm.)
export function shuffleArray(array) {
    // Loop through the array starting from the last element
    for (let cardCount = array.length - 1; cardCount > 0; cardCount--) {
        // Generate a random index between 0 and the value of cardCount (inclusive)
        const randomIndex = Math.floor(Math.random() * (cardCount + 1));
        // Swap the current element with the randomly selected element
        [array[cardCount], array[randomIndex]] = [array[randomIndex], array[cardCount]];
    }
    // Return the shuffled array
    return array;
}
