import Image from "next/image";
import React from "react";


type Props = {};

export default function Header({}: Props) {
  return (
    <div
      className={"h-1/6 w-full bg-black flex justify-between"}
      style={{ height: "14%" }}
    >
      <ul className={"h-full w-1/3 flex justify-around items-center"}>
        <li className={" text-white font-normal"}>HOME</li>
        <li className={" text-white font-normal"}>ABOUT</li>
      </ul>
      {/* <div className={"h-full flex justify-center"}> */}
      <div className={"h-full w-1/3 flex justify-center"}>
        <Image
          className={"self-center"}
          src="/wannaplay.png"
          width={300}
          height={"10"}
          alt="Logo"
        />
      </div>
      {/* </div> */}
      <div className={"h-full w-1/3 flex justify-center items-center"}>
        <div className="rounded-xl  h-2/5  bg-gradient-to-r p-[3px] from-[#02FFC2] via-[#03E1FF] to-[#02FFC2]">
          <div className="flex flex-col h-full bg-black p-6 text-white rounded-lg justify-center items-center ">
            SIGN IN
          </div>
        </div>
      </div>
    </div>
  );
}
