import WordBlock from "./WordBlock";

function WordForm({
    words = [],
    colorHintHistory = [], 
}){;

    return (
        <div className="word-form">
            {Array.from({ length: 5 }, (_, index) => (

                <WordBlock 
                    key={index} 

                    word={words[index]}
                    colorHints={colorHintHistory[index]}
                />

            ))}
        </div>
    )
}

export default WordForm;
