import { Text } from "../../components";
import React, { Suspense } from "react";
import RoomColumn from "../../components/RoomColumn";

// Fixed travelQuestionnaireList data structure
const travelQuestionnaireList = [
  {
    telluswhat: "Spacious Serenity Suite",
    filloutatwo: "Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets roomy elegance.",
    filloutafour: "Rs. 1500/night",
    chatone: "images/large.jpg",
  },
  {
    telluswhat: "Cozy Haven Room",
    filloutatwo: "Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation.",
    filloutafour: "Rs. 1000/night",
    chatone: "images/small.jpg",
  },
  {
    telluswhat: "Classic Heritage Room",
    filloutatwo: "Step back in time in the Classic Heritage Room, adorned with vintage décor and historical charm.",
    filloutafour: "Rs. 1400/night",
    chatone: "images/room1.jpg",
  },
];

export default function RoomSection() {
  return (
    <>
      {/* Trip Steps Section */}
      <div className="mt-[70px] flex flex-col items-center">
        <div className="container-xs sm:gap-[35px] md:gap-[52px] gap-[70px] flex flex-col items-center md:px-5">
          
          {/* Section Title */}
          <div className="w-[48%] flex flex-col items-center md:w-full">
            <Text size="textxs" as="p" className="text-[16px] font-medium text-teal-a700">
              Select For The Perfect Rest
            </Text>
            <Text
              size="text2x1"
              as="p"
              className="sm:text-[32px] md:text-[38px] text-[42px] mt-1 font-ekselldisplay2 font-semibold capitalize text-blue_gray-900"
            >
              Our living room
            </Text>
            <Text
              size="textxs"
              as="p"
              className="text-[16px] mt-5 self-stretch text-center font-normal leading-7 text-blue_gray-500"
            >
              Begin your journey to pure relaxation where every moment is crafted for comfort and unforgettable rest.
            </Text>
          </div>

          {/* Steps Section - Dynamically Rendering Components */}
          <div className="gap-[30px] flex self-stretch md:flex-col">
            <Suspense fallback={<div>Loading feed...</div>}>
              {travelQuestionnaireList.map((d, index) => (
                <RoomColumn {...d} key={"featuresList" + index} />
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}