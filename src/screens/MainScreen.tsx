import React, { useState } from 'react';
import { useLazyLoadQuery } from 'react-relay';
import { graphql } from 'relay-runtime';
import { MainScreenUserContextQuery } from '../__generated__/MainScreenUserContextQuery.graphql';
import MainSidePanel from '../components/MainSidePanel';
import { UserContextProvider } from '../components/UserContextProvider';
import { MainPanelTab } from '../enums/MainPanelTab';
import MainPanel from './MainPanel';

const userContextQuery = graphql`
  query MainScreenUserContextQuery {
    isLoggedIn
    user {
      id
      firstName
      lastName
      email
    }
  }
`;

interface MainScreenProps {
    onLogoutCallback?: () => void,
}
const MainScreen: React.FC<MainScreenProps> = ({ onLogoutCallback }) => {
    const data = useLazyLoadQuery<MainScreenUserContextQuery>(
        userContextQuery,
        {},
        {
            fetchPolicy: "network-only"
        }
    );
    const [selectedTab, setSelectedTab] = useState(MainPanelTab.Journals);
    const userContext = {
        id: data.user.id,
        firstName: data.user.firstName,
        lastName: data.user.lastName,
        email: data.user.email
    }
    return (
        <UserContextProvider user={userContext}>
            <div className="min-h-screen max-h-screen min-w-screen flex">
                <MainSidePanel onLogoutCallback={onLogoutCallback} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
                <MainPanel selectedTab={selectedTab} />
            </div>
        </UserContextProvider>

    );
};

export default MainScreen;