import React from 'react';
import { GoogleOAuthProvider, GoogleLogin, } from '@react-oauth/google';
import SplashScreenBackground from '../components/splashScreenBackground';
import { validateCredentials } from '../utils/authentication';
import GoogleLogout from '../components/googleLogout'

interface MainScreenProps {
    onLogoutCallback?: () => void;
}
const MainScreen: React.FC<MainScreenProps> = ({ onLogoutCallback }) => {
    return (
        <div className="">
            <div className="text-center text-8xl font-bold">Main Screen</div>
            <GoogleLogout onLogoutCallback={onLogoutCallback} />
        </div>

    );
};

export default MainScreen;