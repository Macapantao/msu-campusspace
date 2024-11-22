import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // Import Link
import facility from "../images/gym1.jpg"; // Same background image as SignUp

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (formData.email === "user@example.com" && formData.password === "password") {
      localStorage.setItem("token", "fake-jwt-token");
      navigate("/UserDashboard");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center relative bg-cover bg-center"
      style={{
        backgroundImage: `url(${facility})`,
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Login form */}
      <div className="relative bg-white shadow-lg rounded-lg p-8 w-full max-w-md border-t-4 border-maroon z-10">
        <h2 className="text-3xl font-bold text-center mb-6 text-maroon underline">
          Login to Your Account
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-black font-semibold mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-maroon"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-black font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-maroon"
              required
            />
          </div>
          <div className="mb-6 flex items-center">
            <input
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
              className="mr-2"
            />
            <label className="text-gray-700">Remember Me</label>
          </div>
          {error && <p className="text-red-600 text-sm mb-4">{error}</p>}
          <div className="mb-4 text-center">
            <a href="/forgot-password" className="text-maroon font-bold hover:underline">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-maroon text-white py-2 rounded-lg font-bold text-lg"
          >
            Login
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-black">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-maroon font-bold hover:underline">
              Register now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
