import React, { Suspense } from 'react';
import { MainPanelTab } from '../enums/MainPanelTab';
import { graphql, PayloadError, FragmentRef } from 'relay-runtime';
import { loadQuery, useFragment, useLazyLoadQuery } from 'react-relay';
import { useState, useEffect, useRef, useCallback } from 'react';
import { useFloating, useInteractions, FloatingList, useListNavigation, useTypeahead, useClick, useDismiss, useRole } from '@floating-ui/react';
import { MainPanelQuery$data } from '../__generated__/MainPanelQuery.graphql';
import { MainPanelEntriesFeedFragment$data, MainPanelEntriesFeedFragment$key } from '../__generated__/MainPanelEntriesFeedFragment.graphql';
import { MainPanelJournalSelectorFragment$data, MainPanelJournalSelectorFragment$key } from '../__generated__/MainPanelJournalSelectorFragment.graphql';
import ArrowIcon from '../icons/ArrowIcon';
import Search from '../components/Search';
import { MainPanelEntryRowFragment$data, MainPanelEntryRowFragment$key } from '../__generated__/MainPanelEntryRowFragment.graphql';
interface MainPanelProps {
    selectedTab: MainPanelTab;
}
// TODO: Implement infinite scroll pagination
const journalSelectorFragment = graphql`
  fragment MainPanelJournalSelectorFragment on User {
    id
    journalSelectorJournals: journals(first: 100){
        edges {
            node {
                id
                name
            }
        }
    }
  }
`;

interface JournalSelectorRowProps {
    id: string;
    isSelected: boolean;
    label: string;
    onSelect: (id: string) => void;
}


const JournalSelectorRow: React.FC<JournalSelectorRowProps> = ({ id, isSelected, label, onSelect }) => {
    return (
        <div key={id} className={`w-full hover:bg-secondary hover:cursor-pointer p-1 ${isSelected ? 'bg-secondary' : ''}`} onClick={() => onSelect(id)}>
            {label}
        </div>
    );
}

interface JournalSelectorProps {
    fragment: MainPanelJournalSelectorFragment$key;
    onSelect: (journalId: string) => void;
}

const JournalSelector: React.FC<JournalSelectorProps> = ({ fragment, onSelect }) => {
    const data = useFragment(
        journalSelectorFragment,
        fragment,
    ) as MainPanelJournalSelectorFragment$data;

    const [isOpen, setIsOpen] = useState(false);
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [selectedLabel, setSelectedLabel] = useState<string>('');
    const lastJournalKey = 'lastJournalId'
    useEffect(() => {
        const storedLastJournalId = localStorage.getItem(lastJournalKey);
        if (storedLastJournalId) {
            setSelectedId(storedLastJournalId);
            const selectedJournal = data.journalSelectorJournals?.edges.find((edge) => edge.node.id == storedLastJournalId)
            setSelectedLabel(selectedJournal?.node.name || 'Journals');
        }
    }, []);
    useEffect(() => {
        if (selectedId) {
            localStorage.setItem(lastJournalKey, selectedId)
        }
    }, [selectedId])
    const { context, refs, floatingStyles } = useFloating({
        strategy: 'fixed',
        placement: 'bottom-start',
        open: isOpen,
        onOpenChange: setIsOpen,
    })
    const elementsRef = useRef([]);
    const labelsRef = useRef([]);
    const listNav = useListNavigation(context, {
        listRef: elementsRef,
        activeIndex: null,
    });
    const typeahead = useTypeahead(context, {
        listRef: labelsRef,
        activeIndex: null,
    });
    const click = useClick(context);
    const dismiss = useDismiss(context);
    const role = useRole(context, { role: "listbox" });
    const options = data.journalSelectorJournals ? data.journalSelectorJournals.edges.map((edge) => {
        return {
            id: edge.node.id,
            label: edge.node.name,
        }
    }) : [];
    const { getReferenceProps, getFloatingProps } = useInteractions([listNav, typeahead, click, dismiss, role]);
    const handleSelect = useCallback((id: string) => {
        onSelect(id)
        setSelectedId(id)
        setSelectedLabel(options.find((option) => option.id == id)?.label || '')
        setIsOpen(false)
    }, [])

    return (
        <div className="w-full">
            <div className="p-2 flex justify-between items-center hover:cursor-pointer bg-lightGray border-b border-mediumGray text-subheading" ref={refs.setReference} {...getReferenceProps()} onClick={() => setIsOpen(!isOpen)}>
                {selectedLabel}
                <ArrowIcon orientation={isOpen ? 'up' : 'down'} />
            </div>
            {isOpen && (
                <div className="bg-white border border-lightGray shadow-md w-60 rounded mt-0.5" ref={refs.setFloating} style={floatingStyles} {...getFloatingProps()}>
                    <FloatingList elementsRef={elementsRef} labelsRef={labelsRef}>
                        {options.map((option) => (
                            <JournalSelectorRow key={option.id} id={option.id} isSelected={option.id === selectedId} label={option.label} onSelect={handleSelect} />))}
                    </FloatingList>
                </div>
            )}
        </div>
    );
}

interface EntriesFeedFiltersProps {
    onSearchSubmit: (search: string) => void;
}
const EntriesFeedFilters: React.FC<EntriesFeedFiltersProps> = ({ onSearchSubmit }) => {
    return (
        <div className="bg-faintGray border-b border-mediumGray p-6">
            <Search onSubmit={onSearchSubmit} />
        </div>
    );
}

const entryRowFragment = graphql`
  fragment MainPanelEntryRowFragment on Entry {
    id
    title
    createdAt
    content
  }
`;

interface EntryRowProps {
    fragment: MainPanelEntryRowFragment$key;
    onSelect: (id: string) => void;
    isSelected: boolean;
}

const EntryRow: React.FC<EntryRowProps> = ({ fragment, onSelect, isSelected }) => {
    const data = useFragment(
        entryRowFragment,
        fragment,
    ) as MainPanelEntryRowFragment$data;

    return (
        <div className={`hover:bg-secondary hover:cursor-pointer w-full h-16 border-b border-mediumGray py-2 px-5 grid grid-flow-row items-center ${isSelected ? "bg-secondary" : "bg-white"}`} style={{ gridTemplateRows: 'auto 1fr' }}>
            <div className="grid grid-flow-col justify-between items-center">
                <div className={`text-regular font-semibold truncate ${!data.title && "text-darkGray"}`}>{data.title ? data.title : "Untitled note"}</div>
                <div className="text-small text-darkGray">{new Date(data.createdAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</div>
            </div>
            <div className="truncate text-regular">
                {data.content}
            </div>
        </div>
    );
}

const entriesFeedFragment = graphql`
  fragment MainPanelEntriesFeedFragment on User @argumentDefinitions(
    id: {type: "ID", defaultValue: null}
    after: { type: "ID", defaultValue: null }
    search: { type: "String", defaultValue: null }
  ) {
    id
    entriesFeedJournals: journals(first: 1, id: $id){
        edges {
            node {
                id
                name
                entries(first:20, after: $after, search: $search)@connection(key: "MainPanelEntriesFeedFragment_entries"){
                    pageInfo {
                        hasNextPage
                        endCursor
                    }
                    edges{
                        node{
                            id
                            ...MainPanelEntryRowFragment
                        }
                    }
                }
            }
        }
    }
  }
`;

interface EntriesFeedProps {
    fragment: MainPanelEntriesFeedFragment$key;
}

const EntriesFeed: React.FC<EntriesFeedProps> = ({ fragment }) => {
    const data = useFragment(
        entriesFeedFragment,
        fragment,
    ) as MainPanelEntriesFeedFragment$data
    return (
        <div className="w-full bg-white overflow-auto">
            {data.entriesFeedJournals?.edges.map((edge) => {
                return edge.node.entries?.edges.map((edge) => {
                    return <EntryRow key={edge.node.id} fragment={edge.node} onSelect={(id) => { }} isSelected={false} />
                })
            })}
        </div>
    );
}

const mainPanelQuery = graphql`
query MainPanelQuery($after: ID, $journalId: ID, $search: String){
  user {
    id
    ...MainPanelJournalSelectorFragment
    ...MainPanelEntriesFeedFragment @arguments(after: $after, id: $journalId, search: $search)
  }
}`;

const MainPanel: React.FC<MainPanelProps> = ({ selectedTab }) => {
    const [currJournalId, setCurrJournalId] = useState<string | null>(null)
    const [searchTerm, setSearchTerm] = useState<string | null>(null)
    const data = useLazyLoadQuery(mainPanelQuery, { after: null, journalId: currJournalId, search: searchTerm }) as MainPanelQuery$data;

    function onJournalSelected(journalId: string) {
        setSearchTerm(null)
        setCurrJournalId(journalId);
    }

    function onSearchSubmit(search: string) {
        if (search == '') {
            setSearchTerm(null)
        } else {
            setSearchTerm(search)
        }
    }


    return (
        <div className="h-screen grid grid-flow-row w-80 border-x border-mediumGray" style={{ gridTemplateRows: 'auto auto 1fr' }}>
            <JournalSelector fragment={data.user} onSelect={onJournalSelected} />
            <EntriesFeedFilters onSearchSubmit={onSearchSubmit} />
            <Suspense fallback={<div>Loading...</div>}>
                <EntriesFeed fragment={data.user} />
            </Suspense>
        </div>
    );
};

export default MainPanel;