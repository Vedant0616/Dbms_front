import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};

const login = (Manager_Email,password) => {
  return axios
    .post(API_URL + "login", {
      Manager_Email,
      password,
    })
    .then((response) => {
      console.log(response);
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};
const login2 = (username, password) => {
  localStorage.setItem("user", JSON.stringify({ username, password, role: "user", id: 1 }));
}


const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentManager = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentManager,
};

export default AuthService;
