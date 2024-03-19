import { useState } from 'react'
import './App.css'
import './index.css'
import MainScreen from './screens/MainScreen';
import SplashScreen from './screens/SplashScreen';
import { graphql } from 'relay-runtime';
import { useLazyLoadQuery } from "react-relay";
import { AppIsLoggedInQuery } from './__generated__/AppIsLoggedInQuery.graphql'
import { UserContextProvider } from './components/UserContextProvider';

const IsLoggedInQuery = graphql`
  query AppIsLoggedInQuery {
    isLoggedIn
    user {
      id
      firstName
      lastName
      email
    }
  }
`;

function App() {
  const data = useLazyLoadQuery<AppIsLoggedInQuery>(
    IsLoggedInQuery,
    {},
  );
  //TODO: Check if user is already logged in by validating auth cookie and set state accordingly
  const [isLoggedIn, setIsLoggedIn] = useState(data.isLoggedIn);
  const onSuccessfulLogin = () => {
    setIsLoggedIn(true)
  }

  const onSuccessfulLogout = () => {
    setIsLoggedIn(false)
  }
  const userContext = {
    id: data.user.id,
    firstName: data.user.firstName,
    lastName: data.user.lastName,
    email: data.user.email
  }
  return (
    <div>
      {
        isLoggedIn ? <UserContextProvider user={userContext}>
          <MainScreen onLogoutCallback={onSuccessfulLogout} />
        </UserContextProvider> :
          <SplashScreen onLoginCallback={onSuccessfulLogin} />
      }
    </div>
  )
}

export default App
