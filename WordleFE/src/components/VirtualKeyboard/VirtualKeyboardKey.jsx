import { useEffect, useState } from "react"

function VirtualKeyboardKey({
    letter = null,
    colorHint = null,
    isSpecial = false,
}) {
    const [isActive, setIsActive] = useState(false)
    const keyClass = `keyboard-key ${isSpecial ? 'special-key' : ''} ${isActive ? 'active' : ''}`

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key.toUpperCase() === letter ||
                (event.key === 'Enter' && letter === 'Enter') ||
                (event.key === 'Backspace' && letter === 'Backspace')
            ) {
                setIsActive(true)
            }
        }
        const handleKeyUp = (event) => {
            if (event.key.toUpperCase() === letter ||
                (event.key === 'Enter' && letter === 'Enter') ||
                (event.key === 'Backspace' && letter === 'Backspace')
            ) {
                setIsActive(false)
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        window.addEventListener('keyup', handleKeyUp)
        return () => {
            window.removeEventListener('keydown', handleKeyDown)
            window.removeEventListener('keyup', handleKeyUp)
        }

    }, [letter])

    const handleOnMouseDown = (event) => {
        const keyDownEvent = new KeyboardEvent('keydown', { key: letter })
        window.dispatchEvent(keyDownEvent)
    }

    const handleOnMouseUp = (event) => {
        const keyUpEvent = new KeyboardEvent('keyup', { key: letter })
        window.dispatchEvent(keyUpEvent)
        event.target.blur()
    }

    const handleOnKeyDown = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault()
            event.target.blur()
        }
    }

    const colorStyle = colorHint ? { backgroundColor: colorHint, color: "black" } : {}

    return (
        <button
            className={keyClass}
            style={colorStyle}
            onMouseDown={handleOnMouseDown}
            onMouseUp={handleOnMouseUp}
            onKeyDown={handleOnKeyDown}
        >{letter}</button>
    )
}

export default VirtualKeyboardKey