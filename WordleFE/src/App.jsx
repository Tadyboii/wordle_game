import './App.css'
import WordleHome from './pages/WordleHome.jsx'
import LoginPanel from './components/LoginPanel/LoginPanel.jsx'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'    
import { useEffect, useState } from 'react'

function App() {
  document.title = 'Wordle'

  const [isLoggedIn, setIsLoggedIn] = useState(false) 

  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(sessionStorage.getItem('isLoggedIn') === 'true');
    }, 1000);
  }, []);

  console.log('isLoggedin:',isLoggedIn)
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={isLoggedIn ? <WordleHome /> : <div className='login-area'><LoginPanel /></div>}
          />  

        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
