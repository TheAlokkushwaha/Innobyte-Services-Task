import { Text, RatingBar, Img, Slider, Button } from "../../components";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function HighlightsSection() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  // Array to hold image and content data
  const imageData = [
    {
      src: "images/ayodhya.webp",
      title: "Ayodhya View",
      location: "India",
    },
    {
      src: "images/baranti.webp",
      title: "Baranti view",
      location: "Bengal",
    },
    {
      src: "images/flower.jpg",
      title: "Flowers",
      location: "India",
    },
    {
      src: "images/small.jpg",
      title: "Small Room",
      location: "Kingsukh",
    },
    {
      src: "images/large.jpg",
      title: "Large Room",
      location: "Kingsukh",
    },
    {
      src: "images/mithonDam.webp",
      title: "Maithon Dam",
      location: "Jharkhand",
    },
    {
      src: "images/room1.jpg",
      title: "Room",
      location: "Kingsukh",
    },
    {
      src: "images/out.jpg",
      title: "Kingsukh Guest House",
      location: "Bengal",
    },
    {
      src: "images/palash.webp",
      title: "Outside View",
      location: "India",
    },
    {
      src: "images/recep.jpg",
      title: "Room",
      location: "Kingsukh",
    },
  ];

  return (
    <>
      {/* trip highlights section */}
      <div id="gallery" className="self-stretch">
        <div className="py-[116px] flex flex-col items-center justify-center md:py-5">
          <div className="container-xs sm:gap-[35px] md:gap-[52px] gap-[70px] flex flex-col md:px-5">
            <div className="flex items-center justify-between gap-5 md:flex-col">
              <div className="flex flex-1 flex-col items-start md:self-stretch">
                <Text
                  size="textxs"
                  as="p"
                  className="text-[16px] font-medium text-teal-a700"
                >
                  Gallery
                </Text>
                <Text
                  size="text2xl"
                  as="p"
                  className="sm:text-[32px] md:text-[38px] text-[42px] mt-1.5 font-ekselldisplay2 font-medium capitalize text-blue_gray-900"
                >
                  Discover Our Guest House
                </Text>
                <Text
                  size="textxs"
                  as="p"
                  className="text-[16px] mt-[18px] w-[66%] font-normal leading-7 text-blue_gray-500 md:w-full"
                >
                  We've welcomed global travelers to our warm, inviting guest
                  house. Explore our gallery to see cozy rooms, relaxing spaces,
                  and beautiful surroundings!
                </Text>
              </div>

              <div className="flex gap-2.5 self-end md:self-auto">
                <Button
                  onClick={() => {
                    sliderRef?.current?.slidePrev();
                  }}
                  size="sm"
                  className="rotate-[-180deg] w-[50px]"
                >
                  <FontAwesomeIcon icon={faCircleChevronRight} size="2x" />
                </Button>
                <Button
                  onClick={() => {
                    sliderRef?.current?.slideNext();
                  }}
                  size="sm"
                  className="w-[50px]"
                >
                  <FontAwesomeIcon icon={faCircleChevronRight} size="2x" />
                </Button>
              </div>
            </div>

            <div className="gap-[30px] mx-auto flex w-full md:mx-0 md:flex-col">
              <Slider
                autoPlay
                autoPlayInterval={2000}
                responsive={{
                  0: { items: 1 },
                  551: { items: 1 },
                  1051: { items: 3 },
                }}
                disableDotsControls
                activeIndex={sliderState}
                onSlideChanged={(e) => {
                  setSliderState(e?.item);
                }}
                ref={sliderRef}
                items={imageData.map((item, index) => (
                  <React.Fragment key={index}>
                    <div className="px-[15px]">
                      <div className="rounded-[20px] border-[6px] h-[500px] relative content-center border-solid border-white-a700 bg-blue_gray-900 md:h-auto">
                        <Img
                          src={item.src}
                          alt={item.title}
                          className="rounded-[10px] h-[500px] mx-auto w-full flex-1 object-cover"
                        />
                        <div className="baliinforow_border rounded-[10px] mx-[30px] p-[18px] bottom-[30px] absolute left-0 right-0 my-auto flex-1 bg-blue_gray-900_4c md:mx-0">
                          <div className="flex items-center justify-between gap-5">
                            <div className="flex flex-col items-start gap-1">
                              <Text
                                size="textxl"
                                as="p"
                                className="text-[20px] font-ekselldisplay2 font-medium text-white-a700"
                              >
                                {item.title}
                              </Text>
                              <Text
                                size="textlg"
                                as="p"
                                className="text-[16px] font-medium text-white-a700"
                              >
                                {item.location}
                              </Text>
                            </div>
                            <div className="flex flex-col items-end gap-2 self-end">
                              <RatingBar
                                value={5}
                                isEditable={true}
                                color="#f4c729"
                                activeColor="#f4c729"
                                size={14}
                                className="flex gap-2.5"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
