import api from './api';

export const fetchProfile = async () => {
  try {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/auth/profile`, {
      method: 'GET',
      credentials: 'include', // ✅ this is critical
    });

    if (!res.ok) return null;

    const data = await res.json();
    console.log('Profile data:', data);
    return data;
  } catch (err) {
    console.error("fetchProfile error", err);
    return null;
  }
};


export const logout = async () => {
  try {
    await fetch(`${import.meta.env.VITE_BACKEND_URL}/logout`, {
      method: 'GET',
      credentials: 'include', // ✅ to send cookie with logout
    });
  } catch (err) {
    console.error('Logout failed', err);
  }
};

