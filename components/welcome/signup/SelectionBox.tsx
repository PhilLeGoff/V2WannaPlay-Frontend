import { useAddToArray, useDeleteFromArray } from "@/hooks/useArrays";
import { UserData } from "@/interfaces/UserData";
import React from "react";

type SelectionBoxProps = {
  choices: string[];
  selectedArray: string[];
  arrayName: keyof UserData;
  setFunction: React.Dispatch<React.SetStateAction<UserData>>;
  setDisplay: React.Dispatch<React.SetStateAction<boolean>>;
};

const SelectionBox: React.FC<SelectionBoxProps> = ({
  choices,
  selectedArray,
  arrayName,
  setFunction,
  setDisplay,
}) => {
  const addToArray = useAddToArray;
  const deleteFromArray = useDeleteFromArray;

  return (
    <div className="h-[150px] w-[250px] absolute opacity-90 flex flex-col bg-grey z-100 overflow-y-scroll rounded-b-md z-50">
      {choices.map((choice) => {
        const isSelected = selectedArray.includes(choice);

        return (
          <section
            key={choice}
            className={`w-full h-8 text-white px-2 cursor-pointer
              `}
            onClick={() => {
              if (isSelected) {
                deleteFromArray({
                  arrayName,
                  value: choice,
                  setUserData: setFunction,
                });
              } else {
                addToArray({
                  arrayName,
                  value: choice,
                  setUserData: setFunction,
                });
              }
              setDisplay(false);
            }}
          >
            {choice}
          </section>
        );
      })}
    </div>
  );
};

export default SelectionBox;
