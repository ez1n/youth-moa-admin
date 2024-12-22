export interface LoginFormType {
  email: string;
  password: string;
}

export interface LoginResponse {
  userInfo: {
    id: number;
    name: string;
    phone: string;
    address: string;
    gender: string;
    birthday: string;
    lastLoginedAt: string;
    createdAt: string;
  };
  tokenInfo: {
    accessToken: string;
    expiredAt: string;
    validHours: number;
  };
}
