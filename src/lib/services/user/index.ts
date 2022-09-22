import { client } from "../apiClient";
import Storage from "../../utilities/storage";

export default class User {
  login(email: string, password: string) {
    return client({
      url: "/auth/login/",
      method: "POST",
      data: {
        email,
        password,
      },
    });
  }

  forgotPassword(email: string) {
    return client({
      url: "/auth/forgot-password/",
      method: "POST",
      data: {
        email,
      },
    });
  }

  resetPassword(token: string, password: string) {
    return client({
      url: "/auth/reset-password/",
      method: "POST",
      data: {
        token,
        password,
      },
    });
  }

  getProfile() {
    return client({
      url: "/auth/user/",
      method: "GET",
      headers: {
        Authorization: `Bearer ${new Storage().get("token")}`,
      },
    });
  }
}
