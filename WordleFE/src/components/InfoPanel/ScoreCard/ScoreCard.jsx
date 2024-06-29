


function ScoreCard({ name = '', email = '', imageUrl = '', score = 0}) {
    
    return (
        <div className="score-card">
            <img className="score-card-image" src={imageUrl} alt="player" />
            <div className="score-card-text">
                <div className="score-card-name">{name.toUpperCase()}</div>
                <span className="score-card-email">&bull; {email}</span>
                <div className="score-card-score">Score: {score}</div>
            </div>
        </div>
    );
}


export default ScoreCard