import React, { useRef } from 'react';
import Popup from 'reactjs-popup';
import KebabMenuIcon from '../../../icons/KebabMenuIcon';
import PencilIcon from '../../../icons/PencilIcon';
import TrashIcon from '../../../icons/TrashIcon';
import DeleteJournalModal from './DeleteJournalModal';
import EditJournalModal from './EditJournalModal';
import PopupActions from 'reactjs-popup/dist/types';
interface JournalSelectorActionMenuProps {
    journalId: string,
    name: string,
    ordinal: number,
    connectionIds: string[],
    onDelete: () => void
}

const JournalSelectorActionMenu: React.FC<JournalSelectorActionMenuProps> = ({ journalId, name, ordinal, connectionIds, onDelete }) => {
    const [isDeleteJournalModalOpen, setIsDeleteJournalModalOpen] = React.useState(false);
    const [isEditJournalModalOpen, setIsEditJournalModalOpen] = React.useState(false);
    const popupRef = useRef<PopupActions.PopupActions>(null);
    const closePopup = () => popupRef.current?.close();
    return (
        <div>
            <Popup
                ref={popupRef}
                trigger={
                    <div className="text-darkGray hover:cursor-pointer hover:text-main transition-colors duration-200 p-2">
                        <KebabMenuIcon />
                    </div>
                }
                offsetY={0}
                arrow={false}
                closeOnEscape
                position="bottom left">
                <div className="bg-white flex flex-col hover:cursor-pointer rounded-md w-32 text-body text-darkerGray">
                    <div className="hover:bg-faintGray py-2 px-3 flex gap-2 items-center transition-colors duration-200"
                        onClick={() => {
                            setIsEditJournalModalOpen(true)
                            closePopup()
                        }}>
                        <div className="text-darkGray">
                            <PencilIcon height={17} width={17} />
                        </div>
                        Rename
                    </div>
                    <div className="hover:bg-faintGray py-2 px-3 flex gap-2 items-center transition-colors duration-200"
                        onClick={() => {
                            setIsDeleteJournalModalOpen(true)
                            closePopup()
                        }}>
                        <div className="text-darkGray">
                            <TrashIcon height={17} width={17} />
                        </div>
                        Delete
                    </div>
                </div>
            </Popup>
            <EditJournalModal
                journalId={journalId}
                name={name}
                ordinal={ordinal}
                isOpen={isEditJournalModalOpen}
                onClose={() => setIsEditJournalModalOpen(false)}
            />
            <DeleteJournalModal
                journalId={journalId}
                isOpen={isDeleteJournalModalOpen}
                onSuccessfulDelete={() => {
                    onDelete()
                    setIsDeleteJournalModalOpen(false)
                }}
                onClose={() => setIsDeleteJournalModalOpen(false)}
                connectionIds={connectionIds} />
        </div>

    );
}
export default JournalSelectorActionMenu;