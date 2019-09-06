import { axios } from "taro-axios";
import { baseURL, tokenName } from "./utils/consts";

const client = axios.create({
  baseURL
});

client.interceptors.request.use(config => {
  let token;
  token = localStorage.getItem(tokenName);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
client.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem(tokenName);
      return;
    }
    throw error;
  }
);

// 登录
export const login = params => client.post("login", params);
