import React from "react";
import Header from "./header/Header";

type Props = {};

export default function Main({}: Props) {
  return (
    <div className="w-full h-full flex flex-col justify-start">
      <Header />
    </div>
  );
}
