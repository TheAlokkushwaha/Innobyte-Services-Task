import { Button, Text } from "../../components";
import TripGoalLandingColumn from "../../components/TripGoalLandingColumn";
import React, { Suspense } from "react";

const imageGalleryList = [
  { imagetwentysix: "images/img_image_26.png" },
  { imagetwentysix: "images/img_image_22.png" },
  { imagetwentysix: "images/img_image_27.png" },
  { imagetwentysix: "images/img_image_23.png" },
  { imagetwentysix: "images/img_image_21.png" },
];

export default function SocialMediaAndGallerySection() {
  return (
    <>
      {/* Social media and gallery section */}
      <div className="sm:gap-[35px] md:gap-[52px] gap-[70px] flex flex-col overflow-auto">
        <div className="container-xs self-center md:px-5">
          <div>
            <div className="flex flex-col items-start gap-1.5">
              <Text
                size="textxs"
                as="p"
                className="text-[16px] font-medium text-teal-a700"
              >
                Social Feed
              </Text>
              <div className="flex items-center justify-between gap-5 self-stretch md:flex-col">
                <Text
                  size="text2x1"
                  as="p"
                  className="sm:text-[32px] md:text-[38px] leading-[52px] text-[42px] w-[38%] font-ekselldisplay2 font-medium capitalize text-blue_gray-900 md:w-full"
                >
                  Check Our Instagram Profile
                </Text>
                <Button
                  shape="round"
                  className="rounded-[10px] min-w-[170px] px-[34px] font-bold sm:px-5"
                >
                  Follow Us
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="gap-[50px] flex overflow-x-scroll md:flex-col">
          <Suspense fallback={<div>Loading feed...</div>}>
            {imageGalleryList.map((d, index) => (
              <TripGoalLandingColumn
                {...d}
                key={"productList" + index}
                className="rounded-[160px]"
              />
            ))}
          </Suspense>
        </div>
      </div>
    </>
  );
}
