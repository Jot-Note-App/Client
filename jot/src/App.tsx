import { useEffect, useState } from 'react'
import { GoogleOAuthProvider, GoogleLogin, } from '@react-oauth/google';
import './App.css'
import './index.css'
import SplashScreenBackground from './components/splashScreenBackground';
import PenIcon from './icons/pen';
import GoogleLoginCustom from './components/googleLoginCustom';
import { useJwt, decodeToken, isExpired } from "react-jwt";
import { validateCredentials } from './utils/authentication';



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [credential, setCredential] = useState('');
  // useEffect(() => {
  //   console.log("useeffect")
  //   if (credential) {
  //     var decodedToken = useJwt(credential);
  //     console.log(decodedToken)
  //   }
  // }, [credential]); // Empty dependency array to run the effect once
  const clientId = import.meta.env.VITE_CLIENT_ID;
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <SplashScreenBackground />
      <div className="flex min-h-screen">
        <div className="ml-48 grid place-content-center justify-items-center">
          <div className="flex items-end mb-8 gap-1">
            <div className="text-center text-8xl font-bold">Jot</div>
            {/* <PenIcon /> */}
          </div>
          <p className="text-slate-500 text-xl mb-4">
            Notes with a pulse: Your sentiments, brilliantly organized
          </p>
          <GoogleLogin
            onSuccess={credentialResponse => {
              console.log(credentialResponse);
              console.log(validateCredentials(credentialResponse.credential ?? ''));
              setIsLoggedIn(true);
            }}
            onError={() => {
              console.log('Login Failed');
            }}
            ux_mode='popup'
          />
        </div>
      </div>
    </GoogleOAuthProvider >
  )
}

export default App
