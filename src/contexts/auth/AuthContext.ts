import { AxiosError } from 'axios';
import { createContext } from 'react';

export type User = {
    username: string,
}

export type LoginAccount = {
    login: string,
    password: string,
}

export type RegisterAccount = {
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
    signIn: (account: LoginAccount) => Promise<void | AxiosError>,
    registerNewAccount: (account: RegisterAccount) => Promise<boolean | undefined>,
    signOut: () => void
}

export const AuthContext = createContext({} as AuthContextData);