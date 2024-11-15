import { Text, Img, Button } from "..";
import React from "react";

export default function RoomColumn({
  chatone = "images/img_chat.png",
  telluswhat = "Tell us what you want to do",
  filloutatwo = "Fill out a 2-minute questionnaire about how you like to travel",
  filloutathree = "Starting from:",
  filloutafour = "Rs. 1000/night",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center justify-center w-[32%] md:w-full gap-[50px] px-6 py-6 md:p-5 border-gray-50_01 border-4 border-solid bg-white-a700 rounded-[10px]`}
    >
      <Img src={chatone} alt="Chat Icon" className="rounded-t-lg" />

      <div className="flex flex-col gap-5 self-stretch">
        <Text
          size="textxl"
          as="p"
          className="text-[20px] font-semibold text-blue_gray-500"
        >
          {telluswhat}
        </Text>

        <Text
          size="textxs"
          as="p"
          className="text-[16px] self-stretch font-normal leading-7 text-blue_gray-500"
        >
          {filloutatwo}
        </Text>

        <Text
          size="textxs"
          as="p"
          className="text-[16px] self-stretch font-medium text-blue_gray-500"
        >
          {filloutathree}
          <span className="text-[#000000] ml-2 font-semibold">
            {filloutafour}
          </span>
        </Text>
        <Button>BOOK NOW</Button>
      </div>
    </div>
  );
}
