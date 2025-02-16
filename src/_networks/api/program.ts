import { api } from '../axios.config';

import { CallGetAllProgramsByUserIdResponse } from '@/_types';
import { PROGRAMS_PREFIX } from '../const';

export const callGetAllProgramsByUserId = async (userId: number) => {
  console.log('callGetAllProgramsByUserId 호출 됨');
  const response = await api.get<CallGetAllProgramsByUserIdResponse>(
    `${PROGRAMS_PREFIX}/by-user-id`,
    {
      params: { userId },
    }
  );
  return response.data;
};
