import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';

const GoogleLoginCustom: React.FC = () => {
    const login = useGoogleLogin({
        flow: "auth-code",
        onSuccess: tokenResponse => console.log(tokenResponse),
        onError: errorResponse => console.log(errorResponse),
        scope: "email",
    });

    return (
        <div onClick={() => {
            login()
        }} className="text-sm p-2 border border-slate-300 cursor-pointer rounded text-center align-middle w-">
            Login
        </div >
    );
};

export default GoogleLoginCustom;