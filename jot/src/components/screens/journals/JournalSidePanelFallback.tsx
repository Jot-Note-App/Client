import React from 'react';
import Search from '../../Search';
import AddCircleIcon from '../../../icons/AddCircleIcon';
import KebabMenuIcon from '../../../icons/KebabMenuIcon';

const JournalSidePanelFallback: React.FC = () => {
    return (
        // TODO: Refactor to use actual components instead of recreating the entire side panel
        <div className="h-screen grid grid-flow-row w-72 border-x border-mediumGray" style={{ gridTemplateRows: 'auto auto 1fr', minWidth: '18rem' }}>
            <div className="grid grid-flow-col bg-lightGray border-b border-mediumGray items-center p-2" style={{ gridTemplateColumns: '1fr auto' }}>
                <div className="flex gap-2 items-center hover:cursor-pointer  text-subheading ">
                </div>
                <div className="text-darkGray transition-colors duration-200 p-2">
                    <KebabMenuIcon />
                </div>
            </div>
            <div className="grid grid-flow-col items-center gap-2 bg-faintGray border-b border-mediumGray p-6 ">
                <Search onSubmit={() => { }} placeholder='Enter to search ...' disabled />
                <div className="text-darkGray transition-colors duration-300">
                    <AddCircleIcon />
                </div>
            </div>
        </div>
    );
}
export default JournalSidePanelFallback;