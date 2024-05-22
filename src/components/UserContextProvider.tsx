import React from 'react';

interface UserContext {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    picture?: string;
}

interface UserContextProviderProps {
    children: React.ReactNode;
    user: UserContext;
}

const UserContext = React.createContext<UserContext>({
    id: "",
    firstName: " ",
    lastName: " ",
    email: "",
    picture: undefined
});

const UserContextProvider: React.FC<UserContextProviderProps> = ({ children, user }) => {
    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    );
}

export { UserContext, UserContextProvider };
