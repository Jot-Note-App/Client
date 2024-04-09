import React from 'react';
import { useMutation } from 'react-relay';
import { ConnectionHandler, graphql } from 'relay-runtime';
import Popup from 'reactjs-popup';
import Button from '../../reusable/Button';

const deleteJournalModalDeleteJournalMutation = graphql`
mutation DeleteJournalModalDeleteJournalMutation($journalId: ID!, $connections: [ID!]!){
  deleteJournal(id: $journalId){
    __typename
    ... on DeleteJournalMutationSuccess {
        journal{
            id @deleteEdge(connections: $connections)
        }
    }
    ... on MutationFailure {
        error
    }
  }
}
`

interface DeleteJournalModalProps {
    journalId: string,
    isOpen: boolean,
    onSuccessfulDelete: () => void,
    onClose: () => void,
    connectionIds: string[]
}
const DeleteJournalModal: React.FC<DeleteJournalModalProps> = ({ journalId, isOpen, onSuccessfulDelete, onClose, connectionIds }) => {
    const [deleteJournal] = useMutation(deleteJournalModalDeleteJournalMutation);
    const handleDeleteJournal = () => {
        deleteJournal({
            variables: {
                journalId: journalId,
                connections: connectionIds
            },
            onCompleted: () => {
                onSuccessfulDelete();
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
                <div className="text-h5 mb-4">Delete Notebook?</div>
                <div className="text-body text-darkGray w-50 mb-4 text-center">
                    All notes within this notebook will also be deleted. This process cannot be undone.
                </div>
                <div className="w-full flex gap-10 justify-center">
                    <Button color={'gray'} onClick={onClose}>
                        No
                    </Button>
                    <Button color={'warning'} onClick={handleDeleteJournal} >
                        Yes
                    </Button>
                </div>
            </div>
        </Popup>
    );
}

export default DeleteJournalModal;
