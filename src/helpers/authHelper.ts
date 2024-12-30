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
};

export default authHelper;
