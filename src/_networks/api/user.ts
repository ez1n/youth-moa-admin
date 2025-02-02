import { api } from '../axios.config'
import { USERS_PREFIX } from '../const'
import { GetAllUsersRequest as CallGetAllUsersParams, UserResponse } from '@/_types/user.type'
import { PageResponse } from '@/_types/pagination.type'

export const callGetAllUsers = async (params: CallGetAllUsersParams) => {
  const { searchKeyword = null, page = 0, size = 10 } = params
  const response = await api.get<PageResponse<UserResponse>>(
    `${USERS_PREFIX}`,
    {
      params: { searchKeyword, page, size },
    }
  )
  return response.data
}
