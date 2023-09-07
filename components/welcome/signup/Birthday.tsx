import { UserData } from "@/interfaces/UserData";
import { days, months, years } from "@/public/birthday";
import React, { useState } from "react";
import { GoTriangleUp } from "react-icons/go";

type Props = {
  userData: UserData;
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
};

export default function Birthday({ userData, setUserData }: Props) {
  const [showDaySelector, setShowDaySelector] = useState<boolean>(false);
  const [showMonthSelector, setShowMonthSelector] = useState<boolean>(false);
  const [showYearSelector, setShowYearSelector] = useState<boolean>(false);

  const selectionBirthdayBox = (
    choices: string[],
    updatePart: string,
    setFunction: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    return choices.map((choice) => {
      return (
        <section
          className="
          "
          onClick={() => {
            updateBirthday(updatePart, choice);
            setFunction(false);
          }}
        >
          {choice}
        </section>
      );
    });
  };

  const updateBirthday = (partToUpdate: string, value: string) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      birthday: {
        ...prevUserData.birthday,
        [partToUpdate]: value,
      },
    }));
  };

  return (
    <div className="flex flex-row w-full justify-around md:px-16 md:items-center">
      <div>
        <div
          className={`rounded-sm cursor-pointer md:h-[50px] md:w-[80px] h-[45px] w-[75px] flex flex-col justify-center items-center  bg-grey hover:bg-gradient-to-r hover:from-grad-green hover:to-grad-blue focus-within:bg-gradient-to-r focus-within:from-grad-green focus-within:to-grad-blue`}
        >
          <div
            className="p-1 relative flex justify-around items-center rounded-sm group outline-none md:h-[46px] md:w-[76px] h-[41px] w-[71px] bg-dark-grey text-white text-lg "
            onClick={() => setShowDaySelector(!showDaySelector)}
          >
            {userData.birthday.day}
            <GoTriangleUp
              size="30px"
              className={`${
                showDaySelector ? "rotate-180" : "rotate-0"
              } transition-all`}
            />
          </div>
        </div>
        {showDaySelector && (
          <div className="pl-3 md:h-[150px] md:w-[80px] w-[75px] h-[130px] absolute flex flex-col bg-grey z-100 overflow-y-scroll rounded-b-md">
            {selectionBirthdayBox(days, "day", setShowDaySelector)}
          </div>
        )}
      </div>
      <div>
        <div
          className={`rounded-sm cursor-pointer md:h-[50px] md:w-[100px] h-[45px] w-[95px] flex flex-col justify-center items-center  bg-grey hover:bg-gradient-to-r hover:from-grad-green hover:to-grad-blue focus-within:bg-gradient-to-r focus-within:from-grad-green focus-within:to-grad-blue`}
        >
          <div
            className="p-1 relative flex justify-around items-center rounded-sm group outline-none md:h-[46px] md:w-[96px] h-[41px] w-[91px] bg-dark-grey text-white text-lg "
            onClick={() => setShowMonthSelector(!showMonthSelector)}
          >
            {userData.birthday.month}
            <GoTriangleUp
              size="30px"
              className={`${
                showMonthSelector ? "rotate-180" : "rotate-0"
              } transition-all`}
            />
          </div>
        </div>
        {showMonthSelector && (
          <div className="pl-3 md:h-[150px] md:w-[100px] w-[95px] h-[130px] absolute flex flex-col bg-grey z-100 overflow-y-scroll rounded-b-md">
            {selectionBirthdayBox(months, "month", setShowMonthSelector)}
          </div>
        )}
      </div>
      <div>
        <div
          className={`rounded-sm cursor-pointer md:h-[50px] md:w-[90px] h-[45px] w-[85px] flex flex-col justify-center items-center  bg-grey hover:bg-gradient-to-r hover:from-grad-green hover:to-grad-blue focus-within:bg-gradient-to-r focus-within:from-grad-green focus-within:to-grad-blue`}
        >
          <div
            className="p-1 relative flex justify-around items-center rounded-sm group outline-none md:h-[46px] md:w-[86px] h-[41px] w-[81px] bg-dark-grey text-white text-lg "
            onClick={() => setShowYearSelector(!showYearSelector)}
          >
            {userData.birthday.year}
            <GoTriangleUp
              size="30px"
              className={`${
                showYearSelector ? "rotate-180" : "rotate-0"
              } transition-all`}
            />
          </div>
        </div>
        {showYearSelector && (
          <div className=" pl-2 md:h-[150px] md:w-[90px] w-[85px] h-[130px] absolute flex flex-col bg-grey z-100 overflow-y-scroll rounded-b-md">
            {selectionBirthdayBox(years, "year", setShowYearSelector)}
          </div>
        )}
      </div>
    </div>
  );
}
