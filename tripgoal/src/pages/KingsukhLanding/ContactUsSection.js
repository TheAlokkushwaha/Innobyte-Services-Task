import React, { useEffect } from "react";
import { Button, Text } from "../../components";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const redIcon = L.icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
});

export default function ContactUsSection() {
  useEffect(() => {
    const map = L.map("map").setView([23.5861537, 86.8579313], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker([23.5861537, 86.8579313], { icon: redIcon })
      .addTo(map)
      .bindPopup("MANPUR PALASH BAN")
      .openPopup();
  }, []);

  return (
    <>
      <div id="contact" className="mt-[50px] flex justify-center self-stretch">
        <div className="container flex justify-center py-10 px-5 bg-gray-100 md:px-3">
          <div className="flex w-full flex-col md:flex-row gap-8 md:gap-12 items-start p-8 bg-white rounded-[20px]">
            {/* Contact Form Section */}
            <div className="flex gap-8 p-6">
              {/* Left Side - Contact Form */}
              <div className="flex flex-1 flex-col gap-8 md:w-1/2">
                <div className="flex flex-col gap-3">
                  <Text
                    size="textxs"
                    as="p"
                    className="text-[16px] font-medium text-teal-a700"
                  >
                    Contact Us
                  </Text>
                  <Text
                    size="text3x1"
                    as="p"
                    className="text-[38px] md:text-[44px] leading-tight font-ekselldisplay2 font-medium text-blue_gray-900"
                  >
                    Do You Have Any Questions?
                  </Text>
                </div>

                {/* Form Inputs */}
                <div className="space-y-5 w-full">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="px-4 py-3 bg-gray-50 w-full text-gray-800 text-sm border border-gray-300 rounded-md focus:border-blue-600 focus:ring focus:ring-blue-100 outline-none transition duration-150 ease-in-out"
                  />
                  <input
                    type="number"
                    placeholder="Phone No."
                    className="px-4 py-3 bg-gray-50 w-full text-gray-800 text-sm border border-gray-300 rounded-md focus:border-blue-600 focus:ring focus:ring-blue-100 outline-none transition duration-150 ease-in-out"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="px-4 py-3 bg-gray-50 w-full text-gray-800 text-sm border border-gray-300 rounded-md focus:border-blue-600 focus:ring focus:ring-blue-100 outline-none transition duration-150 ease-in-out"
                  />
                  <textarea
                    placeholder="Write Message"
                    className="px-4 py-3 bg-gray-50 w-full text-gray-800 text-sm border border-gray-300 rounded-md focus:border-blue-600 focus:ring focus:ring-blue-100 outline-none transition duration-150 ease-in-out"
                  ></textarea>
                  <Button className="mt-4 w-full py-3 text-white text-sm font-medium rounded-md hover:bg-teal-600 focus:outline-none transition duration-150 ease-in-out">
                    Send
                  </Button>
                </div>
              </div>

              {/* Right Side - Contact Info */}
              <div className="p-8 bg-white text-white rounded-lg shadow-lg md:max-w-xs">
                <h3 className="text-lg font-semibold mb-5 text-blue_gray-900 font-ekselldisplay2">
                  Contact Info
                </h3>
                <div className="space-y-4">
                  <p className="flex items-start gap-3">
                    <span className="text-xl">📍</span> Beside Barshal Water
                    Tank, Manpur, Barhanti, West Bengal 723156
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-xl">✉️</span> kkghosh0099@gmail.com
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-xl">📞</span> +91 9007062180
                  </p>
                </div>

                {/* Social Icons */}
                <div className="flex gap-5 mt-6">
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="text-xl hover:text-gray-200 transition duration-150 ease-in-out"
                  >
                    🌐
                  </a>
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="text-xl hover:text-gray-200 transition duration-150 ease-in-out"
                  >
                    🌐
                  </a>
                  <a
                    href="#"
                    aria-label="Twitter"
                    className="text-xl hover:text-gray-200 transition duration-150 ease-in-out"
                  >
                    🌐
                  </a>
                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="text-xl hover:text-gray-200 transition duration-150 ease-in-out"
                  >
                    🌐
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Information and Map */}
            <div className="flex flex-1 flex-col w-full md:w-1/2 gap-4">
              <div
                id="map"
                style={{
                  height: "350px",
                  width: "100%",
                  borderRadius: "12px",
                  border: "1px solid #e0e0e0",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
