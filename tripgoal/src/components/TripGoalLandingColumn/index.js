import React from "react";
import { Img } from "./..";

export default function TripGoalLandingColumn({ imagetwentysix = "images/img_image_26.png", ...props }) {
  return (
    <div
      {...props} 
      className={`${props.className} flex flex-col items-center w-[320px] md:px-5 rotate-[-180deg] border-white-a700 border-[10px] border-solid bg-gray-900`}
    >
      <Img 
        src={imagetwentysix} 
        alt="Image" 
        className="rounded-[160px] h-[456px] w-full object-cover" 
      />
    </div>
  );
}