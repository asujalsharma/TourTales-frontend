import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { getUser } from "../utils/auth";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      const user = await getUser();
      if (user) navigate("/home");
    };
    checkUser();
  }, [navigate]);

  const handleLogout = () => {
    logout();
    navigate("/signin");
  };

  return (
    <nav className="bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-extrabold text-white">
            TourTales 🌍
          </Link>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex space-x-4">
            {user ? (
              <>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold"
                >
                  Logout
                </button>
                <Link
                  to="/profile"
                  className="bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100"
                >
                  {user.name || "Profile"}
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/signin"
                  className="bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-green-600 px-4 pb-4 space-y-2">
          <Link to="/" className="block text-white hover:text-gray-200">
            Home
          </Link>
          <Link to="/about" className="block text-white hover:text-gray-200">
            About
          </Link>
          <Link to="/contact" className="block text-white hover:text-gray-200">
            Contact
          </Link>

          {user ? (
            <>
              <button
                onClick={handleLogout}
                className="w-full text-left bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold"
              >
                Logout
              </button>
              <Link
                to="/profile"
                className="block bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100"
              >
                {user.name || "Profile"}
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/signin"
                className="block bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="block bg-green-700 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-800"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
