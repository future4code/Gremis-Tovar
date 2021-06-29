import axios from "axios";
import { BASE_URL } from "../constants/url";
import { goToAdminHomePage, goToLoginPage } from "../routes/coordinator";

export const login = (body, history) => {
  axios
    .post(`${BASE_URL}/login`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      goToAdminHomePage(history);
    })
    .catch((err) => alert(err.response.data.message));
};

export const logout = (history) => {
  localStorage.removeItem("token");
  goToLoginPage(history);
};
