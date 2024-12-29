const authHelper = {
  getAccessToken: () => {
    localStorage.getItem("accessToken");
  },
  saveAccessToken: (token: string) => {
    localStorage.setItem("accessToken", token);
  },
  getRefreshToken: () => {
    localStorage.getItem("refreshToken");
  },
  saveRefreshToken: (token: string) => {
    localStorage.setItem("refreshToken", token);
  },
};

export default authHelper