import authApi from "../api/features/authApi";

const authService = {
  login: async (data: { email: string; password: string }) => {
    try {
      const response = await authApi.login(data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default authService;