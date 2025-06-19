import { useEffect, useState, useRef } from 'react';
import { fetchProfile, logout } from '../auth';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dropdownRef = useRef(null);

  useEffect(() => {
    fetchProfile().then(setUser);
  }, [location.pathname]);

  // 👇 Close dropdown if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
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
        <div className="relative" ref={dropdownRef}>
          <img
            src={user?._json?.picture}
            alt="Profile"
            className="w-10 h-10 rounded-full border-2 border-white cursor-pointer"
            onClick={() => setDropdownOpen((prev) => !prev)}
          />
          

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-56 p-4 bg-gray-800 border border-gray-700 rounded shadow-lg z-50">
              <p className="text-sm text-white mb-2">
                Welcome, <span className="font-semibold text-indigo-400">{user.displayName}</span>
              </p>
              <hr className="border-gray-600 my-2" />
              <button
                onClick={handleLogout}
                className="text-sm text-red-400 hover:text-red-300"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      ) : (
        <a
          href={`${import.meta.env.VITE_BACKEND_URL}/auth/google`}
          className="bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded text-white"
        >
          Sign In
        </a>
      )}
    </nav>
  );
}
