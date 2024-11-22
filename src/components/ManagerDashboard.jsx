import React, { useState } from "react";
import { FaHome, FaUserCircle, FaBuilding, FaBell, FaSignOutAlt, FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
// Importing the images
import venue1 from "../images/ayala.png";
import venue2 from "../images/gym2.jpeg";
import venue3 from "../images/icc.png";
import venue4 from "../images/mchc1.jpg";
import venue5 from "../images/slh.jpg";
import venue6 from "../images/cakeko2.jpg";


const ManagerDashboard = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("dashboard");
  const [userData, setUserData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@example.com",
    contactNumber: "123-456-7890",
    currentPassword: "",
    newPassword: "",
    profilePicture: "https://via.placeholder.com/150", // Placeholder image
  });

  const stats = [
    { label: "Total Venues", value: 12, icon: FaBuilding },
    { label: "Total Views", value: 784, icon: FaEye },
    { label: "Notifications", value: 5, icon: FaBell },
    { label: "My Account", value: "Active", icon: FaUserCircle },
  ];
  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUserData({ ...userData, profilePicture: URL.createObjectURL(file) });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, you can make an API request to update the user's data
    console.log("Profile Updated", userData);
  };

  const recentActivities = [
    {
      id: 1,
      type: "Venue Added",
      message: "You added Ayala Resort to the venue list.",
      timestamp: "November 18, 2024, 10:00 AM",
    },
    {
      id: 2,
      type: "Profile Updated",
      message: "Your account details were updated.",
      timestamp: "November 17, 2024, 8:45 PM",
    },
    {
      id: 3,
      type: "Reservation Notification",
      message: "You received a new reservation request for Dimaporo Gymnasium.",
      timestamp: "November 17, 2024, 7:15 PM",
    },
  ];
  const notifications = [
    { id: 1, title: "Reservation Confirmed", message: "Your reservation for Ayala Resort is confirmed.", timestamp: "Nov 20, 2024, 1:00 PM" },
    { id: 2, title: "Payment Received", message: "Payment for Dimaporo Gymnasium has been received.", timestamp: "Nov 19, 2024, 9:30 AM" },
    { id: 3, title: "New Venue Request", message: "You have a new request for Meranaw Cultural Heritage Center.", timestamp: "Nov 18, 2024, 11:45 AM" },
    { id: 4, title: "Profile Updated", message: "Your email address has been updated successfully.", timestamp: "Nov 17, 2024, 6:30 PM" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="flex h-[1050px]">
      {/* Sidebar */}
      <div className="w-64 bg-black opacity-90 text-white p-4">
        <ul>
          <li
            onClick={() => setActiveSection("dashboard")}
            className={`p-3 cursor-pointer mb-3 rounded-md ${
              activeSection === "dashboard" ? "bg-gray-700" : ""
            }`}
          >
            <FaHome className="inline mr-2" /> Dashboard
          </li>
          <li
            onClick={() => setActiveSection("account")}
            className={`p-3 cursor-pointer mb-3 rounded-md ${
              activeSection === "account" ? "bg-gray-700" : ""
            }`}
          >
            <FaUserCircle className="inline mr-2" /> My Account
          </li>
          <li
            onClick={() => setActiveSection("myVenues")}
            className={`p-3 cursor-pointer mb-3 rounded-md ${
              activeSection === "myVenues" ? "bg-gray-700" : ""
            }`}
          >
            <FaBuilding className="inline mr-2" /> My Venues
          </li>
          <li
            onClick={() => setActiveSection("notifications")}
            className={`p-3 cursor-pointer mb-3 rounded-md ${
              activeSection === "notifications" ? "bg-gray-700" : ""
            }`}
          >
            <FaBell className="inline mr-2" /> Notifications
          </li>
          <li onClick={handleLogout} className="p-3 cursor-pointer mb-3 rounded-md">
            <FaSignOutAlt className="inline mr-2" /> Logout
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-white">
      {activeSection === "dashboard" && (
          <div>
            <h3 className="text-4xl font-bold text-black mt-6 text-start">
            Hello, Sodais!
           </h3>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-maroon text-white p-6 rounded-lg shadow-lg flex items-center"
                >
                  <stat.icon className="text-3xl mr-4" />
                  <div>
                    <p className="text-lg font-semibold">{stat.label}</p>
                    <p className="text-2xl">{stat.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Recent Activities */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h4 className="text-2xl font-semibold mb-4">Recent Activities</h4>
              <ul className="space-y-4">
                {recentActivities.map((activity) => (
                  <li
                    key={activity.id}
                    className="bg-white shadow p-4 rounded-lg border-l-4 border-maroon"
                  >
                    <p className="text-lg font-medium">{activity.message}</p>
                    <span className="text-sm text-gray-500">
                      {activity.timestamp}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}


        {activeSection === "account" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Side: User Info Form */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-black mb-6">Edit Your Account</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex space-x-4">
                  <div className="w-1/2">
                    <label className="block text-lg font-medium">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={userData.firstName}
                      onChange={handleInputChange}
                      className="w-full p-3 bg-gray-100 border border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="w-1/2">
                    <label className="block text-lg font-medium">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={userData.lastName}
                      onChange={handleInputChange}
                      className="w-full p-3 bg-gray-100 border border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-lg font-medium">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={userData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-gray-100 border border-gray-300 rounded-md"
                  />
                </div>

                <div>
                  <label className="block text-lg font-medium">Contact Number</label>
                  <input
                    type="text"
                    name="contactNumber"
                    value={userData.contactNumber}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-gray-100 border border-gray-300 rounded-md"
                  />
                </div>

                <div>
                  <label className="block text-lg font-medium">Current Password</label>
                  <input
                    type="password"
                    name="currentPassword"
                    value={userData.currentPassword}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-gray-100 border border-gray-300 rounded-md"
                  />
                </div>

                <div>
                  <label className="block text-lg font-medium">New Password</label>
                  <input
                    type="password"
                    name="newPassword"
                    value={userData.newPassword}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-gray-100 border border-gray-300 rounded-md"
                  />
                </div>

                <button
                  type="submit"
                  className="w-1/2 bg-maroon text-white p-3 ml-28 rounded-md mt-6"
                >
                  Update Profile
                </button>
              </form>
            </div>

            {/* Right Side: Profile Picture */}
            <div className="flex flex-col items-center space-y-4">
              <img
                src={userData.profilePicture}
                alt="Profile"
                className="w-72 h-72 rounded-full border-4 border-white object-cover"
              />
              <label htmlFor="profilePicInput" className="bg-maroon text-white p-3 rounded-full cursor-pointer">
                Select Profile Picture
              </label>
              <input
                type="file"
                id="profilePicInput"
                accept="image/*"
                onChange={handleProfilePictureChange}
                className="hidden"
              />
            </div>
          </div>
        )}
    {activeSection === "myVenues" && (
  <div className="myVenues-content">
    <h4 className="text-4xl font-semibold text-black mt-8 text-center">
      Available Venues in the MSU Campus for Booking
    </h4>

    {/* Search Bar and Add Venue Button */}
    <div className="flex justify-between items-center mt-6">
      <input
        type="text"
        placeholder="Search venues..."
        className="p-3 border border-black rounded-lg w-[400px]"
      />
      <button
        onClick={() => navigate("/addVenue")}
        className="bg-maroon text-white px-6 py-3 rounded-lg hover:bg-red-700 transition"
      >
        + Add Venue
      </button>
    </div>
    <div className="bg-maroon text-white px-1 py-2 mt-6" ></div>

    {/* Venue Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-2">
      {/* Venue 1 */}
      <div
        className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
        onClick={() => navigate("/Venue1")}
      >
        <img
          src={venue1}
          alt="Venue 1"
          className="w-full h-64 object-cover"
        />
        <div className="p-4">
          <h5 className="text-xl font-semibold">Ayala Resort</h5>
          <p>Location: MSU Main Campus</p>
          <p>Type: Special Events & Celebrations</p>
        </div>
      </div>

      {/* Venue 2 */}
      <div
        className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
        onClick={() => navigate("/Venue2")}
      >
        <img
          src={venue2}
          alt="Venue 2"
          className="w-full h-64 object-cover"
        />
        <div className="p-4">
          <h5 className="text-xl font-semibold">Dimaporo Gymnasium</h5>
          <p>Location: Science Building</p>
          <p>Type: Special Events & Celebrations</p>
        </div>
      </div>

      {/* Venue 3 */}
      <div
        className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
        onClick={() => navigate("/Venue3")}
      >
        <img
          src={venue3}
          alt="Venue 3"
          className="w-full h-64 object-cover"
        />
        <div className="p-4">
          <h5 className="text-xl font-semibold">
            International Convention Center
          </h5>
          <p>Location: 2nd Street, MSU</p>
          <p>Type: Community & Public Events</p>
        </div>
      </div>

      {/* Venue 4 */}
      <div
        className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
        onClick={() => navigate("/Venue4")}
      >
        <img
          src={venue4}
          alt="Venue 4"
          className="w-full h-64 object-cover"
        />
        <div className="p-4">
          <h5 className="text-xl font-semibold">
            Meranaw Cultural Heritage Center
          </h5>
          <p>Location: MSU Main Campus</p>
          <p>Type: Social & Cultural Events</p>
        </div>
      </div>

      {/* Venue 5 */}
      <div
        className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
        onClick={() => navigate("/Venue5")}
      >
        <img
          src={venue5}
          alt="Venue 5"
          className="w-full h-64 object-cover"
        />
        <div className="p-4">
          <h5 className="text-xl font-semibold">
            Science Laboratory Hall
          </h5>
          <p>Location: MSU Lakeside</p>
          <p>Type: Professional & Business Events</p>
        </div>
      </div>

      {/* Venue 6 */}
      <div
        className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
        onClick={() => navigate("/Venue6")}
      >
        <img
          src={venue6}
          alt="Venue 6"
          className="w-full h-64 object-cover"
        />
        <div className="p-4">
          <h5 className="text-xl font-semibold">Cake Ko Restaurant</h5>
          <p>Location: MSU Campus</p>
          <p>Type: Social Gatherings and Celebrations</p>
        </div>
      </div>
    </div>
  </div>
)}



        {activeSection === "notifications" && (
          <div>
            <h3 className="text-4xl font-bold text-black mb-6 text-center">
              Notifications
            </h3>
            <div className="space-y-4">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className="bg-white border-l-4 border-maroon p-4 rounded-lg shadow-lg hover:bg-gray-50 transition"
                >
                  <h4 className="text-xl font-bold">{notification.title}</h4>
                  <p className="text-gray-700">{notification.message}</p>
                  <span className="text-sm text-gray-500">
                    {notification.timestamp}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManagerDashboard;
