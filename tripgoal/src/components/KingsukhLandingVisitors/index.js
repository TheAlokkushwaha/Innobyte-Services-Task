import { Text, Heading } from "..";
import React from "react";

export default function KingsukhLandingVisitors({ p10m = "10M+", visitors = "Visitors", ...props }) {
  return (
    <div
      {...props} 
      className={`${props.className} flex flex-col items-center w-full p-6 sm:p-5 border-gray-50_01 border-2 border-solid rounded-[10px]`}
    >
      <Heading size="headings" as="h2" className="text-[32px] font-ekselldisplay2 font-semibold text-blue-a200">
        {p10m}
      </Heading>
      <Text size="textmd" as="p" className="text-[14px] mb-2.5 font-medium text-blue_gray-900">
        {visitors}
      </Text>
    </div>
  );
}