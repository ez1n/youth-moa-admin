import { ProgramInfoResponse } from './program.type';
import { UserResponse } from './user.type';

export enum ApplicationStatus {
  대기 = '대기',
  승인 = '승인',
  반려 = '반려',
  취소 = '취소',
}

export interface CallGetAllApplicationsResponse {
  applications: ApplicationResponse[];
}

export interface ApplicationResponse {
  applicationId: number;
  applierInfo: UserResponse;
  programInfo: ProgramInfoResponse;
  status: ApplicationStatus;
  answers: QuestionAnswerResponse[];
  attachmentFileIds: number[];
  appliedAt: string;
  approvedAt: string | null; // date
  rejectedAt: string | null; // date
  canceledAt: string | null; // date
  cancelReason: string | null;
  adminComment: string | null;
}

export interface QuestionAnswerResponse {
  question: ProgramQuestionResponse;
  answer: string;
}

export interface ProgramQuestionResponse {
  questionId: number;
  question: string;
}
