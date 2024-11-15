import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAndroid,
  faApple,
  faFacebook,
  faInstagram,
  faLinkedin,
  faSquareXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-[#000000] text-gray-300 py-8 text-sm">
      {/* Links Section */}
      <div className="container mx-auto grid grid-cols-4 md:grid-cols-4 gap-6 mb-8 px-[100px]">
        <div className="space-y-4">
          <a href="#" className="hover:underline">
            About Us
          </a>
          <a href="#" className="hover:underline">
            Feedback
          </a>
          <a href="#" className="hover:underline">
            Community
          </a>
        </div>
        <div className="space-y-4">
          <a href="#" className="hover:underline">
            Room Types & Amenities
          </a>
          <a href="#" className="hover:underline">
            Customer Reviews & Ratings
          </a>
          <a href="#" className="hover:underline">
            Travel Tips & Guides
          </a>
        </div>
        <div className="space-y-4">
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            CA Notice at Collection
          </a>
          <a href="#" className="hover:underline">
            Cookie Settings
          </a>
        </div>
        <div className="space-y-4">
          <a href="#" className="hover:underline">
            Concierge Assistance
          </a>
          <a href="#" className="hover:underline">
            Flexible Booking Options
          </a>
          <a href="#" className="hover:underline">
            Wellness & Recreation
          </a>
          <a href="#" className="hover:underline">
            Airport Transfers
          </a>
        </div>
      </div>

      {/* Social Media & Mobile App Section */}
      <div className="container mx-auto flex md:flex-row items-center justify-between px-[100px] mb-4">
        <div className="flex items-center mb-4 md:mb-0">
          <p className="mr-4">Follow Us:</p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-300 hover:text-white w-12 h-12 flex items-center justify-center rounded-full bg-gray-600 hover:bg-gray-500"
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white w-12 h-12 flex items-center justify-center rounded-full bg-gray-600 hover:bg-gray-500"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white w-12 h-12 flex items-center justify-center rounded-full bg-gray-600 hover:bg-gray-500"
            >
              <FontAwesomeIcon icon={faSquareXTwitter} size="2x" />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white w-12 h-12 flex items-center justify-center rounded-full bg-gray-600 hover:bg-gray-500"
            >
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white w-12 h-12 flex items-center justify-center rounded-full bg-gray-600 hover:bg-gray-500"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
        </div>
        <div className="flex items-center">
          <p className="mr-4">Mobile app:</p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-300 hover:text-white w-12 h-12 flex items-center justify-center rounded-full bg-gray-600 hover:bg-gray-500"
            >
              <FontAwesomeIcon icon={faApple} size="2x" />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white w-12 h-12 flex items-center justify-center rounded-full bg-gray-600 hover:bg-gray-500"
            >
              <FontAwesomeIcon icon={faAndroid} size="2x" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-700 text-center pt-4">
        <p className="text-gray-500">
          Copyright © 2024 Kingsukh Guest House. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
