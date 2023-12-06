import React from "react";

type Props = {
  buttonName: string;
  onClickFunction: any;
};

export default function SignButton({ buttonName, onClickFunction }: Props) {
  return (
    <div
      className="group flex justify-center items-center cursor-pointer rounded-xl m-0 p-0 md:h-[45px] md:w-[300px] h-[45px] w-[250px] bg-gradient-to-r bg-white hover:from-grad-green hover:via-grad-blue hover:to-grad-green"
      onClick={() => onClickFunction()}
    >
      <div className="flex flex-col bg-light-black rounded-xl p-0 m-0 justify-center items-center md:h-[43px] md:w-[298px] h-[43px] w-[248px]">
        <span className="text-white group-hover:bg-gradient-to-r group-hover:from-grad-green group-hover:to-grad-blue group-hover:bg-clip-text group-hover:text-opacity-0">
          {buttonName}
        </span>
      </div>
    </div>
  );
}
