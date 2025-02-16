import { api } from '../axios.config'
import { APPLICATIONS_PREFIX } from '../const'
import {
  ApplicationStatus,
  CallGetAllApplicationsResponse,
} from '@/_types/application.type'

export const callGetAllApplications = async (
  userId: number,
  applicationStatus: ApplicationStatus | null
) => {
  const response = await api.get<CallGetAllApplicationsResponse>(
    `${APPLICATIONS_PREFIX}/by-user-id`,
    {
      params: { userId, applicationStatus },
    }
  )
  return response.data
}
