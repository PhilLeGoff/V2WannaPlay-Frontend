import Image from "next/image";
import React, { useEffect } from "react";
import Button from "../Button";
import SignIn from "./SignIn";
import SignUp from "./signup/SignUp";

type Props = {
  showSignUp: boolean;
  setShowSignUp: React.Dispatch<React.SetStateAction<boolean>>;
  showSignIn: boolean;
  setShowSignIn: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Hero({
  showSignIn,
  setShowSignIn,
  showSignUp,
  setShowSignUp,
}: Props) {
  return (
    <div
      className={
        "relative bg-dark-grey w-full md:h-full bg-red-700 flex md:flex-row flex-col md:flex-grow text-lg"
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
        <Button
          buttonName="SIGN UP"
          onClickFunction={() => setShowSignUp(true)}
        />
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
      {showSignUp && <SignUp setShowSignUp={setShowSignUp} />}
      {showSignIn && <SignIn setShowSignIn={setShowSignIn} />}
    </div>
  );
}
