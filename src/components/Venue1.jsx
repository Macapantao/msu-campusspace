import React, { useState } from "react";
import { FaStar, FaRegEnvelope, FaPhoneAlt } from "react-icons/fa";

import venueImage1 from "../images/ayala.png";
import venueImage2 from "../images/ayala1.jpg";
import venueImage3 from "../images/ayala2.jpg";

const Venue1 = () => {
  const [contactMethod, setContactMethod] = useState("email");

  return (
    <div className="p-8 bg-white">
      <h2 className="text-4xl font-bold text-black mb-6 text-center">AYALA RESORT</h2>
      
      {/* Top Section with Images */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <img src={venueImage1} alt="Venue" className="w-full h-80 object-cover rounded-lg" />
        <img src={venueImage2} alt="Venue" className="w-full h-80 object-cover rounded-lg" />
        <img src={venueImage3} alt="Venue" className="w-full h-80 object-cover rounded-lg" />
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Section */}
        <div className="flex-1">
          {/* Venue Details */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-black mb-4 underline">Details</h3>
            <p className="text-xl mt-1"><strong>Location:</strong> MSU Main Campus</p>
            <p className="text-xl mt-1"><strong>Type:</strong> Special Events & Celebrations</p>
            <p className="text-xl mt-1">
              <strong>Rating:</strong> 
              <FaStar className="inline text-gold mx-1" /> 4.8
            </p>
            <p className="mt-4 text-xl">
              <strong>Description:</strong> Ayala Resort is a premium venue suitable for weddings,
              corporate events, and private celebrations. It offers luxurious amenities and
              stunning views.
            </p>
            <p className="text-xl mt-1"><strong>Capacity:</strong> 200-300 people</p>
            <p className="text-xl mt-1"><strong>Available Times:</strong> 9:00 AM - 10:00 PM</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-black mb-4 underline">Book This Venue</h3>
          <form className="space-y-4">
            <div>
              <label className="block font-semibold text-xl mb-1">Rent per Hour</label>
              <input
                type="text"
                value="₱2,500"
                disabled
                className="w-full border-gray-300 rounded-lg text-xl p-2"
              />
            </div>
            <div>
              <label className="block font-semibold text-xl mb-1">Choose Date & Time</label>
              <input type="datetime-local" className="w-full border-gray-300 text-xl rounded-lg p-2" />
            </div>
            <div>
              <label className="block font-semibold text-xl mb-1">Number of Guests</label>
              <input
                type="number"
                className="w-40 border-gray-300 text-xl rounded-lg p-2"
                placeholder="e.g., 150"
              />
            </div>
            <button className="bg-maroon text-white py-2 px-6 text-lg rounded-lg font-bold">
              Request Booking
            </button>
          </form>

      {/* Contact Form */}
            <div className="mt-8">
            <h4 className="text-xl font-semibold mb-3">Contact Venue</h4>
            <div className="flex items-center gap-4 mb-4">
                <label className="flex items-center text-xl">
                <input
                    type="radio"
                    name="contactMethod"
                    value="email"
                    checked={contactMethod === "email"}
                    onChange={(e) => setContactMethod(e.target.value)}
                />
                <FaRegEnvelope className="ml-2" />
                <span className="ml-2">Email</span>
                </label>
                <label className="flex items-center text-xl">
                <input
                    type="radio"
                    name="contactMethod"
                    value="phone"
                    checked={contactMethod === "phone"}
                    onChange={(e) => setContactMethod(e.target.value)}
                />
                <FaPhoneAlt className="ml-2" />
                <span className="ml-2">Phone</span>
                </label>
            </div>
            <p className="text-xl mt-2">
                <strong>Email:</strong> ayalaresort@gmail.com
            </p>
            <p className="text-xl mt-1">
                <strong>Phone:</strong> +63 912 345 6789
            </p>
            <button className="bg-gold text-black py-2 px-6 rounded-lg text-xl font-bold mt-4">
                Inquire Now
            </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Venue1;
