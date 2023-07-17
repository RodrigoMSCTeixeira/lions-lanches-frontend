import { FormEvent, useContext, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from '../../styles/home.module.scss'
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";

import { AuthContext } from "../context/AuthContext";

import Link from "next/link";


export default function Home() {
    const { singIn } = useContext(AuthContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const handleLogin = async (event: FormEvent) => {
        event.preventDefault();

        let data = {
            email,
            password
        }

        await singIn(data)
    }

    return (
        <>
        <Head>
            <title>Lions Lanches - Faça seu login</title>
        </Head>
        <div className={styles.containerCenter}>
            <Image src={''} alt="Logo da Lanchonete"/>

            <div className={styles.login}>
                <form onSubmit={handleLogin}>
                    <Input 
                        placeholder="Digite seu email" 
                        type='text' 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    <Input 
                        placeholder="Digite sua senha" 
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    <Button 
                    type="submit" 
                    loading={false}>
                        Acessar
                    </Button>
                </form>
                <Link href="/signup" className={styles.text}>
                    Não possui uma conta? Cadastre-se
                </Link>
                
            </div>
        </div>
        </>
    )
}