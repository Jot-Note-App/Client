import React, { Suspense, useContext } from 'react';
import { MainPanelTab } from '../enums/MainPanelTab';
import { graphql, PayloadError, FragmentRef, ConnectionHandler } from 'relay-runtime';
import { loadQuery, useFragment, useLazyLoadQuery, useMutation } from 'react-relay';
import { useState, useEffect, useRef, useCallback } from 'react';
import { useFloating, useInteractions, FloatingList, useListNavigation, useTypeahead, useClick, useDismiss, useRole } from '@floating-ui/react';
import { MainPanelQuery$data } from '../__generated__/MainPanelQuery.graphql';
import { MainPanelEntriesFeedFragment$data, MainPanelEntriesFeedFragment$key } from '../__generated__/MainPanelEntriesFeedFragment.graphql';
import { MainPanelJournalSelectorFragment$data, MainPanelJournalSelectorFragment$key } from '../__generated__/MainPanelJournalSelectorFragment.graphql';
import ArrowIcon from '../icons/ArrowIcon';
import Search from '../components/Search';
import { MainPanelEntryRowFragment$data, MainPanelEntryRowFragment$key } from '../__generated__/MainPanelEntryRowFragment.graphql';
import MagnifyingGlassIcon from '../icons/MagnifyingGlassIcon';
import { UserContext } from '../components/UserContextProvider';
import { MainPanelCreateJournalMutation$data } from '../__generated__/MainPanelCreateJournalMutation.graphql';
import AddCircleIcon from '../icons/AddCircleIcon';
import { MainPanelCreateEntryMutation, MainPanelCreateEntryMutation$data } from '../__generated__/MainPanelCreateEntryMutation.graphql';
interface MainPanelProps {
    selectedTab: MainPanelTab;
}

const mainPanelCreateJournalMutation = graphql`
mutation MainPanelCreateJournalMutation($name: String!, $userId: ID!, $connections: [ID!]!){
  createJournal(input: {name: $name, userId: $userId}){
    __typename
    ... on CreateJournalMutationSuccess {
        journalEdge @prependEdge(connections: $connections){
            node {
                id
                name
            }
        }
    }
    ... on MutationFailure {
        error
    }
  }
}
`

// TODO: Implement infinite scroll pagination
const journalSelectorFragment = graphql`
  fragment MainPanelJournalSelectorFragment on User {
    id
    journalSelectorJournals: journals(first: 100) @connection(key: "MainPanelJournalSelectorFragment_journalSelectorJournals"){
        __id
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
    onSelect: (id: string, label: string) => void;
}


const JournalSelectorRow: React.FC<JournalSelectorRowProps> = ({ id, isSelected, label, onSelect }) => {
    return (
        <div key={id} className={`w-full text-regular hover:bg-secondary hover:cursor-pointer p-2 ${isSelected ? 'bg-secondary' : ''}`}
            onClick={() => {
                onSelect(id, label)
            }}>
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
    const userContext = useContext(UserContext)
    const [createJournal, _isCreatingJournal] = useMutation(mainPanelCreateJournalMutation);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [selectedLabel, setSelectedLabel] = useState<string>('');
    const [searchTerm, setSearchTerm] = useState<string | null>(null);
    const lastJournalKey = 'lastJournalId'
    useEffect(() => {
        const storedLastJournalId = localStorage.getItem(lastJournalKey);
        if (storedLastJournalId) {
            setSelectedId(storedLastJournalId);
            onSelect(storedLastJournalId);
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
    const click = useClick(context);
    const dismiss = useDismiss(context);
    const role = useRole(context, { role: "listbox" });
    const options = data.journalSelectorJournals ? data.journalSelectorJournals.edges.map((edge) => {
        return {
            id: edge.node.id,
            label: edge.node.name,
        }
    }).filter(option => { return !searchTerm || searchTerm == '' || option.label.toLowerCase().includes(searchTerm.toLowerCase()) }) : [];
    const { getReferenceProps, getFloatingProps } = useInteractions([listNav, click, dismiss, role]);
    const handleSelect = useCallback((id: string, label: string) => {
        onSelect(id)
        setSelectedId(id)
        setSelectedLabel(label)
        setIsOpen(false)
    }, [])
    const onCreateJournalComplete = useCallback((response: {}, _errors: PayloadError[] | null) => {
        const res = response as MainPanelCreateJournalMutation$data;
        if (res.createJournal.__typename == 'CreateJournalMutationSuccess') {
            const newJournal = res.createJournal.journalEdge.node
            handleSelect(newJournal.id, newJournal.name)
        }

    }, []);
    return (
        <div className="w-full">
            <div className="p-2 flex justify-between items-center hover:cursor-pointer bg-lightGray border-b border-mediumGray text-subheading" ref={refs.setReference} {...getReferenceProps()} onClick={() => setIsOpen(!isOpen)}>
                {selectedLabel}
                <ArrowIcon orientation={isOpen ? 'up' : 'down'} />
            </div>
            {isOpen && (
                <div className="bg-white border border-lightGray shadow-md w-80 rounded mt-0.5" ref={refs.setFloating} style={floatingStyles} {...getFloatingProps()}>
                    <div className="border-b border-mediumGray py-3 px-6">
                        <Search onSearchChange={setSearchTerm} />
                    </div>
                    <FloatingList elementsRef={elementsRef} labelsRef={labelsRef}>
                        {options.length > 0 ? options.map((option) => (
                            <JournalSelectorRow key={option.id} id={option.id} isSelected={option.id === selectedId} label={option.label} onSelect={handleSelect} />)) :
                            <div className="grid grid-flow-row items-center justify-center text-mediumGray p-5">
                                <div className="flex justify-center ">
                                    <MagnifyingGlassIcon />
                                </div>
                                <div className="text-regular">
                                    No Results
                                </div>
                            </div>

                        }
                    </FloatingList>
                    <div className="text-regular text-center hover:cursor-pointer hover:bg-secondary py-3 border-t border-mediumGray"
                        onClick={() => {
                            const connectionId = data.journalSelectorJournals?.__id
                            createJournal({
                                variables: {
                                    name: 'Untitled Notebook',
                                    userId: userContext.id,
                                    connections: connectionId ? [connectionId] : [],
                                },
                                onCompleted: onCreateJournalComplete,
                            })
                        }}
                    >
                        + New Notebook
                    </div>
                </div>
            )}
        </div>
    );
}

const mainPanelCreateEntryMutation = graphql`
mutation MainPanelCreateEntryMutation($content: String!, $journalId: ID!, $connections: [ID!]!){
  createEntry(input: {content: $content, journalId: $journalId}){
    __typename
    ... on CreateEntryMutationSuccess {
        entryEdge @prependEdge(connections: $connections){
            node {
                id
                title
                content
                createdAt
                updatedAt
            }
        }
    }
    ... on MutationFailure {
        error
    }
  }
}
`

interface EntriesFeedFiltersProps {
    onSearchSubmit: (search: string) => void;
    onCreateEntry: (entryId: string) => void;
    journalId: string | null;
}
const EntriesFeedFilters: React.FC<EntriesFeedFiltersProps> = ({ onSearchSubmit, onCreateEntry, journalId }) => {
    const [createEntry, _isCreatingEntry] = useMutation(mainPanelCreateEntryMutation);
    const onCreateEntryComplete = useCallback((response: {}, _errors: PayloadError[] | null) => {
        const res = response as MainPanelCreateEntryMutation$data;
        if (res.createEntry.__typename == 'CreateEntryMutationSuccess') {
            const newEntry = res.createEntry.entryEdge.node
            onCreateEntry(newEntry.id)
        }
    }, [])
    return (
        <div className="grid grid-flow-col items-center gap-2 bg-faintGray border-b border-mediumGray p-6 ">
            <Search onSubmit={onSearchSubmit} placeholder='Enter to search ...' />
            <div className="text-darkGray hover:cursor-pointer hover:text-main "
                onClick={() => {
                    if (journalId) {
                        const connectionId = ConnectionHandler.getConnectionID(journalId, 'MainPanelEntriesFeedFragment_entries')
                        createEntry({
                            variables: {
                                content: '',
                                journalId: journalId,
                                connections: connectionId ? [connectionId] : [],
                            },
                            onCompleted: onCreateEntryComplete,
                        })
                    }
                }}>
                <AddCircleIcon />
            </div>
        </div>
    );
}

const entryRowFragment = graphql`
  fragment MainPanelEntryRowFragment on Entry {
    id
    title
    createdAt
    updatedAt
    content
  }
`;

interface EntryRowProps {
    fragment: MainPanelEntryRowFragment$key;
    onSelect: (id: string) => void;
    selectedEntryId: string | null;
}

const EntryRow: React.FC<EntryRowProps> = ({ fragment, onSelect, selectedEntryId }) => {
    const data = useFragment(
        entryRowFragment,
        fragment,
    ) as MainPanelEntryRowFragment$data;

    return (
        <div className={`hover:bg-secondary hover:cursor-pointer w-full h-16 border-b border-mediumGray py-2 px-5 grid grid-flow-row items-center ${data.id == selectedEntryId ? "bg-secondary" : "bg-white"}`}
            style={{ gridTemplateRows: 'auto 1fr' }}
            onClick={() => onSelect(data.id)}
        >
            <div className="grid grid-flow-col justify-between items-center">
                <div className={`text-regular font-semibold truncate ${!data.title && "text-darkGray"}`}>
                    {data.title ? data.title : "Untitled note"}
                </div>
                <div className="text-small text-darkGray">{new Date(data.createdAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</div>
            </div>
            <div className={`truncate text-regular ${!data.content && 'text-darkGray'}`}>
                {data.content || 'No text'}
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
    onSelectEntry: (id: string) => void;
    selectedEntryId: string | null;
}

const EntriesFeed: React.FC<EntriesFeedProps> = ({ fragment, onSelectEntry, selectedEntryId }) => {
    const data = useFragment(
        entriesFeedFragment,
        fragment,
    ) as MainPanelEntriesFeedFragment$data
    if (!selectedEntryId) {
        const entryId = data.entriesFeedJournals?.edges[0]?.node.entries?.edges[0]?.node.id
        if (entryId) {
            onSelectEntry(entryId)
        }
    }
    return (
        <div className="w-full bg-white overflow-auto">
            {data.entriesFeedJournals?.edges.map((edge) => {
                return edge.node.entries?.edges.map((edge) => {
                    const entry = edge.node
                    return <EntryRow key={entry.id} fragment={entry} onSelect={onSelectEntry} selectedEntryId={selectedEntryId} />
                })
            })}
        </div>
    );
}


interface JournalEditorProps {
    entryId: string | null;
}

const JournalEditor: React.FC<JournalEditorProps> = ({ entryId }) => {
    return (
        <div className="w-full h-full">
            {entryId ?
                <div>Entry Editor</div> :
                <div className="w-full h-full flex flex-col gap-2 items-center justify-center text-mediumGray">
                    <div className="text-h3">No notes to show</div>
                    <div className="text-lg">Create a note in the side panel to get started!</div>
                </div>}
        </div>
    )
};

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
    const [currEntryId, setCurrEntryId] = useState<string | null>(null)
    const [searchTerm, setSearchTerm] = useState<string | null>(null)
    const data = useLazyLoadQuery(mainPanelQuery, { after: null, journalId: currJournalId, search: searchTerm }) as MainPanelQuery$data;

    const onJournalSelected = useCallback((journalId: string) => {
        setSearchTerm(null)
        setCurrEntryId(null)
        setCurrJournalId(journalId);
    }, [])

    const onSearchSubmit = useCallback((search: string) => {
        if (search == '') {
            setSearchTerm(null)
        } else {
            setSearchTerm(search)
        }
    }, [])

    const onEntryCreated = useCallback((entryId: string) => {
        setCurrEntryId(entryId)
    }, [])

    return (
        <div className="w-full flex">
            <div className="h-screen grid grid-flow-row w-80 border-x border-mediumGray" style={{ gridTemplateRows: 'auto auto 1fr' }}>
                <JournalSelector fragment={data.user} onSelect={onJournalSelected} />
                <EntriesFeedFilters onSearchSubmit={onSearchSubmit} onCreateEntry={onEntryCreated} journalId={currJournalId} />
                <Suspense fallback={<div>Loading...</div>}>
                    <EntriesFeed fragment={data.user} onSelectEntry={setCurrEntryId} selectedEntryId={currEntryId} />
                </Suspense>
            </div>
            <JournalEditor entryId={currEntryId} />
        </div>
    );
};

export default MainPanel;