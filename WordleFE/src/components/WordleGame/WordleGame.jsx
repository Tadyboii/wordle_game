import React, { useState, useEffect } from 'react'
import WordForm from "../WordForm/WordForm"
import useEnterKey from "../../hooks/useEnterKey"
import useTypeLogic from "../../hooks/useTypeLogic"
import createWordle from '../../logic/createWordle'
import { isWordValid } from '../../util/WordleUtiliies'
import VirtualKeyboard from '../VirtualKeyboard/VirtualKeyboard'
import { postScore } from '../../api/postScore'

function WordleGame() {

    const [wordleGame, setWordleGame] = useState(null)
    const [colorHintHistory, setColorHintHistory] = useState([])
    const [keyboardColorHints, setKeyboardColorHints] = useState([new Map()])
    const [wordsUI, setWordsUI] = useState([])
    const [currentScore, setCurrentScore] = useState(0)
    const [enableTyping, setEnableTyping] = useState(false)
    const { typedLetters, resetLetters, canSubmit } = useTypeLogic(enableTyping)
    const [isRoundOver, setIsRoundOver] = useState(false)

    const isEnterPressed = useEnterKey()

    useEffect(() => {
        initializeGame()
        async function initializeGame() {
            const game = await createWordle()
            setWordleGame(game)
            setColorHintHistory(game.getColorHintHistory())
            setKeyboardColorHints(game.getKeyboardColorHints())
            setEnableTyping(true)
        }
    }, [])

    useEffect(() => {
        type()
        function type() {
            if (typedLetters.length <= 5) {
                setWordsUI([...wordsUI.slice(0, wordsUI.length - 1), typedLetters])
            }
        }
    }, [typedLetters])

    useEffect(() => {
        submit()
        async function submit() {
            if (isEnterPressed && canSubmit) {
                const guess = typedLetters.join("").toLowerCase()

                const isValid = await isWordValid({ word: guess })

                if (!isValid) {
                    return
                }

                wordleGame.guessWord(guess)
                setCurrentScore(wordleGame.getScore())
                resetLetters()
                setWordsUI([...wordsUI, typedLetters])
                setIsRoundOver(wordleGame.isTheRoundOver())
            }
        }
    }, [isEnterPressed])

    useEffect(() => {
        if (isRoundOver) {
            gameOver()
        }
        async function gameOver() {
            setEnableTyping(false)

            if (wordleGame.isLastRound()){
                setTimeout(() => {
                    const playerId = JSON.parse(sessionStorage.getItem('userInfo')).id
                    postScore(playerId, currentScore, wordleGame.getWords())
                    alert("Game Over! Your final score is " + currentScore)
                }, 2000)
            } else {
                setTimeout(resetUI, 2000)
            }

            async function resetUI() {
                await wordleGame.nextRound()
                setWordsUI([])
                setColorHintHistory(wordleGame.getColorHintHistory())
                setKeyboardColorHints(wordleGame.getKeyboardColorHints())
                setEnableTyping(true)
            }
        }

    }, [isRoundOver])

    return (
        <>
            <span className='current-score'>Score: {currentScore}</span>
            <WordForm
                words={wordsUI}
                colorHintHistory={colorHintHistory}
            />
            <VirtualKeyboard keyboardColorHints={keyboardColorHints} />
        </>
    )
}

export default WordleGame