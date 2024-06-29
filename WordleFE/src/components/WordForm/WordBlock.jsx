import LetterBlock from './LetterBlock';
import useTypeLogic from '../../hooks/useTypeLogic';

function WordBlock({ 
    word = [],
    colorHints = [],
}) {

    return (
        <div className="word-block">
            {Array.from({ length: 5 }, (_, index) => (

                <LetterBlock 
                    key={index} 
                    
                    letter={word[index]} 
                    colorHint={colorHints[index]} 
                />

            ))}
        </div>
    );
}

export default WordBlock;