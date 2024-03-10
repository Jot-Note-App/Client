import React from 'react';
import { MainPanelTab } from '../enums/MainPanelTab';
import { graphql, PayloadError, FragmentRef } from 'relay-runtime';
import { useFragment, useLazyLoadQuery } from 'react-relay';
import { useState, useEffect, useRef, useCallback } from 'react';
import { useFloating, useInteractions, FloatingList, useListNavigation, useTypeahead, useClick, useDismiss, useRole } from '@floating-ui/react';
import { MainPanelQuery$data } from '../__generated__/MainPanelQuery.graphql';
import { MainPanelEntriesFeedFragment$data, MainPanelEntriesFeedFragment$key } from '../__generated__/MainPanelEntriesFeedFragment.graphql';
import { MainPanelJournalSelectorFragment$data, MainPanelJournalSelectorFragment$key } from '../__generated__/MainPanelJournalSelectorFragment.graphql';
import ArrowIcon from '../icons/ArrowIcon';
import Search from '../components/Search';
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
    defaultSelectedJournalId?: string;
}

const JournalSelector: React.FC<JournalSelectorProps> = ({ fragment, onSelect, defaultSelectedJournalId = null }) => {
    const data = useFragment(
        journalSelectorFragment,
        fragment,
    ) as MainPanelJournalSelectorFragment$data;
    const [isOpen, setIsOpen] = useState(false);
    const [selectedId, setSelectedId] = useState<string | null>(defaultSelectedJournalId);
    const [selectedLabel, setSelectedLabel] = useState<string>('Journals');
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
                            <JournalSelectorRow id={option.id} isSelected={option.id === selectedId} label={option.label} onSelect={handleSelect} />))}
                    </FloatingList>
                </div>
            )}
        </div>
    );
}

interface EntriesFeedFiltersProps {
    onSearchChange: (search: string) => void;
}
const EntriesFeedFilters: React.FC<EntriesFeedFiltersProps> = ({ onSearchChange }) => {
    return (
        <div className="bg-faintGray border-b border-mediumGray p-6">
            <Search onSearchChange={onSearchChange} />
        </div>
    );
}

const entriesFeedFragment = graphql`
  fragment MainPanelEntriesFeedFragment on User {
    id
    entriesFeedJournals: journals(first: 1){
        edges {
            node {
                id
                name
                entries{
                    edges{
                        node{
                            id
                            content
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
        <div className="w-full h-full bg-white">
            <div>Entries Feed</div>
        </div>
    );
}

const mainPanelQuery = graphql`
query MainPanelQuery{
  user {
    id
    ...MainPanelJournalSelectorFragment
    ...MainPanelEntriesFeedFragment
  }
}`;

const MainPanel: React.FC<MainPanelProps> = ({ selectedTab }) => {
    const [currJournalId, setCurrJournalId] = useState<string | null>(null)
    const lastJournalKey = 'lastJournalId'
    const data = useLazyLoadQuery(mainPanelQuery, {}) as MainPanelQuery$data;
    useEffect(() => {
        const storedLastJournalId = localStorage.getItem(lastJournalKey);
        if (storedLastJournalId) {
            setCurrJournalId(storedLastJournalId);
        }
    }, []);
    useEffect(() => {
        if (currJournalId) {
            localStorage.setItem(lastJournalKey, currJournalId)
        }
    }, [currJournalId])
    function onJournalSelected(journalId: string) {
        setCurrJournalId(journalId);
    }

    return (
        <div className="grid grid-flow-row w-80 border-x border-mediumGray" style={{ gridTemplateRows: 'auto auto 1fr' }}>
            <JournalSelector fragment={data.user} onSelect={onJournalSelected} />
            <EntriesFeedFilters onSearchChange={() => { }} />
            <EntriesFeed fragment={data.user} />
        </div>
    );
};

export default MainPanel;