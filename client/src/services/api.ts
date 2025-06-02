import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const getFamilyTree = (familyId: string) => 
  api.get(`/api/families/${familyId}/tree`);

export const uploadMedia = (formData: FormData) =>
  api.post('/api/media/upload', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
