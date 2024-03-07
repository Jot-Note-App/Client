import React, { useState } from 'react';
import { graphql, PayloadError, FragmentRef } from 'relay-runtime';
import { useFragment, useLazyLoadQuery } from 'react-relay';
import { MainSidePanelUserProfileInfoFragment$data, MainSidePanelUserProfileInfoFragment$key } from '../__generated__/MainSidePanelUserProfileInfoFragment.graphql'
import ProfileAvatar from './ProfileAvatar';
import { MainSidePanelQuery$data } from '../__generated__/MainSidePanelQuery.graphql';
import ArrowCircleIcon from '../icons/ArrowCircleIcon';
import BookIcon from '../icons/BookIcon';
import GoogleLogout from './GoogleLogout';
import LogoutIcon from '../icons/LogoutIcon';
import { MainPanelTab } from '../enums/MainPanelTab';
interface UserProfileInfoProps {
    fragment: MainSidePanelUserProfileInfoFragment$key;
    hideDetails?: boolean;
}

const userProfileInfoFragment = graphql`
  fragment MainSidePanelUserProfileInfoFragment on User {
    id
    email
    firstName
    lastName
  }
`;

const UserProfileInfo: React.FC<UserProfileInfoProps> = ({ fragment, hideDetails = false }) => {
    const data = useFragment(
        userProfileInfoFragment,
        fragment,
    ) as MainSidePanelUserProfileInfoFragment$data;
    const firstName = data.firstName.charAt(0).toUpperCase() + data.firstName.slice(1)
    const lastName = data.firstName.charAt(0).toUpperCase() + data.lastName.slice(1)
    return (

        <div className="flex items-center gap-2">
            <ProfileAvatar firstName={data.firstName} lastName={data.lastName} />
            {!hideDetails &&
                <div className="text-white">
                    <div className="">{firstName + " " + lastName}</div>
                    <div className="text-sm">{data.email}</div>
                </div>}

        </div>

    );
};

// interface MainSidePanelJournalItems {
//     fragment: MainSidePanelUserProfileInfoFragment$key;
// }

// const userProfileInfoFragment = graphql`
//   fragment MainSidePanelUserProfileInfoFragment on User {
//     id
//     email
//     firstName
//     lastName
//   }
// `;

const MainSidePanelJournalItems: React.FC = () => {

    return (

        <div className="flex gap-2 text-white items-center">
            <BookIcon />
            <div >
                Journals
            </div>
        </div>

    );
};




const mainSidePanelQuery = graphql`
query MainSidePanelQuery {
  user {
    id
    ...MainSidePanelUserProfileInfoFragment
  }
}
`

interface MainSidePanelProps {
    onLogoutCallback?: () => void;
    selectedTab: MainPanelTab;
    setSelectedTab: (newTab: MainPanelTab) => void;
}

const MainSidePanel: React.FC<MainSidePanelProps> = ({ onLogoutCallback, selectedTab, setSelectedTab }) => {
    const data = useLazyLoadQuery(
        mainSidePanelQuery,
        {},
    ) as MainSidePanelQuery$data;
    return (
        <div className="border bg-main min-h-screen px-4 py-6 grid grid-flow-row content-between justify-items-center">
            <div>
                <UserProfileInfo fragment={data.user} hideDetails={true} />
                <div className="mt-6 ">
                    <div className="flex gap-2 text-white items-center justify-center">
                        <BookIcon />
                    </div>
                </div>
            </div>

            <div>
                <GoogleLogout onLogoutCallback={onLogoutCallback}>
                    <div className="hover:cursor-pointer text-white flex gap-2 items-center justify-center">
                        <LogoutIcon />
                    </div>
                </GoogleLogout>
            </div>
        </div>
    );
};

export default MainSidePanel;