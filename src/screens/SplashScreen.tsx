import { GoogleLogin, GoogleOAuthProvider, } from '@react-oauth/google';
import React from 'react';
import { useMutation } from 'react-relay';
import { graphql, PayloadError } from 'relay-runtime';
import { SplashScreenLoginMutation$data } from '../__generated__/SplashScreenLoginMutation.graphql';
import SplashScreenBackground from '../components/SplashScreenBackground';
import DemoAppIcon from '../icons/DemoAppIcon';
import { validateCredentials } from '../utils/authentication';

const splashScreenLoginMutation = graphql`
mutation SplashScreenLoginMutation($credentials: String!) {
  loginOrSignUpWithGoogle(credentials: $credentials) {
    ... on LoginSuccess {
        success
    }
    ... on LoginFailure {
        error
    }
  }
}
`

interface SplashScreenProps {
    onLoginCallback?: () => void
};

const SplashScreen: React.FC<SplashScreenProps> = ({ onLoginCallback }) => {
    const [login, _isLoggingIn] = useMutation(splashScreenLoginMutation);
    const clientId = import.meta.env.VITE_CLIENT_ID;
    const onLoginComplete = (response: {}, _errors: PayloadError[] | null) => {
        const res = response as SplashScreenLoginMutation$data;
        if (res.loginOrSignUpWithGoogle.success && onLoginCallback != undefined) {
            onLoginCallback()
        }
    };
    return (
        <GoogleOAuthProvider clientId={clientId}>
            <SplashScreenBackground />
            <div className="flex min-h-screen">
                <div className="ml-48 grid place-content-center justify-items-center">
                    <div className="flex items-end mb-4 gap-1">
                        <div className="text-offBlack text-center text-8xl font-bold">Jot</div>
                    </div>
                    <p className="text-offBlack text-xl font-light mb-7">
                        Notes without the noise. Lightweight note-taking
                    </p>
                    <GoogleLogin
                        onSuccess={credentialResponse => {
                            console.log(credentialResponse)
                            if (validateCredentials(credentialResponse.credential ?? '')) {
                                login({
                                    variables: {
                                        credentials: credentialResponse.credential
                                    },
                                    onCompleted: onLoginComplete,
                                })
                            }
                        }}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                        ux_mode='popup'
                    />
                    <div className="overflow-hidden rounded-lg shadow-lg border border-lightGray mt-2">
                        <DemoAppIcon />
                    </div>

                </div>
            </div>
        </GoogleOAuthProvider >
    );
};

export default SplashScreen;