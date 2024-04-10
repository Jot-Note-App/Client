import React from 'react';
import { MainPanelTab } from '../../../enums/MainPanelTab';
import MainSidePanel from '../../MainSidePanel';

const MainScreenFallback: React.FC = () => {
    return (
        <div className="min-h-screen max-h-screen min-w-screen flex">
            <MainSidePanel onLogoutCallback={() => { }} selectedTab={MainPanelTab.None} setSelectedTab={() => { }} />
        </div>
    );
}
export default MainScreenFallback;
