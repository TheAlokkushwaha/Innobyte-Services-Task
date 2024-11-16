import { Img, Text } from "../../components";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClockRotateLeft,
  faMap,
  faShieldHalved,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";

export default function ServicesSection() {
  return (
    <>
      {/* testimonials section */}
      <div id="services" className="self-stretch" >
        <div className="py-[80px] flex flex-col items-center justify-center bg-gray-50_01 md:py-5" >
          <div className="container-xs gap-[30px] flex flex-col md:px-5" >
            <div className="mr-[286px] ml-[296px] flex flex-col items-center md:mx-0" >
              <Text
                size="textxs"
                as="p"
                className="text-[16px] font-medium text-teal-a700"
              >
                SERVICES
              </Text>
              <Text
                size="text2xl"
                as="p"
                className="sm:text-[32px] md:text-[38px] text-[42px] mt-1.5 font-ekselldisplay2 font-medium capitalize text-blue_gray-900"
              >
                Your Perfect Stay Awaits
              </Text>
              <Text
                size="textxs"
                as="p"
                className="text-[16px] mt-[18px] self-stretch text-center font-normal leading-7 text-blue_gray-500"
              >
                We offer top-notch security, 24/7 room service, a fine
                restaurant, and helpful tourist guide support, ensuring a
                comfortable and memorable experience.
              </Text>
            </div>

            <div className="bg-[url(/public/images/Map.png)] h-[518px] flex items-center justify-center bg-cover bg-no-repeat p-10 md:h-auto sm:p-5">
              <div className="w-[90%] mb-5 flex items-start justify-center md:w-full md:flex-col">
                <div className="flex-1 self-center px-1 md:self-stretch">
                  <div className="mx-[92px] flex items-start justify-between gap-5 md:mx-0">
                    <div className="rounded-[30px] border-[3px] w-[12%] border-solid border-white-a700 bg-white-a700">
                      <Img
                        src="images/frame2.png"
                        alt="Featured Image"
                        className="rounded-[30px] h-[60px] w-full object-cover md:h-auto"
                      />
                    </div>
                    <div className="rounded-full border-[3px] mr-[116px] w-[100px] h-[100px] self-center border-solid border-white-a700 bg-white-a700">
                      <div className="w-full h-full rounded-full overflow-hidden">
                        <Img
                          src="images/frame.png"
                          alt="Thumbnail Image"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-[30px] mr-2 flex items-start justify-between gap-5 md:mr-0 md:flex-col">
                    <div className="rounded-[30px] border-[3px] mb-5 w-[8%] self-end border-solid border-white-a700 bg-white-a700 md:w-full md:self-auto">
                      <Img
                        src="images/frame4.png"
                        alt="Profile Image"
                        className="rounded-[30px] h-[60px] w-full object-cover md:h-auto"
                      />
                    </div>
                    <Img
                      src="images/frame3.png"
                      alt="Large Image"
                      className="rounded-[24px] w-[50px] h-[50px] mt-3 object-cover md:w-full"
                    />
                    <div className="rounded-[10px] p-[30px] w-[68%] flex flex-col items-center gap-4 self-center bg-white-a700 md:w-full sm:p-5">
                      <Text
                        size="text2xl"
                        as="p"
                        className="text-[20px] font-semibold text-[#002248] mb-4 text-center"
                      >
                        Strive Only For The Best.
                      </Text>

                      <div className="flex flex-row justify-center gap-10">
                        {/* High Class Security */}
                        <div className="flex flex-col items-center gap-2">
                          <div className="rounded-full bg-blue-100 p-4 flex items-center justify-center">
                            <FontAwesomeIcon
                              icon={faShieldHalved}
                              size="2x"
                              className="text-blue-400"
                            />
                          </div>
                          <Text
                            size="textmd"
                            as="p"
                            className="font-medium text-[#697687] text-center"
                          >
                            High Security
                          </Text>
                        </div>

                        {/* 24 Hours Room Service */}
                        <div className="flex flex-col items-center gap-2">
                          <div className="rounded-full bg-pink-100 p-4 flex items-center justify-center">
                            <FontAwesomeIcon
                              icon={faClockRotateLeft}
                              size="2x"
                              className="text-pink-400"
                            />
                          </div>
                          <Text
                            size="textmd"
                            as="p"
                            className="font-medium text-[#697687] text-center"
                          >
                            24 Hours Service
                          </Text>
                        </div>

                        {/* Restaurant */}
                        <div className="flex flex-col items-center gap-2">
                          <div className="rounded-full bg-purple-100 p-4 flex items-center justify-center">
                            <FontAwesomeIcon
                              icon={faUtensils}
                              size="2x"
                              className="text-purple-400"
                            />
                          </div>
                          <Text
                            size="textmd"
                            as="p"
                            className="font-medium text-[#697687] text-center"
                          >
                            Restaurant
                          </Text>
                        </div>

                        {/* Tourist Guide Support */}
                        <div className="flex flex-col items-center gap-2">
                          <div className="rounded-full bg-red-100 p-4 flex items-center justify-center">
                            <FontAwesomeIcon
                              icon={faMap}
                              size="2x"
                              className="text-red-400"
                            />
                          </div>
                          <Text
                            size="textmd"
                            as="p"
                            className="font-medium text-[#697687] text-center"
                          >
                            Tourist Support
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mx-[132px] mt-[-2px] relative flex items-center md:mx-0">
                    <div className="rounded-[30px] border-[3px] w-[12%] border-solid border-white-a700 bg-white-a700">
                      <Img
                        src="images/frame5.png"
                        alt="Another Image"
                        className="rounded-[30px] h-[60px] w-full object-cover md:h-auto"
                      />
                    </div>
                  </div>
                </div>
                <div className="sm:gap-[88px] md:gap-[132px] mb-[42px] w-[14%] ml-2.5 flex flex-col items-start gap-44 self-end md:ml-0 md:w-full md:self-auto">
                  <div className="rounded-[30px] border-[3px] w-[50%] ml-6 border-solid border-white-a700 bg-white-a700 md:ml-0 md:w-full">
                    <Img
                      src="images/frame6.png"
                      alt="Promo Image"
                      className="rounded-[30px] h-[60px] w-full object-cover md:h-auto"
                    />
                  </div>
                  <div className="rounded-[30px] border-[3px] w-[42%] self-end border-solid border-white-a700 bg-white-a700 md:w-full">
                    <Img
                      src="images/frame7.png"
                      alt="Secondary Promo Image"
                      className="rounded-[30px] h-[60px] w-full object-cover md:h-auto"
                    />
                  </div>
                </div>
                <Img
                  src="images/frame8.png"
                  alt="Banner Image"
                  className="rounded-[24px] ml-[22px] w-[50px] object-cover md:ml-0 md:w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
