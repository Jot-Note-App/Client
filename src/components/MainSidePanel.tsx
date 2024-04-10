import React, { useContext } from 'react';
import { MainPanelTab } from '../enums/MainPanelTab';
import BookIcon from '../icons/BookIcon';
import LogoutIcon from '../icons/LogoutIcon';
import GoogleLogout from './GoogleLogout';
import ProfileAvatar from './ProfileAvatar';
import { UserContext } from './UserContextProvider';
import Tooltip from './reusable/Tooltip';
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

const MainSidePanel: React.FC<MainSidePanelProps> = ({ onLogoutCallback }) => {
    return (
        <div className=" bg-main min-h-screen px-3 py-6 grid grid-flow-row content-between justify-items-center">
            <div>
                <div className="justify-center">
                    <UserProfileInfo hideDetails={true} />
                </div>
                <div className="mt-4">
                    <Tooltip
                        text='Notebooks'
                    >
                        <div className={"bg-mainDark rounded p-2 hover:cursor-pointer text-secondary"}>
                            <div className="flex gap-2 items-center justify-center">
                                <BookIcon />
                            </div>
                        </div>
                    </Tooltip>
                </div>
            </div>

            <div>

                <GoogleLogout onLogoutCallback={onLogoutCallback}>
                    <Tooltip
                        text='Sign out'

                    >
                        <div className={"hover:bg-mainDark transition-colors duration-200 rounded p-2 hover:cursor-pointer text-white hover:text-secondary"}>
                            <div className="flex gap-2 items-center justify-center">
                                <LogoutIcon />
                            </div>
                        </div>
                    </Tooltip>
                </GoogleLogout>

            </div>
        </div>
    );
};

export default MainSidePanel;