import api from './api';

export const fetchProfile = async () => {
  try {
    const res = await api.get('/profile');
    return res.data;
  } catch {
    return null;
  }
};

export const logout = async () => {
  await api.get('/logout');
};
