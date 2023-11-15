import { useEffect, useState } from 'react'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import './App.css'
import './index.css'
import GoogleLogout from './components/googleLogout';
import SplashScreenBackground from './components/splashScreenBackground';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const clientId = import.meta.env.VITE_CLIENT_ID;
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <SplashScreenBackground />
      <div className="flex min-h-screen">
        <div className="ml-48 grid place-content-center gap-4">
          <div className="text-center text-8xl font-bold">Jot</div>
          <p className="text-slate-600">
            Notes with a pulse: Your sentiments, brilliantly organized
          </p>
          <div className='grid justify-items-center'>
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
      </div>
    </GoogleOAuthProvider >
  )
}

export default App
