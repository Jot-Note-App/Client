import React from 'react';
import { GoogleOAuthProvider, GoogleLogin, } from '@react-oauth/google';
import SplashScreenBackground from '../components/splashScreenBackground';
import { validateCredentials } from '../utils/authentication';

interface SplashScreenProps {
    onLoginCallback?: () => void;
}
const SplashScreen: React.FC<SplashScreenProps> = ({ onLoginCallback }) => {
    const clientId = import.meta.env.VITE_CLIENT_ID;
    return (
        <GoogleOAuthProvider clientId={clientId}>
            <SplashScreenBackground />
            <div className="flex min-h-screen">
                <div className="ml-48 grid place-content-center justify-items-center">
                    <div className="flex items-end mb-8 gap-1">
                        <div className="text-center text-8xl font-bold">Jot</div>
                    </div>
                    <p className="text-slate-500 text-xl mb-4">
                        Notes with a pulse: Your sentiments, brilliantly organized
                    </p>
                    <GoogleLogin
                        onSuccess={credentialResponse => {
                            if (validateCredentials(credentialResponse.credential ?? '')) {
                                // TODO: Call mutation to log user in
                            }
                            //TODO: Move this logic into success callback of log in mutation
                            if (onLoginCallback != undefined) {
                                onLoginCallback()
                            }
                        }}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                        ux_mode='popup'
                    />
                </div>
            </div>
        </GoogleOAuthProvider >
    );
};

export default SplashScreen;