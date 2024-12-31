import { UserInfo } from "./UserInfo";

export interface LoginResponse {
  userWithoutPassword: UserInfo;
  accessToken: string;
  refreshToken: string;
}
