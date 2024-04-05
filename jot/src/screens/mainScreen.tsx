import React, { Suspense } from 'react';
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
        <div className="min-h-screen max-h-screen min-w-screen flex">
            <MainSidePanel onLogoutCallback={onLogoutCallback} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
            <Suspense fallback={<div>Loading...</div>}>
                <MainPanel selectedTab={selectedTab} />
            </Suspense>
        </div>

    );
};

export default MainScreen;