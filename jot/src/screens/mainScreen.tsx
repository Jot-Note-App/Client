import React from 'react';
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