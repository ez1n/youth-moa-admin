export enum Gender {
  남 = '남',
  여 = '여',
}

export enum UserRole {
  USER = 'USER',
  ADMIN = 'ADMIN',
}

export interface UserResponse {
  id: number
  email: string
  role: UserRole
  name: string
  phone: string // 9자리 숫자 포맷. 하이픈 가공 필요
  address: string
  addressDetail: string
  birthday: string // yyyy-mm-dd
  gender: Gender
  createdAt: string
  lastLoginedAt: string
}

export interface CallGetAllUsersParams {
  searchKeyword?: string | null
  roles?: UserRole | null
  gender?: Gender | null
  page: number
  size: number
}

export interface CallPutUpdateUserInfoRequestBody {
  newPassword: string
  newName: string
  newPhone: string // 9자리 숫자 포맷. (하이픈 제외)
  newAddress: string
  newAddressDetail: string
  newGender: Gender
  newBirthday: string // yyyy-mm-dd
}
