import { FormEvent, useState } from "react";
import Head from "next/head";
import { Header } from "@/src/components/Header";
import styles from "./styles.module.scss";
import { setupApiClient } from "@/src/services/api";
import { toast } from "react-toastify";
import { canSSRAuth } from "@/src/utils/canSSRAuth";

export const getServerSideProps = canSSRAuth(async (context) => {
  return {
    props: {},
  };
});

export default function Category() {
  const [name, setName] = useState("");

  const handleRegister = async (event: FormEvent) => {
    event.preventDefault();

    if (name === "") {
      return;
    }

    const apiClient = setupApiClient();
    await apiClient.post("/category", {
      name: name,
    });

    toast.success("Categoria cadastrada com sucesso!");

    setName("");
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
