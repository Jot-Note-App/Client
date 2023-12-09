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
    return (
        <div className="">
            <ProfileAvatar firstName={data.firstName} lastName={data.lastName} />
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
        <div className="border bg-main min-h-screen w-60">
            <UserProfileInfo fragment={data.user} />
        </div>
    );
};

export default MainSidePanel;