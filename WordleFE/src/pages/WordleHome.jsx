import WordleGame from "../components/WordleGame/WordleGame"
import ProfilePanel from "../components/ProfilePanel/ProfilePanel"
import InfoPanel from "../components/InfoPanel/InfoPanel"
import '../styles/WordleAreaStyle.css'
import '../styles/KeyboardStyle.css'
import '../styles/ProfilePanelStyle.css'
import '../styles/InfoPanelStyle.css'
import '../styles/Home.css'

function WordleHome() {

    return (
        <div className="wordle-home">
            <div className="profile-area">
                <ProfilePanel/>
            </div>
            <div className="wordle-area">
                <WordleGame/>
            </div>
            <div className="info-area">
                <InfoPanel/>
            </div>
        </div>
    )
}

export default WordleHome