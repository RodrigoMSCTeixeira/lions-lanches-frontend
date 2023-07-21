import { testSetupApiClient } from "./testapi";

interface ItemProps {
  route: string;
  per_page: number;
}

class ListBannersService {
  execute = async ({ route, per_page }: ItemProps) => {
    try {
      const apiClient = testSetupApiClient(context);
      const response = await testSetupApiClient.get(route, {
        params: {
          _fields: "id,title,ACF",
          per_page: per_page,
        },
      });
      return response.data;
    } catch {
      console.log("error");
    }
  };
}

export { ListBannersService };
