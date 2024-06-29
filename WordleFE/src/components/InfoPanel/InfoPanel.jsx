import { fetchHighscores } from "../../api/fetchHighscores"
import React, { useEffect, useState } from 'react'
import ScoreCard from "./ScoreCard/ScoreCard"

function InfoPanel(){

    const [highscores, setHighscores] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const highscores = await fetchHighscores()
            setHighscores(highscores)
        }
        fetchData()
    }, [])

    useEffect(() => {
    }, [highscores])

    return (
        <div className="info-panel">
            <header className="scoreboard">Scoreboard</header>
            {highscores && highscores.map((highscore, index) => (
                <ScoreCard
                    key={index}
                    name={highscore.user.name}
                    email={highscore.user.email}
                    score={highscore.score}
                    imageUrl={highscore.user.picture}
                />
            ))}
        </div>
    )
}

export default InfoPanel