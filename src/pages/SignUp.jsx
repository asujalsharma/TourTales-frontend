import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser, loginUser, getUser } from "../utils/auth";
import signUpImg from "../assets/SignUp.jpg";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // If already signed in, redirect to home
  useEffect(() => {
    const checkUser = async () => {
      const user = await getUser();
      if (user) navigate("/home");
    };
    checkUser();
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = { name, email, password };

    try {
      await registerUser(newUser);
      await loginUser({ email, password });
      navigate("/home");
    } catch (err) {
      console.error("Error signing up:", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 p-6">
      <div className="flex w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Left side with image */}
        <div className="hidden md:flex w-1/2 bg-gray-100 items-center justify-center p-2">
          <img
            src={signUpImg}
            alt="Sign Up"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Right side with form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Create Account ✨
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
            />
            <button
              type="submit"
              className="w-full py-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600"
            >
              Sign Up
            </button>
          </form>
          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/signin" className="text-green-600 hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
