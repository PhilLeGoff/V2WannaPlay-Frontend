import Header from "@/components/welcome/Header";
import Hero from "@/components/welcome/Hero";
import React, { useState } from "react";

export default function Welcome() {
  const [showSignUp, setShowSignUp] = useState<boolean>(false);
  const [showSignIn, setShowSignIn] = useState<boolean>(false);

  return (
    <div className={"md:h-screen w-full flex flex-col"}>
      <Header showSignIn={showSignIn} setShowSignIn={setShowSignIn} />
      <Hero showSignUp={showSignUp} setShowSignUp={setShowSignUp} />
    </div>
  );
}
