import { useAppDispatch } from "../hooks/hooks";
import { clearMemos } from "../store/modules/memo";

const authHelper = {
  getAccessToken: () => {
    return localStorage.getItem("accessToken");
  },
  saveAccessToken: (token: string) => {
    localStorage.setItem("accessToken", token);
  },
  getRefreshToken: () => {
    return localStorage.getItem("refreshToken");
  },
  saveRefreshToken: (token: string) => {
    localStorage.setItem("refreshToken", token);
  },
  logout: (dispatch: ReturnType<typeof useAppDispatch> ) => {
    localStorage.removeItem("accessToken")
    localStorage.removeItem("refreshToken")
    dispatch(clearMemos())
  }
};

export default authHelper;
