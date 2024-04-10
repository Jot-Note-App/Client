import React, { useState } from 'react';
import { useMutation } from 'react-relay';
import { ConnectionHandler, graphql } from 'relay-runtime';
import Popup from 'reactjs-popup';
import Button from '../../reusable/Button';

const editJournalModalUpdateJournalMutation = graphql`
mutation EditJournalModalUpdateJournalMutation($journalId: ID!, $name: String!, $ordinal: Int!){
  updateJournal(id: $journalId input: {name: $name, ordinal: $ordinal}){
    __typename
    ... on JournalMutationSuccess {
        journal{
            id
            name
            ordinal
        }
    }
    ... on MutationFailure {
        error
    }
  }
}
`

interface EditJournalModalProps {
    journalId: string,
    name: string,
    ordinal: number,
    isOpen: boolean,
    onClose: () => void,
}
const EditJournalModal: React.FC<EditJournalModalProps> = ({ journalId, name, ordinal, isOpen, onClose }) => {
    const [editJournal] = useMutation(editJournalModalUpdateJournalMutation);
    const [journalName, setJournalName] = useState(name);
    const handleEditJournal = () => {
        editJournal({
            variables: {
                journalId: journalId,
                name: journalName,
                ordinal: ordinal
            },
            onCompleted: () => {
                onClose();
            },
            onError: (error) => {
                console.log(error);
            }
        });
    }

    return (
        <Popup open={isOpen} closeOnDocumentClick closeOnEscape modal onClose={onClose}>
            <div className="bg-white flex flex-col justify-center items-center px-4 py-6 w-80">
                <div className="text-h5 mb-4">Rename Notebook</div>
                <input className="w-50 mb-4 outline-none border border-mediumGray px-2 py-1 rounded text-body" defaultValue={name} onChange={e => setJournalName(e.target.value)} type="text" />

                <div className="w-full flex gap-10 justify-center">
                    <Button color={'gray'} onClick={onClose}>
                        Cancel
                    </Button>
                    <Button color={'main'} onClick={() => handleEditJournal()} >
                        Save
                    </Button>
                </div>
            </div>
        </Popup>
    );
}

export default EditJournalModal;
