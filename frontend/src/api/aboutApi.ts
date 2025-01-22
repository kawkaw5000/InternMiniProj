import axios from 'axios';

const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  export const aboutApi = {
    getUserAbout: async () => {
      const response = await apiClient.get('/LexerAmorcillo/GetAbout');
      return response.data;
    },

    updateAbout: async (formData: FormData, token: string) => {
      const response = await apiClient.put('/LexerAmorcillo/UpdateAbout', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    },
};