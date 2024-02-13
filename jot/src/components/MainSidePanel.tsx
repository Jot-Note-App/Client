import React from 'react';
import { graphql, PayloadError, FragmentRef } from 'relay-runtime';
import { useFragment, useLazyLoadQuery } from 'react-relay';
import { MainSidePanelUserProfileInfoFragment$data, MainSidePanelUserProfileInfoFragment$key } from '../__generated__/MainSidePanelUserProfileInfoFragment.graphql'
import ProfileAvatar from './ProfileAvatar';
import { MainSidePanelQuery$data } from '../__generated__/MainSidePanelQuery.graphql';
import ArrowCircleIcon from '../icons/ArrowCircleIcon';
import BookIcon from '../icons/BookIcon';
import GoogleLogout from './GoogleLogout';
import LogoutIcon from '../icons/LogoutIcon';
interface UserProfileInfoProps {
    fragment: MainSidePanelUserProfileInfoFragment$key;
}

const userProfileInfoFragment = graphql`
  fragment MainSidePanelUserProfileInfoFragment on User {
    id
    email
    firstName
    lastName
  }
`;

const UserProfileInfo: React.FC<UserProfileInfoProps> = ({ fragment }) => {
    const data = useFragment(
        userProfileInfoFragment,
        fragment,
    ) as MainSidePanelUserProfileInfoFragment$data;
    const firstName = data.firstName.charAt(0).toUpperCase() + data.firstName.slice(1)
    const lastName = data.firstName.charAt(0).toUpperCase() + data.lastName.slice(1)
    return (
        <div>
            <div className="flex items-center gap-2">
                <ProfileAvatar firstName={data.firstName} lastName={data.lastName} />
                <div className="text-white">
                    <div className="">{firstName + " " + lastName}</div>
                    <div className="">{data.email}</div>
                </div>

            </div>
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
}

const MainSidePanel: React.FC<MainSidePanelProps> = ({ onLogoutCallback }) => {
    const data = useLazyLoadQuery(
        mainSidePanelQuery,
        {},
    ) as MainSidePanelQuery$data;
    return (
        <div className="border bg-main min-h-screen w-60 px-4 py-6 grid grid-flow-row content-between">
            <div>
                <div className="flex justify-end">
                    <div className="text-white hover:cursor-pointer" onClick={() => {/* TODO: Implement onClick */ }}>
                        <ArrowCircleIcon />
                    </div>
                </div>
                <UserProfileInfo fragment={data.user} />
                <div className="mt-6">
                    <MainSidePanelJournalItems />
                </div>
            </div>

            <div>
                <GoogleLogout onLogoutCallback={onLogoutCallback}>
                    <div className="hover:cursor-pointer text-white flex gap-2 items-center">
                        <LogoutIcon />
                        <div >
                            Sign out
                        </div>
                    </div>
                </GoogleLogout>
            </div>
        </div>
    );
};

export default MainSidePanel;