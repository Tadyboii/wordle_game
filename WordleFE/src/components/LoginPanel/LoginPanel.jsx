import { fetchUserData } from "../../api/fetchUserData";
import React, { useEffect, useState } from 'react'

const LoginPanel = () => {
  const authorizationUrl = 'http://localhost:8080/oauth2/authorization/google';

  const [userData, setUserData] = useState({ name: '', email: '', picture: '' })
 
  useEffect(() => {
    const fetchData = async () => {
      const { data, isLoggedIn } = await fetchUserData()
      console.log(isLoggedIn)
      sessionStorage.setItem('isLoggedIn', isLoggedIn)
      setUserData(data)
    }
    fetchData()
  }, [])

  useEffect(() => {
    sessionStorage.setItem('userInfo', JSON.stringify(userData))
  }, [userData])
  
  return (
    <button className='login-button' onClick={() => window.location.href = authorizationUrl}>
      <img className="google-logo" src='src/assets/google_logo.png'/>
      <span className='login-text'>Login with Google</span>
    </button>
  )
}

export default LoginPanel