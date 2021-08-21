import axios from "axios";
import authHeader from "./authHeader";

const API_URL = "http://localhost:5000/api/";

const getAdminBoard = () => {
    return axios.get(API_URL + "admin", { headers: authHeader() });
  };


  export default {
    getAdminBoard,
  };