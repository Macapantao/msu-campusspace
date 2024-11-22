import React, { useState } from "react";
import { FaHome, FaUserCircle, FaCalendarAlt, FaBell, FaSignOutAlt } from "react-icons/fa"; // Icons
import { useNavigate } from "react-router-dom";

// Importing the images
import venue1 from "../images/ayala.png";
import venue2 from "../images/gym2.jpeg";
import venue3 from "../images/icc.png";
import venue4 from "../images/mchc1.jpg";
import venue5 from "../images/slh.jpg";
import venue6 from "../images/cakeko2.jpg";

const UserDashboard = () => {
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
  const [notifications,] = useState([
    {
      id: 1,
      type: "Pending",
      message: "Your booking for Ayala Resort is pending.",
      timestamp: "November 18, 2024, 10:00 AM",
    },
    {
      id: 2,
      type: "Approved",
      message: "Your booking for Dimaporo Gymnasium has been approved.",
      timestamp: "November 17, 2024, 2:45 PM",
    },
    {
      id: 3,
      type: "Cancelled",
      message: "Your booking for Science Laboratory Hall was cancelled.",
      timestamp: "November 15, 2024, 5:30 PM",
    },
  ]);
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login"); // Redirect to login page after logout
  };

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
  const [reservations, setReservations] = useState([
    {
      id: 1,
      venue: "Dimaporo Gymnasium",
      location: "Science Building",
      type: "Special Events & Celebrations",
      date: "November 25, 2024",
      status: "Pending",
    },
    {
      id: 2,
      venue: "Ayala Resort",
      location: "MSU Main Campus",
      type: "Social Gatherings",
      date: "December 10, 2024",
      status: "Approved",
    },
    {
      id: 3,
      venue: "Science Laboratory Hall",
      location: "MSU Lakeside",
      type: "Professional Events",
      date: "November 30, 2024",
      status: "Cancelled",
    },
  ]);

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedReservation, setSelectedReservation] = useState(null);

  // Handle Cancel Click
  const handleCancelClick = (reservation) => {
    setSelectedReservation(reservation);
    setShowConfirmation(true);
  };

  // Confirm Cancellation
  const confirmCancellation = () => {
    setReservations((prev) =>
      prev.map((res) =>
        res.id === selectedReservation.id
          ? { ...res, status: "Cancelled" }
          : res
      )
    );
    setShowConfirmation(false);
    setSelectedReservation(null);
  };

  // Close Confirmation Modal
  const closeConfirmation = () => {
    setShowConfirmation(false);
    setSelectedReservation(null);
  };

  
  return (
    <div className="flex h-[940px]">
      {/* Sidebar */}
      <div className="w-64 bg-black opacity-90 text-white p-4">
        <ul>
          <li
            onClick={() => setActiveSection("dashboard")}
            className={`p-3 cursor-pointer mb-3 rounded-md ${activeSection === "dashboard" ? "bg-gray-700" : ""}`}
          >
            <FaHome className="inline mr-2" /> Dashboard
          </li>
          <li
            onClick={() => setActiveSection("account")}
            className={`p-3 cursor-pointer mb-3 rounded-md ${activeSection === "account" ? "bg-gray-700" : ""}`}
          >
            <FaUserCircle className="inline mr-2" /> My Account
          </li>
          <li
            onClick={() => setActiveSection("reservations")}
            className={`p-3 cursor-pointer mb-3 rounded-md ${activeSection === "reservations" ? "bg-gray-700" : ""}`}
          >
            <FaCalendarAlt className="inline mr-2" /> My Reservations
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
      <div className="flex-1 p-6 bg-white mt-3">
        {activeSection === "dashboard" && (
          <div className="dashboard-content">
            <h4 className="text-4xl font-semibold text-black mb-10 text-center">
              Available Venues in the MSU Campus for Booking
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
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
              <div className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
              onClick={() => navigate("/Venue2")}>
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
              <div className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
              onClick={() => navigate("/Venue3")}> 
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
              <div className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
              onClick={() => navigate("/Venue4")}>
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
              <div className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
              onClick={() => navigate("/Venue5")} >
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
              <div className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
              onClick={() => navigate("/Venue6")}>
                <img
                  src={venue6}
                  alt="Venue 6"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h5 className="text-xl font-semibold">Cake Ko Restaurant </h5>
                  <p>Location: MSU Campus</p>
                  <p>Type: Social Gatherings and Celebrations</p>
                </div>
              </div>
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

{activeSection === "reservations" && (
  <div>
    <h3 className="text-3xl font-bold text-black mb-6">My Reservations</h3>
    <p className="text-lg mb-4">Manage your bookings and track their status below.</p>

           {/* Reservations Table */}
           <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse bg-white shadow-lg rounded-lg">
          <thead className="bg-maroon text-white">
            <tr>
              <th className="p-4 text-left">Venue Name</th>
              <th className="p-4 text-left">Location</th>
              <th className="p-4 text-left">Type</th>
              <th className="p-4 text-left">Booking Date</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation) => (
              <tr
                key={reservation.id}
                className={reservation.status === "Cancelled" ? "bg-gray-100" : ""}
              >
                <td className="p-4">{reservation.venue}</td>
                <td className="p-4">{reservation.location}</td>
                <td className="p-4">{reservation.type}</td>
                <td className="p-4">{reservation.date}</td>
                <td className="p-4">
                  <span
                    className={`text-white text-sm px-3 py-1 rounded-full ${
                      reservation.status === "Pending"
                        ? "bg-yellow-500"
                        : reservation.status === "Approved"
                        ? "bg-green-500"
                        : "bg-gray-500"
                    }`}
                  >
                    {reservation.status}
                  </span>
                </td>
                <td className="p-4 text-center">
                  {reservation.status !== "Cancelled" ? (
                    <button
                      className="bg-red-600 text-white px-2 py-1 text-sm rounded-md hover:bg-red-700 transition"
                      onClick={() => handleCancelClick(reservation)}
                    >
                      Cancel
                    </button>
                  ) : (
                    <button
                      className="bg-gray-400 text-white px-2 py-1 text-sm rounded-md cursor-not-allowed"
                      disabled
                    >
                      Cancelled
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
            {/* Confirmation Modal */}
            {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
            <h4 className="text-xl font-bold mb-4">Confirm Cancellation</h4>
            <p className="mb-6">
              Are you sure you want to cancel your reservation for{" "}
              <span className="font-semibold">
                {selectedReservation?.venue}
              </span>
              ?
            </p>
            <div className="flex justify-center gap-4">
              <button
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
                onClick={confirmCancellation}
              >
                Yes, Cancel
              </button>
              <button
                className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500"
                onClick={closeConfirmation}
              >
                No, Go Back
              </button>
            </div>
          </div>
        </div>
      )}
      </div>
        </div>
        )}


{activeSection === "notifications" && (
          <div>
            <h3 className="text-3xl font-bold text-black mb-6">Notifications</h3>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-4">
                Recent Updates on Your Bookings
              </h4>
              <ul className="space-y-4">
                {notifications.map((notification) => (
                  <li
                    key={notification.id}
                    className={`p-4 border-l-4 ${
                      notification.type === "Approved"
                        ? "border-green-500"
                        : notification.type === "Cancelled"
                        ? "border-red-500"
                        : "border-yellow-500"
                    } bg-white shadow rounded-lg flex items-start`}
                  >
                    <div className="flex-1">
                      <p className="text-lg font-medium">{notification.message}</p>
                      <span className="text-sm text-gray-500">
                        {notification.timestamp}
                      </span>
                      
                    </div>
                    <button
                      className="ml-4 bg-maroon text-white px-3 py-1 rounded-md hover:bg-maroon-dark transition"
                      onClick={() => alert("Check your email for details.")}
                    >
                      View Details
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
