import { Button, Text, Img, Heading } from "../../components";
import React from "react";

export default function KingsukhLandingMainSection() {
  return (
    <>
      {/* Trip Goal Landing Main Section */}
      <div className="flex justify-center self-stretch">
        <div className="container-xs flex items-start justify-center md:flex-col md:px-5">
          <div className="h-[596px] relative flex-1 self-center md:w-full md:flex-none md:self-stretch">
            <div className="rounded-[200px] border-[10px] w-[61%] absolute left-0 top-0 m-auto border-solid border-[#ffffff] bg-gray-900">
              <Img
                src="images/baranti.webp"
                alt="First Image"
                className="rounded-[200px] h-[540px] w-full object-cover md:h-auto"
              />
            </div>

            <div className="rounded-[160px] border-[10px] right-[12%] bottom-[-1px] w-[49%] absolute m-auto border-solid border-[#ffffff] bg-gray-900">
              <Img
                src="images/service.jpg"
                alt="Second Image"
                className="rounded-[160px] h-[430px] w-full object-cover md:h-auto"
              />
            </div>
          </div>

          <div className="mt-[82px] w-[44%] flex flex-col items-start md:w-full">
            <Text
              size="textxs"
              as="p"
              className="text-[16px] font-medium text-teal-a700"
            >
              Simple - Unique - Friendly
            </Text>

            <div className="h-[150px] relative mt-3 content-center self-stretch md:h-auto">
              <Heading
                size="headingmd"
                as="h1"
                className="sm:text-[46px] md:text-[52px] leading-[72px] text-[58px] mx-auto w-full font-ekselldisplay2 font-semibold capitalize text-blue-gray-900"
              >
                Make Yourself At Home In Our Guest House.
              </Heading>

              <Img
                src="images/Group.png"
                alt="Settings Image"
                className="right-[55%] bottom-[-50px] w-[40px] h-[40px] absolute m-auto"
              />
            </div>
            <Button
              size="md"
              shape="round"
              className="rounded-[10px] min-w-[120px] px-7 font-medium mt-20 sm:px-5"
            >
              BOOK NOW
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
