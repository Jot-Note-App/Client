import React from 'react';
import { MainPanelTab } from '../enums/MainPanelTab';
import { graphql, PayloadError, FragmentRef } from 'relay-runtime';
import { useFragment, useLazyLoadQuery } from 'react-relay';
import { useState, useEffect } from 'react';
interface MainPanelProps {
    selectedTab: MainPanelTab;
}
// TODO: Implement infinite scroll pagination
const journalSelectorFragment = graphql`
  fragment MainPanelJournalSelectorFragment on User {
    id
    journals(first: 100){
        edges {
            node {
                id
                name
            }
        }
    }
  }
`;

const JournalSelector: React.FC = () => {
    return (
        <div>

        </div>
    )
}

const mainPanelQuery = graphql`
query MainPanelQuery($entryId: ID){
  user {
    id
    ...MainPanelJournalSelectorFragment
  }
}`;

const MainPanel: React.FC<MainPanelProps> = ({ selectedTab }) => {
    const [currEntryId, setCurrEntry] = useState<string | null>(null)
    // const data = useLazyLoadQuery(mainPanelQuery, { currEntryId });
    useEffect(() => {
        const storedLastEntry = localStorage.getItem('lastEntryId');
        if (storedLastEntry) {
            setCurrEntry(storedLastEntry);
        }
    }, []);
    useEffect(() => {
        if (currEntryId) {
            localStorage.setItem('lastEntryId', currEntryId)
        }
    }, [currEntryId])
    return (
        <div className="grid grid-flow-row">
            <JournalSelector />

        </div>
    );
};

export default MainPanel;