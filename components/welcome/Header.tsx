import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const iconsStyle = { color: "white", fontSize: "1.5em" };

  return (
    <header
      className={
        "h-1/6 w-full bg-black flex md:justify-between items-center text-lg"
      }
      style={{ height: "14%" }}
    >
      <div className={"h-full md:w-1/3 flex items-center md:justify-center"}>
        <div className={"md:w-80 md:h-16 w-64 h-14 md:ml-6 flex relative"}>
          <Image src="/wannaplay.png" fill={true} alt="Logo" />
        </div>
      </div>
      {/* <section className={"h-full w-1/3 flex justify-around items-center"}>
        <Link className={" text-white font-normal"} href="home">
          HOME
        </Link>
        <Link className={" text-white font-normal"} href="about">
          ABOUT
        </Link>
      </section> */}
      {/* <div className={"h-full flex justify-center"}> */}
      <div
        className={
          "h-full md:w-1/3 hidden md:flex md:justify-around items-center md:static absolute"
        }
      >
        <Link className={" text-white font-normal"} href="home">
          HOME
        </Link>
        <Link className={" text-white font-normal"} href="about">
          ABOUT
        </Link>
        <div className="rounded-xl  h-2/5  bg-gradient-to-r p-[3px] from-[#02FFC2] via-[#03E1FF] to-[#02FFC2]">
          <div className="flex flex-col h-full bg-black p-6 text-white rounded-lg justify-center items-center ">
            SIGN IN
          </div>
        </div>
      </div>
      <div className="md:hidden">
        {/* <FiMenu /> <IoClose /> */}
        {menuOpen ? (
          <FiMenu
            onClick={() => setMenuOpen(!menuOpen)}
            color="white"
            size="2.5rem"
          />
        ) : (
          <IoClose
            onClick={() => setMenuOpen(!menuOpen)}
            color="white"
            size="2.5rem"
          />
        )}
      </div>
    </header>
  );
}
