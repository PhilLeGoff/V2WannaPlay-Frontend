import MainDisplay from "@/components/main/MainDisplay";
import Header from "@/components/main/header/Header";
import React from "react";

type Props = {};

export default function Main({}: Props) {
  return (
    <div className={"grid grid-rows-[1fr,16fr] h-screen"}>
      <Header />
      <MainDisplay />
    </div>
  );
}
