import Image from "next/image";
import React from "react";

type Props = {
  showSignUp: boolean;
  setShowSignUp: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Hero({}: Props) {
  return (
    <div
      className={
        "bg-dark-grey w-full md:h-full bg-red-700 flex md:flex-row flex-col md:flex-grow text-lg"
      }
      style={{ height: "1000px" }}
    >
      <div
        className={
          "flex flex-col justify-center items-center md:w-1/2 w-full h-full md:pl-64"
        }
      >
        <h2 className="text-3xl md:text-4xl md:p-4 text-center text-white">
          WELCOME TO
        </h2>
        <h1 className="text-4xl md:text-5xl p-4 text-center font-bold from-grad-green to-grad-blue bg-gradient-to-r bg-clip-text text-black text-opacity-0">
          WANNAPLAY
        </h1>
        <span className="text:xl md:text-2xl md:p-4 px-4 md:px-0 text-white text-center">
          Music lover? Sign up & connect with musicians near you!
        </span>
        <div className="group mt-8 rounded-xl my-3 mb-6 md:mb-3 h-14 md:h-16 md:w-36 bg-gradient-to-r p-[3px] from-[#02FFC2] via-[#03E1FF] to-[#02FFC2]">
          <div className="flex flex-col h-full bg-dark-grey p-6  rounded-lg justify-center items-center group-hover:cursor-poUpter ">
            <span className=" text-white group-hover:bg-gradient-to-r group-hover:from-grad-green group-hover:to-grad-blue group-hover:bg-clip-text group-hover:text-opacity-0">
              SIGN UP
            </span>
          </div>
        </div>
      </div>
      <div
        className={
          "flex flex-column md:w-1/2 w-full h-full justify-center items-center"
        }
      >
        <div className="md:w-[500px] h-full w-72 relative">
          <Image
            src="/wannaplay_app.png"
            fill={true}
            alt="wannaplay app image"
          />
        </div>
      </div>
    </div>
  );
}
