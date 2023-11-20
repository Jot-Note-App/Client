
import { decodeToken, isExpired } from "react-jwt";

interface CredentialPayload {
    iss: string,
    azp: string,
    aud: string,
    sub: string,
    email: string,
    email_verified: boolean,
    nbf: number,
    name: string,
    picture: string,
    given_name: string,
    family_name: string,
    locale: string,
    iat: number,
    exp: number,
    jti: string
}

export const validateCredentials = (credentials: string): boolean => {
    const validIssuers = new Set<string>(['accounts.google.com', 'https://accounts.google.com']);
    var decodedToken: CredentialPayload = decodeToken(credentials) as CredentialPayload;
    var expired = isExpired(credentials);
    return !expired && validIssuers.has(decodedToken.iss) && decodedToken.aud == import.meta.env.VITE_CLIENT_ID;
};