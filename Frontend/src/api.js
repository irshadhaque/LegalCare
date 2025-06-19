import axios from 'axios';

const api = axios.create({
  baseURL: 'https://legalcare.onrender.com',
  withCredentials: true, 
});

export default api;
