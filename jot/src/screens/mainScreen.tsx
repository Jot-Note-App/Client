import React from 'react';
import { useState } from 'react';
import GoogleLogout from '../components/GoogleLogout'
import MainSidePanel from '../components/MainSidePanel';
import MainPanel from './MainPanel';
import { MainPanelTab } from '../enums/MainPanelTab'
interface MainScreenProps {
    onLogoutCallback?: () => void,
}
const MainScreen: React.FC<MainScreenProps> = ({ onLogoutCallback }) => {
    const [selectedTab, setSelectedTab] = useState(MainPanelTab.Journals);
    return (
        <div className="min-h-screen min-w-screen flex">
            <MainSidePanel onLogoutCallback={onLogoutCallback} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
            <MainPanel selectedTab={selectedTab} />
        </div>

    );
};

export default MainScreen;