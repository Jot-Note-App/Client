import {
    BoldButton,
    CodeButton,
    HeadlineOneButton,
    HeadlineThreeButton,
    HeadlineTwoButton,
    ItalicButton,
    OrderedListButton,
    UnderlineButton,
    UnorderedListButton,
} from '@draft-js-plugins/buttons';
import Editor from '@draft-js-plugins/editor';
import createLinkifyPlugin from '@draft-js-plugins/linkify';
import "@draft-js-plugins/linkify/lib/plugin.css";
import createToolbarPlugin, { Separator } from '@draft-js-plugins/static-toolbar';
import { FloatingList, useClick, useDismiss, useFloating, useInteractions, useListNavigation, useRole } from '@floating-ui/react';
import { convertToRaw, EditorState, getDefaultKeyBinding, getVisibleSelectionRect, RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';
import React, { Suspense, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { useFragment, useLazyLoadQuery, useMutation, usePaginationFragment } from 'react-relay';
import { ConnectionHandler, graphql, PayloadError } from 'relay-runtime';
import { MainPanelCreateEntryMutation$data } from '../__generated__/MainPanelCreateEntryMutation.graphql';
import { MainPanelCreateJournalMutation$data } from '../__generated__/MainPanelCreateJournalMutation.graphql';
import { MainPanelEntriesFeedFragment$key } from '../__generated__/MainPanelEntriesFeedFragment.graphql';
import { MainPanelEntryEditorQuery$data } from '../__generated__/MainPanelEntryEditorQuery.graphql';
import { MainPanelEntryRowFragment$data, MainPanelEntryRowFragment$key } from '../__generated__/MainPanelEntryRowFragment.graphql';
import { MainPanelJournalSelectorFragment$data, MainPanelJournalSelectorFragment$key } from '../__generated__/MainPanelJournalSelectorFragment.graphql';
import { MainPanelQuery$data } from '../__generated__/MainPanelQuery.graphql';
import Search from '../components/Search';
import { UserContext } from '../components/UserContextProvider';
import Tooltip from '../components/reusable/Tooltip';
import DeleteEntryModal from '../components/screens/journals/DeleteEntryModal';
import JournalSelectorActionMenu from '../components/screens/journals/JournalSelectorActionMenu';
import JournalSidePanelFallback from '../components/screens/journals/JournalSidePanelFallback';
import { MainPanelTab } from '../enums/MainPanelTab';
import AddCircleIcon from '../icons/AddCircleIcon';
import AddIcon from '../icons/AddIcon';
import ArrowIcon from '../icons/ArrowIcon';
import MagnifyingGlassIcon from '../icons/MagnifyingGlassIcon';
import OpenBookIcon from '../icons/OpenBookIcon';
import SaveIcon from '../icons/SaveIcon';
import TrashIcon from '../icons/TrashIcon';
import DotSpinner from '../icons/animated/DotSpinner';
import GhostEmptyState from '../icons/empty_states/GhostEmptyState';
import { convertStringToEditorState, getPlainTextFromEditorState, handleEditorKeyCommand } from '../utils/editor';
import { convertTimeStringtoFormattedDateString } from '../utils/utils';
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
                ordinal
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
        <div key={id} className={`w-full text-darkerGray text-body hover:cursor-pointer p-2 transition-colors duration-75 ${isSelected ? 'bg-secondary' : ' hover:bg-faintGray'} `}
            onClick={() => {
                onSelect(id)
            }}>
            {label}
        </div>
    );
}

interface JournalSelectorProps {
    fragment: MainPanelJournalSelectorFragment$key;
    onSelect: (journalId: string | null) => void;
    entryFeedJournalsConnectionId: string;
}

const JournalSelector: React.FC<JournalSelectorProps> = ({ fragment, onSelect, entryFeedJournalsConnectionId }) => {
    const data = useFragment(
        journalSelectorFragment,
        fragment,
    ) as MainPanelJournalSelectorFragment$data;
    const userContext = useContext(UserContext)
    const [createJournal, _isCreatingJournal] = useMutation(mainPanelCreateJournalMutation);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState<string | null>(null);
    const lastJournalKey = `User${userContext.id}-lastJournalId`
    const selectedJournal = data.journalSelectorJournals?.edges.find((edge) => edge.node.id == selectedId)
    const handleJournalSelected = (id: string | null) => {
        if (id != selectedJournal?.node.id) {
            setSelectedId(id)
            onSelect(id)
        }
        setIsOpen(false)
    }
    const selectFirstJournal = useCallback(() => {
        handleJournalSelected(data.journalSelectorJournals?.edges[0]?.node.id || null)
    }, [data.journalSelectorJournals])
    useEffect(
        function handleInitialJournalSelection() {
            const storedLastJournalId = localStorage.getItem(lastJournalKey);
            console.log(lastJournalKey)
            if (storedLastJournalId) {
                handleJournalSelected(storedLastJournalId)
            } else {
                selectFirstJournal()
            }
        },
        []);
    useEffect(
        function handleNewJournalSelected() {
            if (selectedId) {
                localStorage.setItem(lastJournalKey, selectedId)
            }
        },
        [selectedId])

    const onCreateJournalComplete = useCallback((response: {}, _errors: PayloadError[] | null) => {
        const res = response as MainPanelCreateJournalMutation$data;
        if (res.createJournal.__typename == 'CreateJournalMutationSuccess') {
            const newJournal = res.createJournal.journalEdge.node
            handleJournalSelected(newJournal.id)
            setIsOpen(false)
        }

    }, []);

    const onDeleteJournalComplete = useCallback(() => {
        localStorage.removeItem(lastJournalKey)
        selectFirstJournal()
    }, [])


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


    return (
        <div className="w-full">
            <div className="grid grid-flow-col bg-lightGray border-b border-mediumGray items-center p-2" style={{ gridTemplateColumns: '1fr auto' }}>
                <div className="flex gap-2 items-center hover:cursor-pointer  text-subheading " ref={refs.setReference} {...getReferenceProps()} onClick={() => setIsOpen(!isOpen)}>
                    {selectedJournal?.node.name || ''}
                    <div className='min-h-6 min-w-6'>
                        <ArrowIcon orientation={isOpen ? 'up' : 'down'} />
                    </div>
                </div>
                <JournalSelectorActionMenu
                    journalId={selectedId || ''}
                    name={selectedJournal?.node.name || ''}
                    ordinal={selectedJournal?.node.ordinal || 0}
                    connectionIds={[data.journalSelectorJournals?.__id || '', entryFeedJournalsConnectionId]}
                    onDelete={onDeleteJournalComplete}
                />
            </div>
            {isOpen && (
                <div className="bg-white border border-lightGray shadow-md w-80 rounded-md mt-0.5" ref={refs.setFloating} style={floatingStyles} {...getFloatingProps()}>
                    <div className="border-b border-mediumGray py-3 px-6">
                        <Search onSearchChange={setSearchTerm} />
                    </div>
                    <FloatingList elementsRef={elementsRef} labelsRef={labelsRef}>
                        <div className="min-h-48 max-h-72 overflow-y-auto" >
                            {options.length > 0 ? options.map((option) => (
                                <JournalSelectorRow key={option.id} id={option.id} isSelected={option.id === selectedId} label={option.label} onSelect={handleJournalSelected} />)) :
                                <div className="grid grid-flow-row items-center justify-center text-mediumGray p-5">
                                    <div className="flex justify-center ">
                                        <MagnifyingGlassIcon />
                                    </div>
                                    <div className="text-regular">
                                        No Results
                                    </div>
                                </div>

                            }
                        </div>
                    </FloatingList>
                    <div className="text-regular text-center hover:cursor-pointer transition-colors duration-200 hover:bg-faintGray py-3 border-t border-mediumGray"
                        onClick={() => {
                            const connectionId = data.journalSelectorJournals?.__id
                            createJournal({
                                variables: {
                                    name: 'New Notebook',
                                    userId: userContext.id,
                                    connections: connectionId ? [connectionId] : [],
                                },
                                onCompleted: onCreateJournalComplete,
                            })
                        }}
                    >
                        <div className='flex gap-1 text-darkGray items-center justify-center text-body'><AddIcon /> <span className='text-darkerGray'>New Notebook</span></div>
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
            <Tooltip
                text='Create note'
                offsetX={-3}
            >
                <div className="text-darkGray hover:cursor-pointer hover:text-main transition-colors duration-300"
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
            </Tooltip>
        </div >
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
    const editorState = convertStringToEditorState(data.content)
    const editorText = getPlainTextFromEditorState(editorState)
    const isEditorTextEmpty = editorText == ''
    return (
        <div className={` hover:cursor-pointer w-full h-16 border-b border-mediumGray py-2 px-5 grid grid-flow-row items-center transition-colors duration-75 ${data.id == selectedEntryId ? "bg-secondary" : "hover:bg-faintGray"}`}
            style={{ gridTemplateRows: 'auto 1fr' }}
            onClick={() => onSelect(data.id)}
        >
            <div className="grid grid-flow-col justify-between items-center">
                <div className={`text-regular font-semibold truncate ${!data.title && "text-darkGray"}`}>
                    {data.title ? data.title : "Untitled"}
                </div>
                <div className="text-small text-darkGray">{convertTimeStringtoFormattedDateString(data.createdAt)}</div>
            </div>
            <div className={`truncate text-regular ${isEditorTextEmpty && 'text-darkGray'}`}>
                {!isEditorTextEmpty ? editorText : 'No text'}
            </div>
        </div>
    );
}

const entriesFeedFragment = graphql`
  fragment MainPanelEntriesFeedFragment on Journal 
  @refetchable(queryName: "MainPanelEntriesFeedRefetchQuery")
  @argumentDefinitions(
    # journalId: {type: "ID", defaultValue: null}
    first: { type: "Int", defaultValue: 1 }
    after: { type: "ID", defaultValue: null }
    search: { type: "String", defaultValue: null }
  ) {
        id
        name
        entries(first: $first, after: $after, search: $search)@connection(key: "MainPanelEntriesFeedFragment_entries"){
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
`;

interface EntriesFeedProps {
    fragment: MainPanelEntriesFeedFragment$key;
    onSelectEntry: (id: string | null) => void;
    onEmptyFeed: () => void;
    selectedEntryId: string | null;
    selectedJournalId: string | null;
}

const EntriesFeed: React.FC<EntriesFeedProps> = ({ fragment, onSelectEntry, onEmptyFeed, selectedEntryId, selectedJournalId }) => {
    const { data, loadNext, hasNext } = usePaginationFragment(entriesFeedFragment, fragment)
    const feedContainerRef = useRef<HTMLDivElement | null>(null)
    const selectFirstEntry = useCallback(() => {
        const entryId = data.entries?.edges[0]?.node.id || null
        if (entryId || selectedJournalId) {
            onSelectEntry(entryId)
        }
    }, [data.entries])


    useEffect(
        function handleJournalChange() {
            selectFirstEntry()
        }, [selectedJournalId])

    useEffect(
        function handleNullEntry() {
            if (selectedEntryId == null) {
                //TODO: potentially get next entry as opposed to the first
                selectFirstEntry()
            }
        }, [selectedEntryId])

    useEffect(
        function handleEmptyFeed() {
            var numEntries = data.entries?.edges.length || 0
            if (numEntries == 0) {
                onEmptyFeed()
            }
        }, [data.entries])

    useEffect(
        function handleLoadFeedUntilOverflow() {
            const scrollHeight = feedContainerRef.current?.scrollHeight || 0
            const clientHeight = feedContainerRef.current?.clientHeight || 0
            if (scrollHeight <= clientHeight && hasNext) {
                loadNext(2, {})
            }
        }, [data]
    )

    return (
        <div
            ref={feedContainerRef}
            className="w-full bg-white overflow-auto"
            onScroll={() => {
                const scrollTop = feedContainerRef.current?.scrollTop || 0
                const scrollHeight = feedContainerRef.current?.scrollHeight || 0
                const clientHeight = feedContainerRef.current?.clientHeight || 0
                if ((scrollTop + clientHeight) / scrollHeight >= 0.85 && hasNext) {
                    loadNext(5, {})
                }
            }}
        >
            {
                data.entries?.edges.map((edge) => {
                    const entry = edge.node
                    return <EntryRow key={entry.id} fragment={entry} onSelect={onSelectEntry} selectedEntryId={selectedEntryId} />
                })
            }
        </div>
    );
}

const mainPanelUpdateEntryMutation = graphql`
mutation MainPanelUpdateEntryMutation($entryId: ID!, $content: String!, $title: String){
  updateEntry(id: $entryId, input: {content: $content, title: $title}){
    __typename
    ... on EntryMutationSuccess {
            entry {
                id
                title
                content
                updatedAt
            }
    }
    ... on MutationFailure {
        error
    }
  }
}
`

const mainPanelEntryEditorQuery = graphql`
query MainPanelEntryEditorQuery($entryId: ID!){
  node(id: $entryId){
    __typename
    ... on Entry {
        id
        title
        content
        createdAt
        updatedAt
        journal {
            id
            name
        }
    }
  }
}
`
interface EntryEditorProps {
    entryId: string;
    onEntryDeleted: () => void;
}

const EntryEditor: React.FC<EntryEditorProps> = ({ entryId, onEntryDeleted }) => {
    const data = useLazyLoadQuery(mainPanelEntryEditorQuery, { entryId: entryId }) as MainPanelEntryEditorQuery$data;
    const [updateEntry, _isUpdatingEntry] = useMutation(mainPanelUpdateEntryMutation);
    const defaultTitle = data.node?.__typename == 'Entry' ? data.node.title || null : null
    const [readOnly, setReadOnly] = useState(false)
    const [title, setTitle] = useState(defaultTitle);
    const content = data.node?.__typename == 'Entry' ? data.node.content : '';
    const [editorState, setEditorState] = useState(convertStringToEditorState(content));
    const editorRef = useRef<Editor | null>(null);
    const editorContainerRef = useRef<HTMLDivElement | null>(null);
    const scrollContainerRef = useRef<HTMLDivElement | null>(null);
    const titleRef = useRef<HTMLTextAreaElement | null>(null);
    const timerRef = useRef<number | null>(null);
    const [isToolbarVisible, setIsToolbarVisible] = useState(false)
    const [isDeleteEntryModalOpen, setIsDeleteEntryModalOpen] = useState(false);
    const journalId = data.node?.__typename == 'Entry' ? data.node?.journal.id : ''
    const journalEntriesConnectionId = ConnectionHandler.getConnectionID(journalId, 'MainPanelEntriesFeedFragment_entries')
    const [{ plugins, Toolbar }] = useState(() => {
        const linkifyPlugin = createLinkifyPlugin({ target: '_blank', rel: 'noopener noreferrer' });
        const toolbarPlugin = createToolbarPlugin();
        const { Toolbar } = toolbarPlugin;
        const plugins = [toolbarPlugin, linkifyPlugin];
        return {
            plugins,
            Toolbar
        };
    });

    const saveEditorState = useCallback(() => {
        const contentState = editorState.getCurrentContent();
        const contentStateString = JSON.stringify(convertToRaw(contentState));
        if (data.node?.__typename != 'Entry' || data.node.title == title && data.node.content == contentStateString) {
            return
        }
        updateEntry({
            variables: {
                entryId: entryId,
                content: contentStateString,
                title: title,
            },
        })
    }, [title, editorState, entryId, data.node])

    useEffect(
        function handleTitleFocusAndBlur() {
            const handleBlurEvent = () => saveEditorState();
            const titleElement = titleRef.current;
            if (titleElement) {
                titleElement.addEventListener('blur', handleBlurEvent, true);
            }
            return () => {
                if (titleElement) {
                    titleElement.removeEventListener('blur', handleBlurEvent, true);
                }
            };
        }, [saveEditorState, titleRef]);

    useEffect(
        function handleEditorFocusAndBlur() {
            const handleFocusEvent = () => setIsToolbarVisible(true);
            const handleBlurEvent = () => {
                setIsToolbarVisible(false)
                saveEditorState()
            };
            const editorContainer = editorContainerRef.current;
            if (editorContainer) {
                editorContainer.addEventListener('focus', handleFocusEvent, true);
                editorContainer.addEventListener('blur', handleBlurEvent, true);
            }
            return () => {
                if (editorContainer) {
                    editorContainer.removeEventListener('focus', handleFocusEvent, true);
                    editorContainer.removeEventListener('blur', handleBlurEvent, true);
                }
            };
        }, [saveEditorState]);

    const clearTimer = useCallback((timer: React.MutableRefObject<number | null>) => {
        if (timer.current) {
            clearTimeout(timer.current);
            timer.current = null;
        }
    }, [])

    useEffect(
        function updateEditorOnEntryChange() {
            clearTimer(timerRef)
            // TODO: this could be causing the the editor state to remain unchanged when switching to another entry
            if (data.node?.__typename == 'Entry') {
                setTitle(data.node.title || null)
                setEditorState(convertStringToEditorState(data.node.content));
                if (!data.node.title) {
                    titleRef.current?.focus();
                }
            }
        }, [entryId])

    const handleTitleChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
        clearTimer(timerRef)
        setTitle(e.target.value);
    }, [timerRef])

    useEffect(
        function handleTitleResize() {
            // First reset the height to 0px so that the scrollHeight can be calculated accurately 
            titleRef.current?.style.setProperty('height', `0px`)
            const scrollHeight = titleRef.current?.scrollHeight || 0
            titleRef.current?.style.setProperty('height', `${scrollHeight}px`)
        }, [titleRef, title]
    )

    const handleScroll = () => {
        const minimumBottomPadding = 120;
        const editor = editorRef.current;
        if (editor) {
            const selectionRect = getVisibleSelectionRect(window);
            if (selectionRect) {
                const { top, bottom } = selectionRect;
                const windowHeight = window.innerHeight;
                const scrolledFromBottom = windowHeight - bottom;

                if (scrolledFromBottom < minimumBottomPadding) {
                    const targetPosition = windowHeight - minimumBottomPadding;
                    scrollContainerRef.current?.scrollBy({
                        top: top - targetPosition,
                        behavior: 'instant',
                    });
                }
            }
        }
    };

    const handleEditorStateChange = useCallback((editorState: EditorState) => {
        if (data.node) {
            clearTimer(timerRef)
            const timer = setTimeout(() => {
                saveEditorState();
            }, 3000);
            timerRef.current = timer;
        }
        handleScroll()
        setEditorState(editorState);
    }, [data, timerRef, saveEditorState]);

    const handleKeyCommand = useCallback((command: string, editorState: EditorState) => {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            setEditorState(newState);
            return 'handled';
        }
        return 'not-handled';
    }, []);

    const keyBindingFn = useCallback(
        (e: React.KeyboardEvent<HTMLDivElement>): string | null => {
            const newEditorState = handleEditorKeyCommand(e, editorState);
            setEditorState(newEditorState);
            return getDefaultKeyBinding(e);
        },
        [editorState]
    );

    const handleTextAreaEnterKey = (event: React.KeyboardEvent) => {
        if (event.code == 'Enter') {
            editorRef.current?.focus();
            event.preventDefault();
        }
    };

    return (
        <div className="w-full h-full flex justify-center">
            {
                data.node && data.node.__typename == "Entry" ?
                    <div className="grid grid-flow-row min-w-full" style={{ gridTemplateRows: 'auto auto 1fr' }}>

                        <div className=' grid grid-flow-col px-20 pt-4 pb-1 text-small text-darkGray ' style={{ gridTemplateColumns: '1fr 1fr 1fr' }} >
                            <div className="flex flex-col ">
                                <div >Last Saved: {convertTimeStringtoFormattedDateString(data.node.updatedAt, true)}</div>
                                <div >Created: {convertTimeStringtoFormattedDateString(data.node.createdAt, true)}</div>
                            </div>

                            <div className="text-center">
                                {data.node.journal.name} / <span className='text-offBlack'>{data.node.title || "Untitled"} </span>
                            </div>

                            <div className="flex flex-row justify-end">
                                {/* TODO: replace SaveIcon with loading indicator when saving*/}
                                <Tooltip
                                    text='Read-only: links enabled'
                                >
                                    <div className={`flex items-center justify-center hover:text-main transition-colors duration-300 hover:cursor-pointer w-14 h-10  ${readOnly && 'text-main'}`} onClick={() => { setReadOnly(prev => !prev) }}>
                                        <OpenBookIcon />
                                    </div>
                                </Tooltip>

                                <Tooltip
                                    text='Save'
                                >
                                    <div className="flex items-center justify-center hover:text-main transition-colors duration-300 hover:cursor-pointer w-14 h-10" onClick={() => saveEditorState()}>
                                        <SaveIcon />
                                    </div>
                                </Tooltip>

                                <Tooltip
                                    text='Delete'
                                >
                                    <div className="flex items-center justify-center hover:text-main transition-colors duration-300 hover:cursor-pointer w-14 h-10" onClick={() => setIsDeleteEntryModalOpen(true)}>
                                        <TrashIcon />
                                    </div>
                                </Tooltip>
                            </div>
                        </div>
                        <div ref={scrollContainerRef} className='overflow-y-scroll flex justify-center text-body'>
                            <div className={`w-9/12 h-full max-h-full ${!readOnly && 'hover:cursor-text'}`}
                                style={{ maxWidth: '50rem' }}
                                onClick={(e) => {
                                    if (editorRef.current) {
                                        editorRef.current.focus();
                                        const editorStateWithFocusAtEnd = EditorState.moveFocusToEnd(editorState);
                                        setEditorState(editorStateWithFocusAtEnd);
                                    }
                                    e.stopPropagation();
                                }}>
                                <div className='h-10 hover:cursor-default' onClick={e => e.stopPropagation()} />
                                <form
                                    className='max-h-full'
                                    onSubmit={e => {
                                        e.preventDefault();
                                        if (editorRef.current) {
                                            editorRef.current.focus();
                                        }
                                        e.stopPropagation()
                                    }}>
                                    <textarea ref={titleRef}
                                        className={`hover:cursor-text bg-transparent max-h-full resize-none overflow-auto appearance-none border-none focus:outline-none text-title w-full pb-2 ${title ? "text-black" : "text-darkGray"} `}
                                        placeholder={"Untitled"}
                                        onClick={e => e.stopPropagation()}
                                        onChange={handleTitleChange}
                                        value={title || ''}
                                        disabled={readOnly}
                                        onKeyDown={handleTextAreaEnterKey}
                                    />
                                </form>
                                <div ref={editorContainerRef} onClick={e => e.stopPropagation()}>
                                    <Editor
                                        ref={editorRef}
                                        editorState={editorState}
                                        onChange={handleEditorStateChange}
                                        handleKeyCommand={handleKeyCommand}
                                        textAlignment='left'
                                        readOnly={readOnly}
                                        spellCheck={!readOnly}
                                        textDirectionality='LTR'
                                        stripPastedStyles={true}
                                        autoCapitalize='on'
                                        placeholder='Start typing here ...'
                                        keyBindingFn={keyBindingFn}
                                        plugins={plugins}
                                    />
                                    <div className='flex justify-center'>
                                        <div className={`fixed z-10 transition-transform duration-300 bottom-10  ${isToolbarVisible && !readOnly ? 'translate-y-0' : 'translate-y-20'}`}>
                                            <Toolbar >
                                                {
                                                    (externalProps) => (
                                                        <>
                                                            <BoldButton {...externalProps} />
                                                            <ItalicButton {...externalProps} />
                                                            <UnderlineButton {...externalProps} />
                                                            <CodeButton {...externalProps} />
                                                            <Separator />
                                                            <HeadlineOneButton {...externalProps} />
                                                            <HeadlineTwoButton {...externalProps} />
                                                            <HeadlineThreeButton {...externalProps} />
                                                            <Separator />
                                                            <UnorderedListButton {...externalProps} />
                                                            <OrderedListButton {...externalProps} />
                                                        </>
                                                    )
                                                }
                                            </Toolbar>

                                        </div>
                                    </div>
                                </div>
                                <div className='h-24' />
                            </div>
                        </div>
                        <DeleteEntryModal entryId={entryId}
                            isOpen={isDeleteEntryModalOpen}
                            onClose={() => setIsDeleteEntryModalOpen(false)}
                            onSuccessfulDelete={onEntryDeleted}
                            connectionId={journalEntriesConnectionId}
                        />
                    </div> :
                    <div className='grid min-w-full'>Loading...</div>
            }
        </div >
    )
};

interface JournalSidePanelProps {
    entryId: string | null;
    journalId: string | null;
    searchTerm: string | null;
    onJournalSelected: (journalId: string | null) => void;
    onSearchSubmit: (search: string) => void;
    onEntryCreated: (entryId: string) => void;
    onEntrySelected: (entryId: string | null) => void;
    onEmptyEntryFeed: () => void;
}

const mainPanelQuery = graphql`
query MainPanelQuery($first,: Int!, $after: ID, $journalId: ID $search: String){
  user {
    id
    ...MainPanelJournalSelectorFragment
    entriesFeedJournals: journals(first: 1, id: $journalId){
        __id
        edges {
            node {
                id
                ...MainPanelEntriesFeedFragment @arguments(first: $first, after: $after, search: $search)
            }
        
        }
    }
  }
}`;

const JournalSidePanel: React.FC<JournalSidePanelProps> = ({ entryId, journalId, searchTerm, onJournalSelected, onSearchSubmit, onEntryCreated, onEntrySelected, onEmptyEntryFeed }) => {
    const data = useLazyLoadQuery(mainPanelQuery, { first: 10, after: null, journalId: journalId, search: searchTerm }) as MainPanelQuery$data;
    const [createJournal, _isCreatingJournal] = useMutation(mainPanelCreateJournalMutation);
    const numJournals = data.user.entriesFeedJournals?.edges.length || 0
    useEffect(
        function handleJournalsChange() {
            const numJournals = data.user.entriesFeedJournals?.edges.length || 0
            if (numJournals == 0) {
                onEmptyEntryFeed()
            }
        }, [data.user.entriesFeedJournals])

    const onCreateJournalComplete = useCallback((response: {}, _errors: PayloadError[] | null) => {
        const res = response as MainPanelCreateJournalMutation$data;
        if (res.createJournal.__typename == 'CreateJournalMutationSuccess') {
            const newJournal = res.createJournal.journalEdge.node
            onJournalSelected(newJournal.id)
        }

    }, []);
    return (
        <>
            {
                numJournals > 0 ?
                    <div className="h-screen grid grid-flow-row w-72 border-x border-mediumGray" style={{ gridTemplateRows: 'auto auto 1fr', minWidth: '18rem' }}>
                        <JournalSelector fragment={data.user} onSelect={onJournalSelected} entryFeedJournalsConnectionId={data.user.entriesFeedJournals?.__id || ''} />
                        <EntriesFeedFilters onSearchSubmit={onSearchSubmit} onCreateEntry={onEntryCreated} journalId={journalId} />
                        <Suspense fallback={
                            <div className="flex items-center justify-center ">
                                <DotSpinner />
                            </div>
                        }>
                            {data.user.entriesFeedJournals?.edges?.[0]?.node &&
                                <EntriesFeed
                                    fragment={data.user.entriesFeedJournals?.edges?.[0].node}
                                    onSelectEntry={onEntrySelected}
                                    selectedEntryId={entryId}
                                    selectedJournalId={journalId}
                                    onEmptyFeed={onEmptyEntryFeed} />
                            }
                        </Suspense>
                    </div>
                    : <div className="w-72 border-x border-mediumGray h-full flex flex-col gap-2 items-center justify-center text-mediumGray" style={{ minWidth: '18rem' }}>
                        <div className="text-h4">No notebooks</div>
                        <div className="text-body font-semibold text-main hover:cursor-pointer"
                            onClick={() => {
                                createJournal({
                                    variables: {
                                        name: 'New Notebook',
                                        userId: data.user.id,
                                        connections: [],
                                    },
                                    onCompleted: onCreateJournalComplete,
                                })
                            }}>
                            Create a notebook</div>
                    </div>
            }
        </>
    );
}

const Journals: React.FC = () => {
    const [currJournalId, setCurrJournalId] = useState<string | null>(null)
    const [currEntryId, setCurrEntryId] = useState<string | null>(null)
    const [searchTerm, setSearchTerm] = useState<string | null>(null)
    const [isFeedEmpty, setIsFeedEmpty] = useState<boolean>(false)

    console.log(currJournalId)
    const onJournalSelected = useCallback((journalId: string | null) => {
        setSearchTerm(null)
        if (journalId == null) {
            setIsFeedEmpty(true)
            setCurrEntryId(null)
            setCurrJournalId(null)
            return
        }
        setIsFeedEmpty(false)
        setCurrEntryId(null)
        setCurrJournalId(journalId);
    }, [currJournalId])

    const onSearchSubmit = useCallback((search: string) => {
        setSearchTerm(search != '' ? search : null)
    }, [])

    const onEntryCreated = useCallback((entryId: string) => {
        setIsFeedEmpty(false)
        setCurrEntryId(entryId)
    }, [])

    const onEntryDeleted = useCallback(() => {
        setCurrEntryId(null)
    }, [])
    return (

        <div className="w-full flex">
            <Suspense fallback={<JournalSidePanelFallback />}>
                <JournalSidePanel
                    entryId={currEntryId}
                    journalId={currJournalId}
                    searchTerm={searchTerm}
                    onJournalSelected={onJournalSelected}
                    onSearchSubmit={onSearchSubmit}
                    onEntryCreated={onEntryCreated}
                    onEntrySelected={setCurrEntryId}
                    onEmptyEntryFeed={() => setIsFeedEmpty(true)} />
            </Suspense>

            {
                currEntryId ?
                    <Suspense fallback={<div className='w-full h-full flex items-center justify-center'>
                        <DotSpinner />
                    </div>}>
                        <EntryEditor entryId={currEntryId} onEntryDeleted={onEntryDeleted} />
                    </Suspense>
                    : !isFeedEmpty ?
                        <div className='w-full h-full flex items-center justify-center'>
                            <DotSpinner />
                        </div>
                        :
                        <div className="w-full h-full flex flex-col gap-2 items-center justify-center text-mediumGray">
                            <GhostEmptyState />
                            <div className="text-h3">No notes to show</div>
                            <div className="text-lg">Create a note in the side panel to get started!</div>
                        </div>
            }

        </div>
    );
}


const MainPanel: React.FC<MainPanelProps> = ({ selectedTab }) => {
    var screen;
    switch (selectedTab) {
        case MainPanelTab.Journals:
            screen = <Journals />;
            break;
        default:
            screen = <div></div>;
    }
    return (
        <>{screen}</>
    );
};

export default MainPanel;