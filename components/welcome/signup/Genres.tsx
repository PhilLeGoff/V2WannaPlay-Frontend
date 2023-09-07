import { useAddToArray, useDeleteFromArray } from "@/hooks/useArrays";
import { UserData } from "@/interfaces/UserData";
import { popularGenres } from "@/public/genres";
import React, { useState } from "react";
import { GoTriangleUp } from "react-icons/go";
import SelectionBox from "./SelectionBox";

type Props = {
  userData: UserData;
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
};

export default function Genres({ userData, setUserData }: Props) {
  const [showPlayed, setShowPlayed] = useState<boolean>(false);
  const [showLiked, setShowLiked] = useState<boolean>(false);

  const selectedList = (list: string[]) => {
    return (
      <div className="w-[240px] h-[30px] flex justify-start align-center overflow-x-scroll no-scrollbar ">
        {list.map((e: string) => (
          <div className="text-white pb-2 p-1 h-full w-min text-sm border-2 border-white rounded-md">
            {e}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="md:w-full md:h-[100px] flex md:flex-row flex-col justify-around align-center">
      <div>
        {selectedList(userData.genresPlayed)}
        <div
          className={`rounded-sm cursor-pointer md:h-[50px] md:w-[250px] h-[45px] w-[250px] flex flex-col justify-center items-center  bg-grey hover:bg-gradient-to-r hover:from-grad-green hover:to-grad-blue focus-within:bg-gradient-to-r focus-within:from-grad-green focus-within:to-grad-blue`}
        >
          <div
            className="p-1 relative flex justify-around items-center rounded-sm group outline-none md:h-[46px] md:w-[246px] h-[41px] w-[246px] bg-dark-grey text-white text-lg "
            onClick={() => setShowPlayed(!showPlayed)}
          >
            Genres Played
            <GoTriangleUp
              size="30px"
              className={`${
                showPlayed ? "rotate-180" : "rotate-0"
              } transition-all`}
            />
          </div>
        </div>
        {showPlayed && (
          <SelectionBox
            choices={popularGenres}
            selectedArray={userData.genresPlayed}
            arrayName="genresPlayed"
            setFunction={setUserData}
            setDisplay={setShowPlayed}
          />
        )}
      </div>
      <div>
        {selectedList(userData.genresLiked)}
        <div
          className={`rounded-sm cursor-pointer md:h-[50px] md:w-[250px] h-[45px] w-[250px] flex flex-col justify-center items-center  bg-grey hover:bg-gradient-to-r hover:from-grad-green hover:to-grad-blue focus-within:bg-gradient-to-r focus-within:from-grad-green focus-within:to-grad-blue`}
        >
          <div
            className="p-1 relative flex justify-around items-center rounded-sm group outline-none md:h-[46px] md:w-[246px] h-[41px] w-[246px] bg-dark-grey text-white text-lg "
            onClick={() => setShowLiked(!showLiked)}
          >
            Genres Liked
            <GoTriangleUp
              size="30px"
              className={`${
                showPlayed ? "rotate-180" : "rotate-0"
              } transition-all`}
            />
          </div>
        </div>
        {showLiked && (
          <SelectionBox
            choices={popularGenres}
            selectedArray={userData.genresLiked}
            arrayName="genresLiked"
            setFunction={setUserData}
            setDisplay={setShowLiked}
          />
        )}
      </div>
    </div>
  );
}
