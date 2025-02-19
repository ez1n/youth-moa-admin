import { api } from '../axios.config';
import { APPLICATIONS_PREFIX } from '../const';
import {
  ApplicationResponse,
  ApplicationStatus,
  CallGetAllApplicationsResponse,
} from '@/_types/application.type';

export const callGetAllApplications = async (
  userId: number,
  applicationStatus: ApplicationStatus | null
) => {
  const response = await api.get<CallGetAllApplicationsResponse>(
    `${APPLICATIONS_PREFIX}/by-user-id`,
    {
      params: { userId, applicationStatus },
    }
  );
  return response.data;
};

export const callGetApplication = async (applicationId: number) => {
  const response = await api.get<ApplicationResponse>(
    `${APPLICATIONS_PREFIX}/${applicationId}`
  );
  return response.data;
};
