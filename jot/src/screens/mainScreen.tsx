import React from 'react';
import GoogleLogout from '../components/GoogleLogout'


interface MainScreenProps {
    onLogoutCallback?: () => void;
}
const MainScreen: React.FC<MainScreenProps> = ({ onLogoutCallback }) => {

    return (
        <div className="grid grid-flow-row place-items-center">
            <div className="text-center text-8xl font-bold">Main Screen</div>
            <GoogleLogout onLogoutCallback={onLogoutCallback} />
        </div>

    );
};

export default MainScreen;