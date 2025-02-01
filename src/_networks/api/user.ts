import { api } from '../axios.config'
import { USERS_PREFIX } from '../const'
import { GetAllUsersRequest, UserResponse } from '@/_types/user.type'
import { PageResponse } from '@/_types/pagination.type'

export const getAllUsers = async (request: GetAllUsersRequest) => {
  const { searchKeyword = null, page = 0, size = 10 } = request
  const response = await api.get<PageResponse<UserResponse>>(
    `${USERS_PREFIX}`,
    {
      params: { searchKeyword, page, size },
    }
  )
  return response.data
}
