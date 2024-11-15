import { Button, SelectBox } from "../../components";
import { IoIosArrowDown } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import React from "react";

// Dropdown options
const dropDownOptions = [
  { label: "Option 1", value: "option1" },
  { label: "Option 2", value: "option2" },
  { label: "Option 3", value: "option3" },
];

export default function BookingOptionsSection() {
  return (
    <>
      {/* Booking Options Section */}
      <div className="z-[2] mt-[-72px] relative flex justify-center">
        <div className="container-xs flex justify-center px-14 md:px-5">
          <div className="rounded-[30px] w-[92%] flex items-center justify-center gap-11 bg-gray-50_02 shadow-xs md:w-full md:flex-col">
            <div className="flex flex-1 items-center justify-end md:flex-col md:self-stretch md:px-5">
              {/* First SelectBox */}
              <div className="w-[30%] flex flex-col items-start gap-3 md:w-full">
                <SelectBox
                  size="sm"
                  shape="square"
                  indicator={
                    <IoIosArrowDown
                      alt="Arrow Down"
                      className="h-[16px] w-[16px]"
                    />
                  }
                  name="Person Dropdown"
                  placeholder={`Total Person`}
                  options={dropDownOptions}
                  className="w-[73%] gap-2.5 font-roboto2 font-medium text-blue_gray-900"
                />
              </div>
              {/* Second SelectBox */}
              <div className="w-[38%] flex flex-col items-start gap-2.5 md:w-full">
                <SelectBox
                  size="sm"
                  shape="square"
                  indicator={
                    <IoIosArrowDown
                      alt="Arrow Down"
                      className="h-[16px] w-[16px]"
                    />
                  }
                  name="Category Dropdown"
                  placeholder={`Your Category`}
                  options={dropDownOptions}
                  className="w-[65%] gap-2.5 self-stretch font-medium text-blue_gray-900"
                />
              </div>
              {/* Third SelectBox */}
              <div className="w-[20%] flex flex-col items-start gap-3 md:w-full">
                <SelectBox
                  size="sm"
                  shape="square"
                  indicator={
                    <IoIosArrowDown
                      alt="Arrow Down"
                      className="h-[16px] w-[16px]"
                    />
                  }
                  name="Location Dropdown"
                  placeholder={`Location`}
                  options={dropDownOptions}
                  className="w-[82%] gap-2.5 self-stretch font-medium text-blue_gray-900"
                />
              </div>
            </div>
            {/* Booking Button Section */}
            <div className="rounded-br-[30px] rounded-tr-[30px] p-[38px] w-[22%] flex flex-col items-center gap-3.5 bg-blue-a200 shadow-sm md:w-full md:px-5 sm:p-5">
              <SlCalender className="text-[#ffffff] text-2xl" />
              <Button
                size="headingxs"
                as="h2"
                className="text-[18px] font-bold text-white-a700"
              >
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
