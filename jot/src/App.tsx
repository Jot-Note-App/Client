import { useEffect, useState } from 'react'
import './App.css'
import './index.css'
import { isAuthenticated } from './utils/authentication';
import MainScreen from './screens/MainScreen';
import SplashScreen from './screens/SplashScreen';
function App() {

  //TODO: Check if user is already logged in by validating auth cookie and set state accordingly
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const authenticated = isAuthenticated(document);
    console.log("IS AUTHENTICATED: ", authenticated)
    setIsLoggedIn(authenticated);
  }, []); // Run the effect only once when the component mounts

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
