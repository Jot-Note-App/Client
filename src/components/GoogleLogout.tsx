import React from 'react';
import { ReactNode } from 'react';
import { googleLogout } from '@react-oauth/google';
import { graphql, PayloadError } from 'relay-runtime';
import { useMutation } from 'react-relay';
import { GoogleLogoutLogoutMutation$data } from '../__generated__/GoogleLogoutLogoutMutation.graphql';
const googleLogoutLogoutMutation = graphql`
mutation GoogleLogoutLogoutMutation {
  logout {
    ... on LogoutSuccess {
        success
    }
    ... on LogoutFailure {
        error
    }
  }
}
`
interface GoogleLogoutProps {
    onLogoutCallback?: () => void;
    children?: ReactNode;
}

// Wrap this around buttons to give logout functionality
const GoogleLogout: React.FC<GoogleLogoutProps> = ({ onLogoutCallback, children }) => {
    const [logout, _isLoggingOut] = useMutation(googleLogoutLogoutMutation);
    const onLogoutComplete = (response: {}, _errors: PayloadError[] | null) => {
        const res = response as GoogleLogoutLogoutMutation$data;
        if (res.logout.success && onLogoutCallback != undefined) {
            onLogoutCallback()
        }
    };
    return (
        <div onClick={() => {
            googleLogout();
            logout({
                variables: {
                },
                onCompleted: onLogoutComplete,
            })
            if (onLogoutCallback != undefined) {
                onLogoutCallback()
            }
        }} >
            {children}
        </div >
    );
};

export default GoogleLogout;