import React, { useState } from "react";
import { FaStar, FaRegEnvelope, FaPhoneAlt } from "react-icons/fa";

import venueImage1 from "../images/mchc.jpg"; // Update with appropriate image
import venueImage2 from "../images/mchc1.jpg"; // Update with appropriate image

const Venue4 = () => {
  const [contactMethod, setContactMethod] = useState("email");

  return (
    <div className="p-8 bg-white">
      <h2 className="text-4xl font-bold text-black mb-6 text-center">MERANAW CULTURAL HERITAGE CENTER</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <img src={venueImage1} alt="Venue" className="w-full h-96 object-cover rounded-lg" />
        <img src={venueImage2} alt="Venue" className="w-full h-96 object-cover rounded-lg" />
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold underline text-black mb-4">Details</h3>
            <p className="text-xl mt-1"><strong>Location:</strong> MSU Main Campus</p>
            <p className="text-xl mt-1"><strong>Type:</strong> Social & Cultural Events</p>
            <p className="text-xl mt-1">
              <strong>Rating:</strong>
              <FaStar className="inline text-gold mx-1" /> 4.7
            </p>
            <p className="mt-4 text-xl">
              <strong>Description:</strong> The Meranaw Cultural Heritage Center is a unique venue that provides a perfect setting for cultural and social gatherings. It is ideal for celebrations, festivals, and traditional events.
            </p>
            <p className="text-xl mt-1"><strong>Capacity:</strong> 200-300 people</p>
            <p className="text-xl mt-1"><strong>Available Times:</strong> 9:00 AM - 10:00 PM</p>
          </div>
        </div>

        <div className="flex-1 bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-black mb-4 underline">Book This Venue</h3>
          <form className="space-y-4">
            <div>
              <label className="block font-semibold text-xl mb-1">Rent per Hour</label>
              <input
                type="text"
                value="₱4,000"
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
                placeholder="e.g., 250"
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
              <strong>Email:</strong> heritage@msuvenue.com
            </p>
            <p className="text-xl mt-1">
              <strong>Phone:</strong> +63 915 678 1234
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

export default Venue4;
