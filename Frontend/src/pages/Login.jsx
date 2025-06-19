import React from 'react';

const Login = () => {
  const handleGoogleLogin = () => {
    window.location.href = `${import.meta.env.VITE_BACKEND_URL}/auth/google`;
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h2>Login Page</h2>
      <button onClick={handleGoogleLogin} style={{
        padding: '10px 20px',
        backgroundColor: '#4285F4',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}>
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;
