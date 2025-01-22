import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const homeApi = {
  getUserHome: async () => {
    const response = await apiClient.get('/LexerAmorcillo/GetHome');
    return response.data;
  },

  createHome: async (formData: FormData, token: string) => {
    const response = await apiClient.post('/LexerAmorcillo/CreateHome', formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  updateHome: async (formData: FormData, token: string) => {
    const response = await apiClient.put('/LexerAmorcillo/UpdateHome', formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },
};
