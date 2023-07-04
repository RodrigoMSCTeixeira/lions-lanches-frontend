import api from "@/plugins/api";
import { AxiosError } from "axios";

class ListOrders {
  execute = async () => {
    const response = [];
    const statusCode = 0;
    const user = localStorage.getItem("user") as string;
    const { token } = JSON.parse(user);

    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },

      params: {
        order_id: "b9d0e083-e188-4ee6-bae0-70d0c18aa779",
      },
    };

    await api
      .get("compositeOrders", { headers: options.headers })
      .then(({ data, status }) => {
        console.log(data);
      })
      .catch(({ response }: AxiosError) => {
        console.log(response?.status);
      });

    await api
      .get("compositeOrders/detail", {
        headers: {
          Authorization: options.headers.Authorization,
        },

        params: {
          order_id: options.params.order_id,
        },
      })
      .then(({ data, status }) => {
        console.log(data);
      })
      .catch(({ response }: AxiosError) => {
        console.log(response?.status);
      });
  };
}

export default new ListOrders();
