import React from 'react';
import { MainPanelTab } from '../enums/MainPanelTab';
interface MainPanelProps {
    selectedTab: MainPanelTab;
}

const MainPanel: React.FC<MainPanelProps> = ({ selectedTab }) => {

    return (
        <div className="">
            {selectedTab}
        </div>
    );
};

export default MainPanel;