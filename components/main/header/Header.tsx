import Image from "next/image";
import React from "react";
import { LuMusic2 } from "react-icons/lu";
import { RiHomeLine } from "react-icons/ri";

type Props = {};

export default function Header({}: Props) {
  return (
    <header
      style={{ margin: 0, padding: 0 }}
      className="w-full h-[100px] bg-black flex items-center"
    >
      <div
        className={
          "h-full md:w-1/3 flex items-center md:justify-center ml-5 relative"
        }
      >
        <div className={"md:w-72 md:h-12 w-56 h-10 md:ml-6 flex relative"}>
          <Image src="/wannaplay.png" fill={true} alt="Logo" />
        </div>
      </div>
      <div className="flex justify-between h-full w-2/3 items-center">
        <div className="flex justify-around items-center w-1/2">
          <RiHomeLine color="white" size="2.5rem" />
          <LuMusic2 color="white" size="2.5rem" />
        </div>
        <div className="flex justify-center  items-center w-1/2"></div>
      </div>
    </header>
  );
}
