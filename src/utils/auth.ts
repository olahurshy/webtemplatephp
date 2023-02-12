import axios from "axios";
import { getCookie } from "./cookieStorage";

// export const baseURL = 'http://localhost:3003';

export const baseURL =
  "https://6iekt9k3pb.execute-api.us-east-1.amazonaws.com/prod" ||
  "http://localhost:3000";

export const LoginUser = async (email: string, password: string) => {
  const response = await axios.post(`${baseURL}/login`, { email, password });

  return response;
};

export const RegisterUser = async (
  email: string,
  name: string,
  password: string
) => {
  const response = await axios.post(`${baseURL}/register`, {
    email,
    password,
    name
  });

  return response;
};

export const isAdmin = () => {
  if (typeof window !== "undefined") {
    return getCookie("email") == "vkingmaker@yahoo.com";
  }
};

export const isLoggedIn = () => {
  if (typeof window !== "undefined") {
    return getCookie("email");
  }
};
