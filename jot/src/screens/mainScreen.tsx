import React, { Suspense } from 'react';
import { useState } from 'react';
import GoogleLogout from '../components/GoogleLogout'
import MainSidePanel from '../components/MainSidePanel';
import MainPanel from './MainPanel';
import { MainPanelTab } from '../enums/MainPanelTab'
import { graphql } from 'relay-runtime';
import { useLazyLoadQuery } from 'react-relay';
import { MainScreenUserContextQuery } from '../__generated__/MainScreenUserContextQuery.graphql';
import { UserContextProvider } from '../components/UserContextProvider';

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
                <Suspense fallback={<div>Loading...</div>}>
                    <MainPanel selectedTab={selectedTab} />
                </Suspense>
            </div>
        </UserContextProvider>

    );
};

export default MainScreen;