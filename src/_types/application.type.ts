import { UserResponse } from './user.type'

export interface CallGetAllApplicationsResponse {
  applications: ApplicationResponse[]
}

export interface ApplicationResponse {
  applierInfo: UserResponse
  status: string
  appliedAt: string
  approvedAt: string | null
  canceledAt: string | null
  cancelReason: string | null
  adminComment: string | null
}
