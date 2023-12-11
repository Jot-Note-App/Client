import React from 'react';
import { graphql, PayloadError } from 'relay-runtime';
import { useMutation } from 'react-relay';
import { GoogleLogoutLogoutMutation$data } from '../__generated__/GoogleLogoutLogoutMutation.graphql'

interface ProfileAvatarProps {
    firstName: string,
    lastName: string,
}

const ProfileAvatar: React.FC<ProfileAvatarProps> = ({ firstName, lastName }) => {
    const initials = (firstName[0] + lastName[0]).toUpperCase()
    return (
        <div className="w-10 h-10 bg-secondary text-offBlack rounded-full flex items-center justify-center">
            <div className="">{initials}</div>
        </div>
    );
};

export default ProfileAvatar;