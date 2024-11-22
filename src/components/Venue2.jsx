import React, { useState } from "react";
import { FaStar, FaRegEnvelope, FaPhoneAlt } from "react-icons/fa";

import venueImage1 from "../images/gym2.jpeg";
import venueImage2 from "../images/gym.jpg";
import venueImage3 from "../images/gym1.jpg";

const Venue2 = () => {
  const [contactMethod, setContactMethod] = useState("email");

  return (
    <div className="p-8 bg-white">
      <h2 className="text-4xl font-bold text-black mb-6 text-center">DIMAPORO GYMNASIUM</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <img src={venueImage1} alt="Venue" className="w-full h-80 object-cover rounded-lg" />
        <img src={venueImage2} alt="Venue" className="w-full h-80 object-cover rounded-lg" />
        <img src={venueImage3} alt="Venue" className="w-full h-80 object-cover rounded-lg" />
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold underline text-black mb-4">Details</h3>
            <p className="text-xl mt-1"><strong>Location:</strong> MSU Downtown Campus</p>
            <p className="text-xl mt-1"><strong>Type:</strong> Corporate & Formal Events</p>
            <p className="text-xl mt-1">
              <strong>Rating:</strong>
              <FaStar className="inline text-gold mx-1" /> 4.6
            </p>
            <p className="mt-4 text-xl">
              <strong>Description:</strong> The Grand Banquet Hall is an ideal location for corporate
              conferences, award ceremonies, and large-scale formal gatherings.
            </p>
            <p className="text-xl mt-1"><strong>Capacity:</strong> 300-400 people</p>
            <p className="text-xl mt-1"><strong>Available Times:</strong> 8:00 AM - 11:00 PM</p>
          </div>
        </div>

        <div className="flex-1 bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-black mb-4 underline">Book This Venue</h3>
          <form className="space-y-4">
            <div>
              <label className="block font-semibold text-xl mb-1">Rent per Hour</label>
              <input
                type="text"
                value="₱3,000"
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
                placeholder="e.g., 300"
              />
            </div>
            <button className="bg-maroon text-white py-2 px-6 text-lg rounded-lg font-bold">
              Request Booking
            </button>
          </form>

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
              <strong>Email:</strong> banquet@msuvenue.com
            </p>
            <p className="text-xl mt-1">
              <strong>Phone:</strong> +63 923 456 7890
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

export default Venue2;
