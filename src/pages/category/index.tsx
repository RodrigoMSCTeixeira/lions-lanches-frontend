import { FormEvent, useState } from "react";
import Head from "next/head";
import { Header } from "@/src/components/Header";
import styles from "./styles.module.scss";

export default function Category() {
  const [name, setName] = useState("");

  const handleRegister = async (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <>
      <Head>
        <title>Nova Categoria</title>
      </Head>
      <div>
        <Header />
        <main className={styles.container}>
          <h1>Cadastrar Categoria</h1>
          <form className={styles.form} onSubmit={handleRegister}>
            <input
              type="text"
              placeholder="Digite o nome da categoria"
              className={styles.input}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button className={styles.buttonAdd} type="submit">
              Cadastrar
            </button>
          </form>
        </main>
      </div>
    </>
  );
}
