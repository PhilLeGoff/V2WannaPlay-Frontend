import user from "@/reducers/user";
import React from "react";
import { useSelector } from "react-redux";

type Props = {
  setSocialDisplay: React.Dispatch<React.SetStateAction<number>>;
  socialDisplay: number;
};

export default function SocialHeader({ setSocialDisplay }: Props) {
  const userData = useSelector((state: any) => state.user.value);

  return (
    <div className="grid grid-cols-2 w-full h-[80px] border-t-2 border-grey bg-green m-0 p-0">
      <span
        className="flex justify-center items-center text-white text-lg pointer"
        onClick={() => setSocialDisplay(1)}
      >
        Chats
      </span>
      <span
        className="flex justify-center items-center text-white text-lg pointer"
        onClick={() => setSocialDisplay(2)}
      >
        Friends
      </span>
    </div>
  );
}
