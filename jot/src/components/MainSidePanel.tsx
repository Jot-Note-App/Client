import React, { useContext, useState } from 'react';
import ProfileAvatar from './ProfileAvatar';
import BookIcon from '../icons/BookIcon';
import GoogleLogout from './GoogleLogout';
import LogoutIcon from '../icons/LogoutIcon';
import { MainPanelTab } from '../enums/MainPanelTab';
import { UserContext } from './UserContextProvider';
interface UserProfileInfoProps {
    hideDetails?: boolean;
}

const UserProfileInfo: React.FC<UserProfileInfoProps> = ({ hideDetails = false }) => {
    const userContext = useContext(UserContext)
    const firstName = userContext.firstName.charAt(0).toUpperCase() + userContext.firstName.slice(1)
    const lastName = userContext.firstName.charAt(0).toUpperCase() + userContext.lastName.slice(1)
    return (

        <div className="flex items-center justify-center gap-2">
            <ProfileAvatar firstName={firstName} lastName={lastName} />
            {!hideDetails &&
                <div className="text-white">
                    <div className="">{firstName + " " + lastName}</div>
                    <div className="text-sm">{userContext.email}</div>
                </div>}

        </div>

    );
};

interface MainSidePanelProps {
    onLogoutCallback?: () => void;
    selectedTab: MainPanelTab;
    setSelectedTab: (newTab: MainPanelTab) => void;
}

const MainSidePanel: React.FC<MainSidePanelProps> = ({ onLogoutCallback, selectedTab, setSelectedTab }) => {
    return (
        <div className=" bg-main min-h-screen px-4 py-6 grid grid-flow-row content-between justify-items-center">
            <div>
                <div className="justify-center">
                    <UserProfileInfo hideDetails={true} />
                </div>
                <div className="mt-4">
                    <div className={"bg-mainDark rounded p-4 hover:cursor-pointer text-secondary"}>
                        <div className="flex gap-2 items-center justify-center">
                            <BookIcon />
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <GoogleLogout onLogoutCallback={onLogoutCallback}>
                    <div className={"hover:bg-mainDark rounded p-4 hover:cursor-pointer text-white hover:text-secondary"}>
                        <div className="flex gap-2 items-center justify-center">
                            <LogoutIcon />
                        </div>
                    </div>
                </GoogleLogout>
            </div>
        </div>
    );
};

export default MainSidePanel;