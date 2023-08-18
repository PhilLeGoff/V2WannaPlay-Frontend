import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

type Props = {
  showSignIn: boolean;
  setShowSignIn: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Header({}: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={
        "w-full md:h-32 h-24 bg-black flex justify-between items-center text-lg"
      }
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
      <div
        className={`md:h-full h-58 md:w-1/3 w-full ${
          menuOpen ? "static" : "hidden"
        } md:flex md:mr-10 md:justify-around items-center md:static absolute flex flex-col md:mt-0 top-24 left-0 bg-black md:flex-row md:space-x-4 md:bg-opacity-100 bg-opacity-90 transition-all ease-in duration-100`}
      >
        <Link
          className={
            "my-3  text-white hover:bg-gradient-to-r hover:from-grad-green hover:to-grad-blue hover:bg-clip-text hover:text-opacity-0 font-normal"
          }
          href="home"
        >
          HOME
        </Link>
        <Link
          className={
            "my-3  text-white hover:bg-gradient-to-r hover:from-grad-green hover:to-grad-blue hover:bg-clip-text hover:text-opacity-0 font-normal"
          }
          href="about"
        >
          ABOUT
        </Link>
        <div className="group rounded-xl my-3 mb-6 md:mb-3 h-14 bg-gradient-to-r p-[3px] from-[#02FFC2] via-[#03E1FF] to-[#02FFC2]">
          <div className="flex flex-col h-full bg-black p-6 rounded-lg justify-center items-center ">
            <span className=" text-white group-hover:bg-gradient-to-r group-hover:from-grad-green group-hover:to-grad-blue group-hover:bg-clip-text group-hover:text-opacity-0">
              SIGN IN
            </span>
          </div>
        </div>
      </div>
      <div className="md:hidden mr-5">
        {menuOpen ? (
          <IoClose
            onClick={() => setMenuOpen(!menuOpen)}
            color="white"
            size="2.5rem"
          />
        ) : (
          <FiMenu
            onClick={() => setMenuOpen(!menuOpen)}
            color="white"
            size="2.5rem"
          />
        )}
      </div>
    </header>
  );
}
