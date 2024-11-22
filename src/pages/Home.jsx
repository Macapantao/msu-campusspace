import React, { useState } from "react";
import Footer from "./Footer"; // Ensure you import the Footer component
import facility from "../images/ayala2.jpg";
import venue1 from "../images/ayala.png"; // Replace with your actual image paths
import venue2 from "../images/gym2.jpeg";
import venue3 from "../images/icc.png";
import venue4 from "../images/mchc1.jpg";
import venue5 from "../images/gym.jpg";
import { FaFacebook, FaTwitter, FaInstagram, FaSearch, FaCalendarAlt, FaHandshake, FaCheckCircle } from 'react-icons/fa';


const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    // Add filtering logic here to filter facilities based on the search query
  };

  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative w-full h-[550px]"
        style={{
          backgroundImage: `url(${facility})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 text-center text-white pt-20 px-4">
          <h1
            className="text-5xl font-bold mt-10 text-white animate-pulse"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Welcome to MSU CampusSpace
          </h1>
          <p className="mt-4 text-2xl" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Your platform to book and manage campus venues for events
          </p>

          {/* Search Box */}
          <div className="mt-6 mx-auto w-full max-w-lg">
            <div className="flex">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search for venues..."
              className="w-full p-2 rounded-l-lg shadow-lg border-t border-l border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{ fontFamily: "'Poppins', sans-serif", color: "black" }}  // Added color property here
            />

              <button
                onClick={() => console.log(`Searching for: ${searchQuery}`)} // Replace with actual search functionality
                className="bg-maroon text-white px-4 py-2 rounded-r-lg shadow-lg hover:bg-maroon transition duration-200"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Venues Section */}
      <div className="mt-14 px-4">
        <h2
          className="text-3xl font-semibold text-center mb-12 text-black underline ml-20"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Featured Venues in the MSU Campus
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Venue 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden ml-20">
            <img src={venue1} alt="Venue 1" className="w-[500px] h-80 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-black" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Ayala Resort
              </h3>
              <p style={{ fontFamily: "'Poppins', sans-serif'" }}>Location: MSU Main Campus</p>
              <p style={{ fontFamily: "'Poppins', sans-serif'" }}>Type: Special Events & Celebrations</p>
            </div>
          </div>

          {/* Venue 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={venue2} alt="Venue 2" className="w-[500px] h-80 object-cover ml-10" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-black" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Dimaporo Gymnasium
              </h3>
              <p style={{ fontFamily: "'Poppins', sans-serif'" }}>Location: Science Building</p>
              <p style={{ fontFamily: "'Poppins', sans-serif'" }}>Type: Special Events & Celebrations</p>
            </div>
          </div>

          {/* Venue 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden ml-20">
            <img src={venue3} alt="Venue 3" className="w-[500px] h-80 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-black" style={{ fontFamily: "'Poppins', sans-serif" }}>
                International Convention Center
              </h3>
              <p style={{ fontFamily: "'Poppins', sans-serif'" }}>Location: 2nd Street, MSU</p>
              <p style={{ fontFamily: "'Poppins', sans-serif'" }}>Type: Community & Public Events</p>
            </div>
          </div>

          {/* Venue 4 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={venue4} alt="Venue 4" className="w-[500px] h-80 object-cover ml-10" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-black" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Meranaw Cultural Heritage Center
              </h3>
              <p style={{ fontFamily: "'Poppins', sans-serif'" }}>Location: MSU Main Campus</p>
              <p style={{ fontFamily: "'Poppins', sans-serif'" }}>Type: Social & Cultural Events</p>
            </div>
          </div>
        </div>

        {/* See All Venues Button */}
        <div className="text-center mt-8">
          <button
            className="bg-gold text-black py-3 px-6 rounded shadow-lg font-semibold "
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            See All Venues
          </button>
        </div>
      </div>

      {/* About Us, Contact Us, Privacy Policy, See How it Works */}
      <div className="mt-16 px-4">
      {/* About Us Section */}
      <div className="flex items-center justify-between mt-16 px-4">
        <div className="w-1/2 pr-8">
          <h2 className="text-4xl font-bold text-maroon mb-4">About Us</h2>
          <p className="text-lg leading-relaxed text-black" style={{ textAlign: "justify" }}>
              MSU CampusSpace is a student-centered platform dedicated to simplifying the process of booking and managing
              university venues for events. Whether you're organizing a seminar, conference, social event, or workshop, we
              provide easy access to a variety of campus spaces with detailed descriptions, availability, and booking
              functionality.
            </p>
            <p className="mt-4 text-lg text-black" style={{ textAlign: "justify" }}>
              Our goal is to ensure smooth event planning for students, faculty, and external partners, fostering collaboration
              and community-building within the MSU campus.
            </p>

        </div>
        <div className="w-1/2">
        <img src={venue5} alt="Venue 4" className="w-full h-full object-cover rounded-lg"/>        </div>
      </div>

      {/* Contact Us Section */}
      <div className="mt-32 px-4">
        <h2 className="text-4xl font-bold text-maroon text-center mb-8">Contact Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold text-black mb-4">Get in Touch</h3>
            <p className="text-lg text-black mb-6">Have questions or need assistance? We’re here to help! Reach out to us and we’ll respond as quickly as possible.</p>
            <ul className="text-black space-y-4">
              <li><strong>Email:</strong> support@msucampusspace.com</li>
              <li><strong>Phone:</strong> +1 234 567 890</li>
              <li><strong>Address:</strong> MSU Main Campus, Building 10, City, Country</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-black mb-4">Follow Us</h3>
            <p className="text-lg text-black mb-6">Stay connected with us on social media for updates and announcements.</p>
            <ul className="flex space-x-6">
              <li>
                <a href="https://facebook.com/msucampusspace" target="_blank" rel="noopener noreferrer">
                  <FaFacebook size={30} className="text-blue-600 hover:text-blue-800" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/msucampusspace" target="_blank" rel="noopener noreferrer">
                  <FaTwitter size={30} className="text-blue-400 hover:text-blue-600" />
                </a>
              </li>
              <li>
                <a href="https://instagram.com/msucampusspace" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={30} className="text-pink-600 hover:text-pink-800" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Privacy Policy Section */}
      <div className="mt-28 px-4">
        <h2 className="text-4xl font-bold text-maroon text-center mb-8">Privacy Policy</h2>
        <div className="space-y-6 text-lg text-black">
        <p>
        At MSU CampusSpace, we are committed to protecting your personal information. We collect details like your name and email to process bookings and improve your experience on our platform. This data helps us personalize your interactions, send updates, and notify you about new features or changes.
      </p>
      <p className="mt-2">
        We use security measures to protect your data from unauthorized access or loss. You have the right to access, update, or delete your information at any time. For any privacy concerns or requests, please contact us at <a href="mailto:support@msucampusspace.com" className="text-blue-500">support@msucampusspace.com</a>.
      </p>
        </div>
      </div>

      {/* See How It Works Section */}
      <div className="mt-32 px-4">
        <h2 className="text-4xl font-bold text-maroon text-center mb-8">See How It Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-black">
          <div className="flex items-center justify-center flex-col p-4 bg-white rounded-lg shadow-lg">
            <FaSearch size={40} className="text-blue-500 mb-4" />
            <h3 className="font-semibold text-xl mb-2">Search for Venues</h3>
            <p className="text-center">Use our search tool to find available venues that suit your event requirements.</p>
          </div>

          <div className="flex items-center justify-center flex-col p-4 bg-white rounded-lg shadow-lg">
            <FaCalendarAlt size={40} className="text-green-500 mb-4" />
            <h3 className="font-semibold text-xl mb-2">Select Your Date</h3>
            <p className="text-center">Choose a date that works best for your event from our availability calendar.</p>
          </div>

          <div className="flex items-center justify-center flex-col p-4 bg-white rounded-lg shadow-lg">
            <FaHandshake size={40} className="text-orange-500 mb-4" />
            <h3 className="font-semibold text-xl mb-2">Confirm Booking</h3>
            <p className="text-center">Once you've found the perfect venue, confirm your booking with a few simple clicks.</p>
          </div>

          <div className="flex items-center justify-center flex-col p-4 bg-white rounded-lg shadow-lg">
            <FaCheckCircle size={40} className="text-purple-500 mb-4" />
            <h3 className="font-semibold text-xl mb-2">Enjoy Your Event</h3>
            <p className="text-center">Enjoy your event at the MSU Campus venue of your choice and make it a success!</p>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-32 px-4">
      {/* Footer */}
      <Footer />
    </div>
    </div>
  );
};

export default Home;
