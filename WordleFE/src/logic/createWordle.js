import { generateWord } from "../util/WordleUtiliies"

async function createWordle() {

    let word = await generateWord()
    // let word = "apple"
    let guesses = 0
    let maxGuesses = 5
    let round = 1
    let maxRounds = 3
    let isRoundOver = false
    let isRoundWon = false
    let words = []
    let colorHintHistory = []
    let keyboardColorHints = new Map()
    let score = 0

    function guessWord(guess) {

        let colorHints = {}
        if (guess === word) {
            isRoundWon = true
            isRoundOver = true
            score += (5 - guesses) * 100;
        } else if (guesses === maxGuesses-1) {
            isRoundOver = true
        } else {
            guesses++
        }
        guess.split("").forEach((letter, index) => {
            if (letter === word.split("")[index]) {
                colorHints[index] = "#91C483"
                keyboardColorHints.set(letter.toUpperCase(), "#91C483")
            } else if (word.split("").includes(letter)) {
                colorHints[index] = "#FFE162"
                keyboardColorHints.set(letter.toUpperCase(), "#FFE162")
            } else {
                colorHints[index] = "#FF6464"
                keyboardColorHints.set(letter.toUpperCase(), "#FF6464")
            }
        });
        words.push(guess)
        colorHintHistory.push(colorHints)
    }

    function getWords() {
        return words
    }

    function getColorHintHistory() {
        return colorHintHistory
    }

    function getKeyboardColorHints() {
        return keyboardColorHints
    }

    function isTheRoundOver() {
        return isRoundOver
    }

    function isTheRoundWon() {
        return isRoundWon
    }

    function isLastRound() {
        return round === maxRounds
    }

    function getScore() {
        return score
    }

    async function nextRound() {
        word = await generateWord()
        // word = "apple"
        guesses = 0
        isRoundOver = false
        isRoundWon = false
        words = []
        colorHintHistory = []
        keyboardColorHints = new Map()
        round++
    }

    return { guessWord, getWords, getColorHintHistory, getKeyboardColorHints, isTheRoundOver, isTheRoundWon, nextRound, isLastRound, getScore }
}

export default createWordle
