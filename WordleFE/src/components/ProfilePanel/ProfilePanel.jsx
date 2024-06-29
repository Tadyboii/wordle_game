import LoginPanel from "../LoginPanel/LoginPanel"
import PlayerInfoPanel from "./PlayerInfoPanel/PlayerInfoPanel"
import React, { useEffect, useState } from 'react'
import { fetchUserData } from "../../api/fetchUserData"

function ProfilePanel() {
  
  const [userData, setUserData] = useState({ name: '', email: '', picture: '' })
  
  useEffect(() => {
    const userData = sessionStorage.getItem('userInfo')
    setUserData(JSON.parse(userData))
  }, [])


  return (
    <div className="profile-panel">
        <PlayerInfoPanel
          name={userData.name}
          email={userData.email}
          imageUrl={userData.picture}
        />
    </div>
  )
}

export default ProfilePanel