import LogoutPanel from "../LogoutPanel/LogoutPanel"


function PlayerInfoPanel({ name = '', email = '', imageUrl = ''}){


    return(
        <>
            <div className="player-info">
                <img className="player-image" src={imageUrl} alt="player"/>
                <div className="player-name">{name.toUpperCase()}</div>
                {/* <div className="player-email">{email}</div> */}
            </div>
            <LogoutPanel/>
        </>
    )
}

export default PlayerInfoPanel