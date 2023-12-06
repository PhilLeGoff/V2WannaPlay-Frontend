import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import Button from "../Button";

type Props = {
  showSignIn: boolean;
  setShowSignIn: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Header({ setShowSignIn }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={
        "w-full md:h-32 h-24 bg-light-black flex justify-between items-center text-lg border-b-2 border-grey"
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
        className={`md:h-full h-58 md:w-1/3 w-full z-30
        ${menuOpen ? "static" : "hidden"} 
          md:flex md:mr-10 md:justify-around items-center md:static absolute flex flex-col md:mt-0 top-24 left-0 bg-light-dark md:flex-row md:space-x-4 md:bg-black bg-light-black md:bg-opacity-100 bg-opacity-60 `}
      >
        <Link
          className={
            "my-3 text-white hover:bg-gradient-to-r hover:from-grad-green hover:to-grad-blue hover:bg-clip-text hover:text-opacity-0 font-normal"
          }
          href="home"
        >
          HOME
        </Link>
        <Link
          className={
            "my-3 text-white hover:bg-gradient-to-r hover:from-grad-green hover:to-grad-blue hover:bg-clip-text hover:text-opacity-0 font-normal"
          }
          href="about"
        >
          ABOUT
        </Link>
        <Button
          buttonName="SIGN IN"
          onClickFunction={() => {
            setShowSignIn(true);
            setMenuOpen(!menuOpen);
          }}
        />
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
