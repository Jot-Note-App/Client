import { useEffect, useState } from 'react'
import './App.css'
import './index.css'
import SplashScreen from './screens/splashScreen';
import MainScreen from './screens/mainScreen';


function App() {
  //TODO: Check if user is already logged in by validating auth cookie and set state accordingly
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onSuccessfulLogin = () => {
    setIsLoggedIn(true)
  }

  const onSuccessfulLogout = () => {
    setIsLoggedIn(false)
  }

  return (
    <div>
      {
        isLoggedIn ? <MainScreen onLogoutCallback={onSuccessfulLogout} /> : <SplashScreen onLoginCallback={onSuccessfulLogin} />
      }
    </div>
  )
}

export default App
