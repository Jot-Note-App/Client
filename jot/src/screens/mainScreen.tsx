import React from 'react';
import GoogleLogout from '../components/GoogleLogout'
import MainSidePanel from '../components/MainSidePanel';
interface MainScreenProps {
    onLogoutCallback?: () => void,
}
const MainScreen: React.FC<MainScreenProps> = ({ onLogoutCallback }) => {

    return (
        <div className="min-h-screen min-w-screen">
            {/* <div className="text-center text-8xl font-bold">Main Screen</div>
            <GoogleLogout onLogoutCallback={onLogoutCallback} /> */}
            <MainSidePanel onLogoutCallback={onLogoutCallback} />
        </div>

    );
};

export default MainScreen;