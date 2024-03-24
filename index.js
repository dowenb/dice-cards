exports.printMsg = function () {
    console.log("This is a message from dice-cards package");
}

exports.deck = function () {
    const d6 = [1, 2, 3, 4, 5, 6]
    let cards = []

    console.log("Building deck of 2d6 dice throws");

    for (let i = 0; i < d6.length; i++) {
        for (let j = 0; j < d6.length; j++) {

            let die1 = d6[i];
            let die2 = d6[j]

            try {
                sum = sumDice(die1, die2)
            } catch (e) {
                console.error(e);
            }

            let card = {
                die1,
                die2,
                sum
            }
            cards.push(card)
        }
    }

    return cards
}

function sumDice(a, b) {
    if (a < 1 || a > 6) {
        throw new Error('Die 1 is out of range')
    }

    if (b < 1 || b > 6) {
        throw new Error('Die 2 is out of range')
    }

    const sum = a + b

    if (sum < 2 || sum > 12) {
        throw new Error('Sum of dice out of range')
    }

    return sum
}