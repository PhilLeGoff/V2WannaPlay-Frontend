import React from "react";

type Props = {
  buttonName: string;
  onClickFunction: any;
};

export default function Button({ buttonName, onClickFunction }: Props) {
  return (
    <div
      className="group cursor-pointer rounded-xl my-3 mb-6 md:mb-3 h-14 bg-gradient-to-r p-[3px] bg-white from-grad-green via-grad-blue to-grad-green"
      onClick={() => onClickFunction()}
    >
      <div className="flex flex-col h-full bg-black p-6 rounded-lg justify-center items-center ">
        <span className="text-white group-hover:bg-gradient-to-r group-hover:from-grad-green group-hover:to-grad-blue group-hover:bg-clip-text group-hover:text-opacity-0">
          {buttonName}
        </span>
      </div>
    </div>
  );
}
