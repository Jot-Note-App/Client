import React from 'react';

interface ProfileAvatarProps {
    firstName: string,
    lastName: string,
}

const ProfileAvatar: React.FC<ProfileAvatarProps> = ({ firstName, lastName }) => {
    const initials = (firstName[0] + lastName[0]).toUpperCase()
    return (
        <div className="w-10 h-10 bg-secondary text-offBlack rounded-full flex items-center justify-center select-none">
            <div className="">{initials}</div>
        </div>
    );
};

export default ProfileAvatar;