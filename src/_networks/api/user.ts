import { api } from '../axios.config';
import { USERS_PREFIX } from '../const';
import {
  CallGetAllUsersParams,
  CallPutUpdateUserInfoRequestBody as CallPutUserInfoRequestBody,
  UserResponse,
} from '@/_types/user.type';
import { PageResponse } from '@/_types/pagination.type';
import { downloadByBrowser } from '../util';

export const callGetAllUsers = async (params: CallGetAllUsersParams) => {
  const { searchKeyword = null, page = 0, size = 10, gender, roles } = params;
  const response = await api.get<PageResponse<UserResponse>>(
    `${USERS_PREFIX}`,
    {
      params: { searchKeyword, page, size, gender, roles },
    }
  );
  return response.data;
};

export const callGetDownloadExcel = async () => {
  const response = await api.get(`${USERS_PREFIX}/download/excel`, {
    responseType: 'blob',
  });
  let filename = `${new Date().toLocaleDateString()} 사용자목록.xlsx`;
  downloadByBrowser(filename, response);
};

export const callGetUser = async (userId: number) => {
  const response = await api.get<UserResponse>(`${USERS_PREFIX}/${userId}`);
  return response.data;
};

export const callPutUserInfo = async (
  userId: number,
  requestBody: CallPutUserInfoRequestBody
) => {
  const response = await api.put(`${USERS_PREFIX}/${userId}`, requestBody);
  return;
};
