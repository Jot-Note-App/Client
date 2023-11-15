import React from 'react';
import { googleLogout } from '@react-oauth/google';

const GoogleLogout: React.FC = () => {
    return (
        <div onClick={() => {
            console.log("logging out");
            googleLogout();
        }} className="text-sm p-2 border border-slate-300 cursor-pointer rounded text-center align-middle w-">
            Sign out
        </div >
    );
};

export default GoogleLogout;