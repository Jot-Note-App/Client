import { GoogleOAuthProvider } from '@react-oauth/google';
import React from 'react';
import { useMutation } from 'react-relay';
import { graphql, PayloadError } from 'relay-runtime';
import { SplashScreenLoginMutation$data } from '../__generated__/SplashScreenLoginMutation.graphql';
import Button from '../components/reusable/Button';
import SplashScreenBackground from '../components/SplashScreenBackground';
import DemoAppIcon from '../icons/DemoAppIcon';
import PenIcon from '../icons/PenIcon';

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
            <div className="max-h-screen">

                <div className="flex place-content-between text-offBlack pl-10 pr-16 mt-5 items-center">
                    <div className="flex">
                        <div className="relative -bottom-1 -right-3">
                            <PenIcon height={48} width={48} />
                        </div>
                        <div className="text-center text-5xl font-bold">Jot</div>
                    </div>
                    <Button color={'transparent'} onClick={() => { }} >
                        <div className="text-offBlack text-large font-semibold px-2 py-1">
                            Login
                        </div>
                    </Button>
                </div>
                <div className='flex flex-col items-center gap-7 mt-20'>
                    <p className="text-offBlack text-4xl font-semibold">
                        Notes without the noise <br /> Lightweight note-taking
                    </p>

                    <Button color={'purple'} onClick={() => { }} >
                        <div className="px-2 py-1">
                            Try for free
                        </div>
                    </Button>

                    <div className=" overflow-hidden rounded-lg shadow-lg">
                        <DemoAppIcon />
                    </div>
                </div>
                {/* <GoogleLogin
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
                /> */}



            </div>
        </GoogleOAuthProvider >
    );
};

export default SplashScreen;