import { api } from "../axios.config";
import { USERS_PREFIX } from "../const";
import { LoginFormType, LoginResponse } from "@/_types";

export const requestLogin = async (user: LoginFormType) => {
  const response = await api.post<LoginResponse>(`${USERS_PREFIX}/login`, user);
  return response.data;
};
