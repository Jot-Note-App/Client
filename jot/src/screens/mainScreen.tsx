import React from 'react';
import { useState } from 'react';
import GoogleLogout from '../components/GoogleLogout'
import MainSidePanel from '../components/MainSidePanel';
import MainPanel from './MainPanel';
interface MainScreenProps {
    onLogoutCallback?: () => void,
}
enum Tab {
    Journals = 'journals',
}

const MainScreen: React.FC<MainScreenProps> = ({ onLogoutCallback }) => {
    const [selectedTab, setSelectedTab] = useState(Tab.Journals);
    return (
        <div className="min-h-screen min-w-screen flex">
            <MainSidePanel onLogoutCallback={onLogoutCallback} />
            <MainPanel />
        </div>

    );
};

export default MainScreen;