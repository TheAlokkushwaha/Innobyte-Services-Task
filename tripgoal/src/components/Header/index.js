import React, { useState } from "react";
import { Button, Text } from "./..";

export default function Header({ ...props }) {
  const [selected, setSelected] = useState("");

  const handleLinkClick = (link) => {
    setSelected(link);
  };

  return (
    <header
      {...props}
      className={`${props.className} flex sm:flex-col justify-between items-center gap-5`}
    >
      <div className="flex lg:flex-1">
        <a
          href="#"
          className="-m-1.5 p-1.5"
          onClick={(e) => {
            e.preventDefault(); 
            window.location.reload();
          }}
        >
          <span className="text-[#3685FB] text-2xl font-medium ">Kingsukh</span>
          <span className="text-[#002248] text-2xl font-medium "> Guest</span>
          <span className="text-[#00B3A0] text-2xl font-medium "> House</span>
        </a>
      </div>

      <ul className="flex flex-wrap gap-10">
        {["Home", "About", "Services", "Rooms", "Gallery", "Contact"].map(
          (item) => {
            const sectionId = item.toLowerCase(); 
            return (
              <li key={item}>
                <a
                  href={`#${sectionId}`}
                  className="cursor-pointer"
                  onClick={() => handleLinkClick(item)}
                >
                  <Text
                    size="textlg"
                    as="p"
                    className={`text-[16px] font-normal ${
                      selected === item
                        ? "text-blue-a200"
                        : "text-blue_gray-900"
                    } hover:text-blue-a200`}
                  >
                    {item}
                  </Text>
                </a>
              </li>
            );
          }
        )}
      </ul>

      <Button
        size="md"
        shape="round"
        className="rounded-[10px] min-w-[120px] px-7 font-medium sm:px-5"
      >
        BOOK NOW
      </Button>
    </header>
  );
}
