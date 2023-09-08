import React from "react";

type Props = {
  setSocialDisplay: React.Dispatch<React.SetStateAction<number>>;
  socialDisplay: number;
};

export default function SocialHeader({ setSocialDisplay }: Props) {
  return (
    <div className="grid grid-cols-2 w-full h-[80px] border-t-2 border-grey bg-green">
      <span className="flex justify-center items-center text-white text-lg pointer">
        Chats
      </span>
      <span className="flex justify-center items-center text-white text-lg pointer">
        Friends
      </span>
    </div>
  );
}
