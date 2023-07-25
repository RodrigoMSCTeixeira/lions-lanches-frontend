import { canSSRAuth } from "@/src/utils/canSSRAuth";
import Head from "next/head";
import { Header } from "@/src/components/Header";
import styles from "./styles.module.scss";
import { FiRefreshCcw } from "react-icons/fi";
import { setupApiClient } from "@/src/services/api";
import { useState } from "react";
import Modal from "react-modal";
import { ModalOrder } from "@/src/components/ModalOrder";

type OrderProps = {
  id: string;
  table: string | number;
  status: boolean;
  draft: boolean;
  name: string | null;
};

// export type OrderItemProps = {
//   id: string;
//   amount: number;
//   order_id: string;
//   product_id: string;
//   product: {
//     id: string;
//     name: string;
//     description: string;
//     price: string;
//     banner: string;
//   };
//   order: {
//     id: string;
//     table: string | number;
//     status: boolean;
//     name: string | null;
//   };
// };

export type OrderItemProps = {
  id: string;
  amount: number;
  customer_id: string;
  product_id: string;
  customer: {
    id: string;
    name: string;
    order_id: string;
  };
  product: {
    id: string;
    name: string;
    price: string;
    thumbnail: string;
  };
  order: {
    id: string;
    table: string | number;
    status: boolean;
    name: string | null;
  };
};

interface HomeProps {
  orders: OrderProps[];
}

export const getServerSideProps = canSSRAuth(async (context) => {
  const apiClient = setupApiClient(context);
  const response = await apiClient.get("/compositeOrders");

  return {
    props: {
      orders: response.data,
    },
  };
});

export default function dashboard({ orders }: HomeProps) {
  const [orderList, setOrderList] = useState(orders || []);
  const [modalItem, setModalItem] = useState<OrderItemProps[]>();
  const [modalVisible, setModalVisible] = useState(false);

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleOpenModalView = async (id: string) => {
    const apiClient = setupApiClient();

    const response = await apiClient.get("compositeOrders/detail", {
      params: {
        order_id: id,
      },
    });

    setModalItem(response.data);
    setModalVisible(true);
  };

  Modal.setAppElement("#__next");
  return (
    <>
      <Head>
        <title>Painel - Sujeito Pizzaria</title>
      </Head>
      <div>
        <Header />
        <main className={styles.container}>
          <div className={styles.containerHeader}>
            <h1>Últimos Pedidos</h1>
            <button>
              <FiRefreshCcw size={25} color="#3fffa3" />
            </button>
          </div>

          <article className={styles.listOrders}>
            {orderList.map((item) => (
              <section key={item.id} className={styles.orderItem}>
                <button onClick={() => handleOpenModalView(item.id)}>
                  <div className={styles.tag}></div>
                  <span>Mesa {item.table}</span>
                </button>
              </section>
            ))}
          </article>
        </main>

        {modalVisible && (
          <ModalOrder
            isOpen={modalVisible}
            onRequestClose={handleCloseModal}
            order={modalItem}
          />
        )}
      </div>
    </>
  );
}
