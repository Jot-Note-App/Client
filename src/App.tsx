import React, { Suspense, useState } from 'react';
import './App.css';
import './index.css';

import { useLazyLoadQuery } from "react-relay/hooks";
import { graphql } from 'relay-runtime';
import { AppIsLoggedInQuery } from './__generated__/AppIsLoggedInQuery.graphql';
import MainScreenFallback from './components/screens/main/MainScreenFallback';
import DotSpinner from './icons/animated/DotSpinner';
import MainScreen from './screens/MainScreen';
import SplashScreen from './screens/SplashScreen';


const IsLoggedInQuery = graphql`
  query AppIsLoggedInQuery {
    isLoggedIn
  }
`;

const Screen: React.FC = () => {
  // If the user is not logged in, this request will result in a 403 error, causing data.isLoggedIn to be undefined
  const data = useLazyLoadQuery<AppIsLoggedInQuery>(
    IsLoggedInQuery,
    {},
  );
  const [isLoggedIn, setIsLoggedIn] = useState(data.isLoggedIn || false);

  const onSuccessfulLogin = () => {
    setIsLoggedIn(true)
  }

  const onSuccessfulLogout = () => {
    setIsLoggedIn(false)
  }
  return (
    <div>
      {
        isLoggedIn ?
          <Suspense fallback={
            <MainScreenFallback />
          }>
            <MainScreen onLogoutCallback={onSuccessfulLogout} />
          </Suspense>
          :
          <SplashScreen onLoginCallback={onSuccessfulLogin} />
      }
    </div>
  )
}

function App() {
  return (
    <Suspense fallback={
      <div className='w-screen h-screen flex items-center justify-center'>
        <DotSpinner />
      </div>}>
      <Screen />
    </Suspense>
  )
}

export default App
