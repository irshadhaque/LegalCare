import api from './api';

export const fetchProfile = async () => {
  try {
    const res = await fetch('https://legalcare.onrender.com/auth/profile', {
      method: 'GET',
      credentials: 'include', // ✅ this is critical
       headers: {
      'Content-Type': 'application/json',
    },
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
    await fetch('https://legalcare.onrender.com/logout', {
      method: 'GET',
      credentials: 'include', // ✅ to send cookie with logout
    });
  } catch (err) {
    console.error('Logout failed', err);
  }
};

