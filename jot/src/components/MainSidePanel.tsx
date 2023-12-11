import React from 'react';
import { graphql, PayloadError, FragmentRef } from 'relay-runtime';
import { useFragment, useLazyLoadQuery } from 'react-relay';
import { MainSidePanelUserProfileInfoFragment$data, MainSidePanelUserProfileInfoFragment$key } from '../__generated__/MainSidePanelUserProfileInfoFragment.graphql'
import ProfileAvatar from './ProfileAvatar';
import { MainSidePanelQuery$data } from '../__generated__/MainSidePanelQuery.graphql';
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


const mainSidePanelQuery = graphql`
query MainSidePanelQuery {
  user {
    id
    ...MainSidePanelUserProfileInfoFragment
  }
}
`

const MainSidePanel: React.FC = () => {
    const data = useLazyLoadQuery(
        mainSidePanelQuery,
        {},
    ) as MainSidePanelQuery$data;
    return (
        <div className="border bg-main min-h-screen w-60 px-4 py-6 grid grid-flow-row content-between">
            <UserProfileInfo fragment={data.user} />
            <div>Logout</div>
        </div>
    );
};

export default MainSidePanel;