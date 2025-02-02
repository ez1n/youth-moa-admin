import { api } from "../axios.config";
import { USERS_PREFIX } from "../const";
import { LoginFormType as CallPostLoginRequestBody, LoginResponse } from "@/_types";

export const callPostLogin = async (user: CallPostLoginRequestBody) => {
  const response = await api.post<LoginResponse>(`${USERS_PREFIX}/login`, user);
  return response.data;
};
