import { useGoogleLogin } from '@react-oauth/google';
import React, { ReactNode } from 'react';
import { useMutation } from 'react-relay';
import { graphql, PayloadError } from 'relay-runtime';
import { CustomGoogleLoginMutation$data } from '../__generated__/CustomGoogleLoginMutation.graphql';
const customGoogleLoginMutation = graphql`
mutation CustomGoogleLoginMutation($credentials: String!) {
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
interface GoogleLogoutProps {
    onLoginCallback?: () => void;
    children?: ReactNode;
}

// Wrap this around buttons to give login functionality
const CustomGoogleLogin: React.FC<GoogleLogoutProps> = ({ onLoginCallback, children }) => {
    const [login, _isLoggingIn] = useMutation(customGoogleLoginMutation);
    const onLoginComplete = (response: {}, _errors: PayloadError[] | null) => {
        const res = response as CustomGoogleLoginMutation$data;
        if (res.loginOrSignUpWithGoogle.success && onLoginCallback != undefined) {
            onLoginCallback()
        }
    };
    const googleLogin = useGoogleLogin({
        flow: 'auth-code',
        onSuccess: (response) => {
            login({
                variables: {
                    credentials: response.code
                },
                onCompleted: onLoginComplete,
            })
        },
        onError: () => {
            console.log('Login Failed');
        }
    });
    return (
        <div onClick={() => {
            googleLogin()
        }} >
            {children}
        </div >
    );
};

export default CustomGoogleLogin;