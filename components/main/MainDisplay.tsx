import React, { useEffect, useState } from "react";
import Button from "../Button";
import SocialMain from "./social/SocialMain";

type Props = {};

export default function MainDisplay({}: Props) {
  const [activeDiv, setActiveDiv] = useState(1);

  const renderButtons = () => {
    return (
      <div className="w-full md:hidden h-[50px] absolute self-end flex justify-around items-center">
        {activeDiv !== 1 && (
          <Button buttonName="Social" onClickFunction={() => setActiveDiv(1)} />
        )}
        {activeDiv !== 2 && (
          <Button buttonName="Map" onClickFunction={() => setActiveDiv(2)} />
        )}
        {activeDiv !== 3 && (
          <Button buttonName="Search" onClickFunction={() => setActiveDiv(3)} />
        )}
      </div>
    );
  };

  return (
    <div className="flex-grow bg-blue flex" style={{ margin: 0, padding: 0 }}>
      <div
        className={`h-full flex justify-center md:block items-center md:w-[400px] w-full bg-grey ${
          activeDiv !== 1 ? "hidden" : "block"
        }`}
      >
        <SocialMain />
      </div>
      <div
        className={`h-full flex justify-center md:block items-center md:flex-grow w-full md:w-auto bg-grad-green ${
          activeDiv !== 2 ? "hidden" : "block"
        }
      `}
      >
        Map
      </div>
      <div
        className={`h-full flex justify-center md:block items-center md:w-[400px] w-full bg-green ${
          activeDiv !== 3 ? "hidden" : "block"
        }`}
      >
        Search
      </div>
      {renderButtons()}
    </div>
  );
}
