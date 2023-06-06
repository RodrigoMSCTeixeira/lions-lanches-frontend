import api from "@/plugins/api";
import authHeader from "./auth-header";

class UserService {
  getPublicContent = () => {
    //
  };

  getUserBoard = () => {
    return api.get("me", { headers: authHeader() });
  };

  getModeratorBoard = () => {
    //
  };

  getAdminBoard = () => {
    //
  };
}

export default new UserService();
