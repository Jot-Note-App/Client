import React from 'react';
import { useMutation } from 'react-relay';
import Popup from 'reactjs-popup';
import { graphql } from 'relay-runtime';
import Button from '../../reusable/Button';

const deleteEntryModalDeleteEntryMutation = graphql`
mutation DeleteEntryModalDeleteEntryMutation($entryId: ID!, $connections: [ID!]!){
  deleteEntry(id: $entryId){
    __typename
    ... on DeleteEntryMutationSuccess {
        entry{
            id @deleteEdge(connections: $connections)
        }
    }
    ... on MutationFailure {
        error
    }
  }
}
`

interface DeleteEntryModalProps {
    entryId: string,
    isOpen: boolean,
    onSuccessfulDelete: () => void,
    onClose: () => void,
    connectionId: string
}
const DeleteEntryModal: React.FC<DeleteEntryModalProps> = ({ entryId, isOpen, onSuccessfulDelete, onClose, connectionId }) => {
    const [deleteEntry] = useMutation(deleteEntryModalDeleteEntryMutation);
    const handleDeleteEntry = () => {
        deleteEntry({
            variables: {
                entryId: entryId,
                connections: [connectionId]
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
                <div className="text-h5 mb-4">Delete Note?</div>
                <div className="text-body text-darkGray w-50 mb-4 text-center">
                    Are you sure you want to delete this note? This process cannot be undone.
                </div>
                <div className="w-full flex gap-10 justify-center">
                    <Button color={'gray'} onClick={onClose}>
                        No
                    </Button>
                    <Button color={'warning'} onClick={handleDeleteEntry} >
                        Yes
                    </Button>
                </div>
            </div>
        </Popup>
    );
}

export default DeleteEntryModal;
