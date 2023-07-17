import {createContext, ReactNode, useState} from 'react'
import { destroyCookie } from 'nookies'
import Router from 'next/router'

type AuthContextData = {
    user: UserProps | undefined;
    isAuthenticated: boolean;
    singIn: (credentials: SignInProps) => Promise<void>
    signOut: () => void
}

type UserProps = {
    id: string;
    name: string;
    email: string;
}

type SignInProps = {
    email: string;
    password: string;
}

type AuthProviderProps = {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

export const signOut = () => {
    try {
        destroyCookie(undefined, '@nextauth.token')
        Router.push('/')
    } catch {
        console.error('Erro ao deslogar!')
    }
}


export const AuthProvider = ({ children }: AuthProviderProps) => {

    const [user, setUser] = useState<UserProps>()
    const isAuthenticated = !!user // converte em boolean

    const singIn = async ({ email, password }: SignInProps) => {
        console.log(email, password)
    }

    return (
        <AuthContext.Provider value={{user, isAuthenticated, singIn, signOut}}>
            { children }
        </AuthContext.Provider>
    )
}