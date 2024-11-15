import { Text, Button } from "../../components";
import React from "react";

export default function KingsukhLandingSection() {

  return (
    <>
      {/* Trip goal landing main section */}
      <div className="self-stretch">
        <div>
          <div className="z-[4] relative flex flex-col items-center">
            <div className="h-[690px] relative self-stretch bg-blue_gray-900">
              <div className="bg-[url(/public/images/out.jpg)] py-[284px] pl-[196px] w-[74%] h-[690px] absolute bottom-0 left-0 top-0 my-auto flex items-center bg-cover bg-no-repeat pr-14 md:h-auto md:p-5">
              </div>
              <div className="bg-[url(/public/images/Vector.png)] py-[168px] pr-[142px] w-[70%] h-[690px] absolute bottom-0 right-0 top-0 my-auto flex items-center justify-end bg-cover bg-no-repeat pl-14 md:h-auto md:p-5">
                <div className="w-[56%] flex flex-col items-start md:w-full">
                  <Text
                    size="textxs"
                    as="p"
                    className="text-[16px] font-medium text-teal-a700"
                  >
                    About Us
                  </Text>
                  <Text
                    size="text2x1"
                    as="p"
                    className="sm:text-[32px] md:text-[38px] leading-[52px] text-[42px] mt-1.5 w-full font-ekselldisplay2 font-medium capitalize text-blue_gray-900"
                  >
                    The Best Holidays Start Here!
                  </Text>
                  <Text
                    size="textxs"
                    as="p"
                    className="text-[16px] mt-5 w-full font-normal leading-7 text-blue_gray-500"
                  >
                    Embark on a tranquil journey at our Kingsukh Guest House, enveloped by the scenic 
                    allure of Biharinath Hill, Baranti Hill, Susunia Hill, Joychandi Hill, Garhpanchkot, 
                    Baranti Dam, Maithon Dam, and the captivating Panchat Dam. Revel in the embrace of 
                    comfort, relish delightful meals, and unwind in our verdant garden oasis. Your ideal 
                    retreat beckons, promising a harmonious blend of nature's beauty and heartfelt hospitality. 
                    Explore the hidden gems of Purulia, creating memories that linger long after your stay.
                  </Text>
                  <Button
                    shape="round"
                    className="rounded-[10px] min-w-[170px] px-[34px] mt-[35px] font-bold sm:px-5"
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
