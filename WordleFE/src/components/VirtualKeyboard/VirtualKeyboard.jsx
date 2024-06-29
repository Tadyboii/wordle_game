import { useEffect } from "react"
import VirtualKeyboardKey from "./VirtualKeyboardKey"

function VirtualKeyboard({ keyboardColorHints = new Map() }) {
    const rows = [
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        ["Enter", 'Z', 'X', 'C', 'V', 'B', 'N', 'M', "Backspace"]
    ]
    const colorHints = new Map(keyboardColorHints);
    
    return (
        <div className="keyboard">
            {rows.map((row, rowIndex) => (
                <div className="keyboard-row" key={rowIndex}>
                    {row.map((letter, letterIndex) => (
                        <VirtualKeyboardKey 
                            key={letterIndex} 
                            letter={letter} 
                            isSpecial={letter === "Enter" || letter === "Backspace"}
                            colorHint = {colorHints.get(letter)}
                        />
                    ))}
                </div>
            ))}
        </div>
    )
}

export default VirtualKeyboard