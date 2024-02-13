import { useState } from 'react'
import './App.css'
import './index.css'
import MainScreen from './screens/MainScreen';
import SplashScreen from './screens/SplashScreen';
import { graphql } from 'relay-runtime';
import { useLazyLoadQuery } from "react-relay";
import { AppIsLoggedInQuery } from './__generated__/AppIsLoggedInQuery.graphql'

const IsLoggedInQuery = graphql`
  query AppIsLoggedInQuery {
    isLoggedIn
  }
`;

function App() {
  const data = useLazyLoadQuery<AppIsLoggedInQuery>(
    IsLoggedInQuery,
    {},
  );
  console.log(data)
  //TODO: Check if user is already logged in by validating auth cookie and set state accordingly
  const [isLoggedIn, setIsLoggedIn] = useState(data.isLoggedIn);
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
