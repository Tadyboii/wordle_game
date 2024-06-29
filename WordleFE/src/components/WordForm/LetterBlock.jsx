


function LetterBlock({
    letter = null, 
    colorHint = null
}) {

    const hasLetter = letter !== null && letter !== '';
    const blockStyle = hasLetter ? { backgroundColor: colorHint} : {};

    return (
        <div className="letter-block" style={blockStyle}>
            <span className="letter">{letter}</span>
        </div>
    );
}


export default LetterBlock;