import React from 'react';
import MainSidePanel from '../../MainSidePanel';
import { MainPanelTab } from '../../../enums/MainPanelTab';
import DotSpinner from '../../../icons/animated/DotSpinner';

const MainScreenFallback: React.FC = () => {
    return (
        <div className="min-h-screen max-h-screen min-w-screen flex">
            <MainSidePanel onLogoutCallback={() => { }} selectedTab={MainPanelTab.None} setSelectedTab={() => { }} />
        </div>
    );
}
export default MainScreenFallback;
