import Header from "@/components/welcome/Header";
import Hero from "@/components/welcome/Hero";
import React from "react";

export default function Welcome() {
  return (
    <div className={"h-screen w-full flex flex-col"}>
      <Header />
      <Hero />
    </div>
  );
}
