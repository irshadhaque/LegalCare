import { useEffect, useState } from 'react';
import { fetchProfile, logout } from '../auth';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProfile().then(setUser);
  }, []);

  const handleLogout = async () => {
    await logout();
    setUser(null);
    navigate('/');
  };

  return (
    <nav className="p-2 flex justify-between items-center bg-gray-900 text-white shadow-md">
      <div>
        <img src={logo} alt="Logo" className="h-20 w-50" />
      </div>

      {user ? (
        <div className="relative group">
          <img
            src={user.photos?.[0]?.value}
            alt="Profile"
            className="w-10 h-10 rounded-full cursor-pointer border-2 border-white"
          />
          <div className="absolute right-0 mt-2 p-2 bg-gray-800 border border-gray-700 rounded shadow hidden group-hover:block z-10">
            <button
              onClick={handleLogout}
              className="text-sm text-red-400 hover:text-red-300"
            >
              Logout
            </button>
          </div>
        </div>
      ) : (
        <a
          href={`${import.meta.env.VITE_BACKEND_URL}/api/auth/google`}
          className="bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded text-white"
        >
        Sign In
        </a>
      )}
    </nav>
  );
}
