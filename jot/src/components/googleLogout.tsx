import React from 'react';
import { googleLogout } from '@react-oauth/google';

interface GoogleLogoutProps {
    onLogoutCallback?: () => void;
}

const GoogleLogout: React.FC<GoogleLogoutProps> = ({ onLogoutCallback }) => {
    return (
        <div onClick={() => {
            console.log("logging out");
            googleLogout();
            //TODO: Call mutation to logout user and put this into the onSuccess callback of mutation
            if (onLogoutCallback != undefined) {
                onLogoutCallback()
            }
        }} className="text-sm p-2 border border-slate-300 cursor-pointer rounded text-center align-middle w-">
            Sign out
        </div >
    );
};

export default GoogleLogout;