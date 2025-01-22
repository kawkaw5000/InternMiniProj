import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;   

export const loginApi = async (username: string, password: string) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/Account/Login`, {
        Username: username,
        Password: password,
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw error.response?.data || { message: 'An error occurred during login.' };
      } else {
        throw { message: 'An unexpected error occurred.' };
      }
    }
  };
  
