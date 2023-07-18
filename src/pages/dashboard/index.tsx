import { canSSRAuth } from "@/src/utils/canSSRAuth";
import Head from "next/head";
import { Header } from "@/src/components/Header";

export const getServerSideProps = canSSRAuth(async(context) => {
  return {
    props: {}
  }
})

export default function dashboard() {
  return (
    <>
      <Head>
        <title>Painel - Sujeito Pizzaria</title>
      </Head>
      <div>
        <Header />
        <h1>Painel</h1>
      </div>
    </>
  );
}
