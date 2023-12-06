import React, { ComponentType } from "react";
import { IconContext } from "react-icons";
import styled from "styled-components";

type Props = {
  buttonName: string;
  onClickFunction: () => void;
  Icon: ComponentType<any>;
};

export default function SocialButton({
  buttonName,
  onClickFunction,
  Icon,
}: Props) {

  return (
    <div
      className="group flex justify-center items-center cursor-pointer rounded-xl m-0 p-0 md:h-[45px] md:w-[300px] h-[45px] w-[250px] bg-gradient-to-r bg-white hover:from-grad-green hover:via-grad-blue hover:to-grad-green"
      onClick={() => onClickFunction()}
    >
      <div className=" flex justify-around bg-light-black rounded-xl p-0 m-0  items-center md:h-[43px] md:w-[298px] h-[43px] w-[248px]">
        <span className="text-white hover:text-[#02FFC2]">
          <Icon
            size="18px"
            className="group-hover:text-[#02FFC2]"
            onMouseOver={(event: any) =>
              ((event.target as HTMLElement).style.color = "#02FFC2")
            }
            onMouseOut={(event: any) =>
              ((event.target as HTMLElement).style.color = "white")
            }
          />
        </span>
        <span className="mr-3 text-white text-sm group-hover:bg-gradient-to-r group-hover:from-grad-green group-hover:to-grad-blue group-hover:bg-clip-text group-hover:text-opacity-0">
          {buttonName}
        </span>
      </div>
    </div>
  );
}
