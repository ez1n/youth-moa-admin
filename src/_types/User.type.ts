export enum Gender {
  남 = '남',
  여 = '여',
}

export enum UserStatus {
  활성화 = '활성화',
  비활성화 = '비활성화',
}

export interface User {
  id: number
  name: string
  email: string
  authority: string
  gender: Gender
  phone: string
  joinDate: Date
  lastLoginDate: Date
  status: UserStatus
}
