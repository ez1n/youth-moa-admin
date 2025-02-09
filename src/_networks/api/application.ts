import { api } from '../axios.config'
import { USERS_PREFIX } from '../const'
import { CallGetAllApplicationsResponse } from '@/_types/application.type'

export const callGetAllApplications = async (userId: number) => {
  const response = await api.get<CallGetAllApplicationsResponse>(
    `${USERS_PREFIX}`
  )
  return response.data
}
