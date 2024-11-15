import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import BookingOptionsSection from "./BookingOptionsSection";
import ContactUsSection from "./ContactUsSection";
import ServicesSection from "./ServicesSection";
import KingsukhLandingMainSection from "./KingsukhLandingMainSection";
import KingsukhLandingSection from "./KingsukhLandingSection";
import HighlightsSection from "./HighlightsSection";
import RoomSection from "./RoomSection";
import Footer from "components/Footer";

export default function KingsukhLandingPage() {
  return (
    <>
      <Helmet>
        <title>Kingsukh Guest House</title>
        <meta
          name="description"
          content="Embark on an unforgettable journey with TripGoal. Discover luxury travel packages, connect with local cultures, and enjoy a seamless travel experience."
        />
      </Helmet>

      <div className="w-full bg-white-a700">
        <div className=" flex flex-col items-center">
          <div className="self-stretch">
            <div className="z-[1] relative">
              <div className="bg-gray-50_01 py-6 sm:py-5 shadow-lg">
                <div className="sm:gap-[37px] md:gap-[55px] gap-[74px] mb-[130px] flex flex-col items-center">
                  <div className="container-xs md:px-5">
                    <Header />
                  </div>
                  {/* Trip Goal Landing Main Section */}
                  <KingsukhLandingMainSection />
                </div>
              </div>
              {/* Booking Options Section */}
              <BookingOptionsSection />
            </div>
            <div className="py-[120px] mt-[-72px] relative bg-white-a700 md:py-5">
              {/* Trip Steps Section */}
              <RoomSection />
            </div>
          </div>
          {/* Additional Trip Goal Landing Section */}
          <KingsukhLandingSection />

          {/* Testimonials Section */}
          <ServicesSection />

          {/* Trip Highlights Section */}
          <HighlightsSection />

          {/* Contact Us Section */}
          <ContactUsSection />

          <div className="w-full">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
