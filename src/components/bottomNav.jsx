import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

export default function BottomNav() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-0 left-0 w-full mx-auto flex justify-around items-center h-16 mb-4 shadow-xl rounded-full">
        {/* Links */}
        <Link
          to="/"
          className="text-gray-700 hover:text-green-600 font-semibold"
        >
          Home
        </Link>
        {user && (
          <button
            onClick={() => navigate("/add-post")}
            className="bg-green-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-green-600"
          >
            + Add Post
          </button>
        )}
        <Link
          to="/about"
          className="text-gray-700 hover:text-green-600 font-semibold"
        >
          About
        </Link>
        
      </div>
  );
}
