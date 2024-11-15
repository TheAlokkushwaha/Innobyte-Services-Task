import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import BookingOptionsSection from "./BookingOptionsSection";
import ContactUsSection from "./ContactUsSection";
import TestimonialsSection from "./TestmonialsSection";
import TripGoalLandingMainSection from "./TripGoalLandingMainSection";
import TripGoalLandingMainSection1 from "./TripGoalLandingMainSection1";
import TripHighlightsSection from "./TripHighlightsSection";
import TripStepsSection from "./TripStepsSection";
import Footer from "components/Footer";

export default function TripGoalLandingPage() {
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
                  <TripGoalLandingMainSection />
                </div>
              </div>
              {/* Booking Options Section */}
              <BookingOptionsSection />
            </div>
            <div className="py-[120px] mt-[-72px] relative bg-white-a700 md:py-5">
              {/* Trip Steps Section */}
              <TripStepsSection />
            </div>
          </div>
          {/* Additional Trip Goal Landing Section */}
          <TripGoalLandingMainSection1 />

          {/* Testimonials Section */}
          <TestimonialsSection />

          {/* Trip Highlights Section */}
          <TripHighlightsSection />

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
