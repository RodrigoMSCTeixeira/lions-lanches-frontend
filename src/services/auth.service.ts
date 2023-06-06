import api from "@/plugins/api";

interface AuthUser {
  email: string;
  password: string;
}

interface User extends AuthUser {
  nickName: string;
}

class AuthService {
  login = (user: AuthUser) => {
    const payload = {
      email: user.email,
      password: user.password,
    };
    return api.post("session", payload).then(({ data }) => {
      if (data.token) {
        localStorage.setItem("user", JSON.stringify(data));
      }
    });
  };

  logout = () => {
    localStorage.removeItem("user");
  };

  register = (user: User) => {
    const payload = {
      nickName: user.nickName,
      email: user.email,
      password: user.password,
    };
    return api.post("users", {
      data: payload,
    });
  };
}

export default new AuthService();
