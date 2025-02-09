import { ProgramInfoResponse } from './program.type'
import { UserResponse } from './user.type'

export enum ApplicationStatus {
  대기 = '대기',
  승인 = '승인',
  반려 = '반려',
  취소 = '취소',
}

export interface CallGetAllApplicationsResponse {
  applications: ApplicationResponse[]
}

export interface ApplicationResponse {
  applierInfo: UserResponse
  programInfo: ProgramInfoResponse
  status: ApplicationStatus
  appliedAt: string
  approvedAt: string | null
  canceledAt: string | null
  cancelReason: string | null
  adminComment: string | null
}
