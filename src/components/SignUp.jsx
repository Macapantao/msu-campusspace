import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import facility from "../images/icc1.jpg";
import { FaUserAlt, FaBuilding } from "react-icons/fa";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToPolicy: false,
    userType: "",
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

  const handleSignUp = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (!formData.agreeToPolicy) {
      setError("You must agree to the Privacy Policy");
      return;
    }

    if (!formData.userType) {
      setError("Please select a user type (User or Manager)");
      return;
    }

    // Simulate successful signup
    localStorage.setItem("token", "fake-jwt-token");
    navigate(formData.userType === "manager" ? "/managerdashboard" : "/userdashboard");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center relative bg-cover bg-center"
      style={{
        backgroundImage: `url(${facility})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative bg-white shadow-lg ml-10 rounded-lg p-8 w-full max-w-md border-t-4 border-maroon z-10">
        <h2 className="text-3xl font-bold text-center mb-6 text-maroon underline">
          Create an Account
        </h2>
        <div className="mb-6 text-center">
          <div className="flex justify-center gap-10">
            <div
              className={`user-option p-4 rounded-lg border ${formData.userType === "user" ? "border-maroon" : "border-gray-400"} cursor-pointer`}
              onClick={() => setFormData({ ...formData, userType: "user" })}
            >
              <FaUserAlt className="text-maroon text-4xl" />
              <p className="text-maroon font-semibold">User</p>
              <p className="text-sm">I want to rent a venue</p>
            </div>
            <div
              className={`manager-option p-4 rounded-lg border ${formData.userType === "manager" ? "border-maroon" : "border-gray-400"} cursor-pointer`}
              onClick={() => setFormData({ ...formData, userType: "manager" })}
            >
              <FaBuilding className="text-maroon text-4xl" />
              <p className="text-maroon font-semibold">Manager</p>
              <p className="text-sm">I want to manage a venue</p>
            </div>
          </div>
        </div>
        <form onSubmit={handleSignUp}>
          <div className="mb-4">
            <label className="block text-black font-semibold mb-2">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-maroon"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-black font-semibold mb-2">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-maroon"
              required
            />
          </div>
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
          <div className="mb-4">
            <label className="block text-black font-semibold mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full p-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-maroon"
              required
            />
          </div>
          <div className="mb-6 flex items-center">
            <input
              type="checkbox"
              name="agreeToPolicy"
              checked={formData.agreeToPolicy}
              onChange={handleChange}
              className="mr-2"
            />
            <label className="text-gray-700">
              I agree to the{" "}
              <a href="/privacy-policy" className="text-maroon font-bold">
                Privacy Policy
              </a>
            </label>
          </div>
          {error && (
            <p className="text-red-600 text-sm mb-4">{error}</p>
          )}
          <button
            type="submit"
            className="w-full bg-maroon text-white py-2 rounded-lg font-bold text-lg"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
