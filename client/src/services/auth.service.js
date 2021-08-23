import axios from "axios";

const API_URL = "http://localhost:5000/api/";

const register = (username, email, password) => {
  console.log(API_URL+"signUp")
  return axios.post(API_URL + "signUp", {
    username,
    email,
    password,
  })
  .then(function (response) {
    
    console.log(response);
  })
};

const login = (email, password) => {
  return axios
    .post(API_URL + "signin", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};
