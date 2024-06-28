import { AxiosError } from 'axios';
import { createContext } from 'react';

export type User = {
    username: string,
}

export type LoginCredentials = {
    login: string,
    password: string,
}

export type RegisterCredentials = {
    login: string,
    email: string,
    password: string,
    name: string,
    surname: string,
    image: string,
    phone: string
}

export type AuthContextData = {
    user?: User,
    isAuthenticated: boolean,
    loadingUserData: boolean,
    LoginAccount: (account: LoginCredentials) => Promise<void | AxiosError>,
    RegisterAccount: (account: RegisterCredentials) => Promise<boolean | undefined>,
    signOut: () => void
}

export const AuthContext = createContext({} as AuthContextData);