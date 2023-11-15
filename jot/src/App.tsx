import { useEffect, useState } from 'react'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import './App.css'
import './index.css'
import GoogleLogout from './components/googleLogout';
import SplashScreenBackground from './components/splashScreenBackground';
import PenIcon from './icons/pen';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const clientId = import.meta.env.VITE_CLIENT_ID;
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <SplashScreenBackground />
      <div className="flex min-h-screen">
        <div className="ml-48 grid place-content-center justify-items-center">
          <div className="flex items-end mb-8 gap-1">
            <div className="text-center text-8xl font-bold">Jot</div>
            <PenIcon />
          </div>
          <p className="text-slate-500 text-xl mb-4">
            Notes with a pulse: Your sentiments, brilliantly organized
          </p>
          <GoogleLogin
            onSuccess={credentialResponse => {
              console.log(credentialResponse);
              setIsLoggedIn(true);
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />
        </div>
      </div>
    </GoogleOAuthProvider >
  )
}

export default App
