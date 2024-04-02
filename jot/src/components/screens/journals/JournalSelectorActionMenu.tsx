import React from 'react';
import Popup from 'reactjs-popup';
import KebabMenuIcon from '../../../icons/KebabMenuIcon';
import PencilIcon from '../../../icons/PencilIcon';
import TrashIcon from '../../../icons/TrashIcon';

const JournalSelectorActionMenu: React.FC = () => {
    return (
        <div>
            <Popup
                trigger={
                    <div className="text-darkGray hover:cursor-pointer hover:text-main transition-colors duration-200">
                        <KebabMenuIcon />
                    </div>
                }
                offsetY={0}
                arrow={false}
                closeOnEscape
                position="bottom left">
                <div className="bg-white flex flex-col hover:cursor-pointer rounded-md w-32 text-body text-darkGray">
                    <div className="hover:bg-faintGray py-2 px-3 flex gap-2 items-center transition-colors duration-200">
                        <div className="text-darkGray">
                            <PencilIcon height={17} width={17} />
                        </div>
                        Rename
                    </div>
                    <div className="hover:bg-faintGray py-2 px-3 flex gap-2 items-center transition-colors duration-200">
                        <div className="text-darkGray">
                            <TrashIcon height={17} width={17} />
                        </div>
                        Delete
                    </div>
                </div>
            </Popup>
        </div>

    );
}
export default JournalSelectorActionMenu;