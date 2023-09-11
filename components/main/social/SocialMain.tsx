import React, { useState } from "react";
import SocialHeader from "./SocialHeader";
import Chats from "./chats/Chats";
import Friends from "./friends/Friends";

type Props = {};

export default function SocialMain({}: Props) {
  const [socialDisplay, setSocialDisplay] = useState<number>(1);

  return (
    <div className="h-full w-full grid grid-rows-2-[1fr,12fr]">
      <SocialHeader
        socialDisplay={socialDisplay}
        setSocialDisplay={setSocialDisplay}
      />
      {socialDisplay === 1 ? <Chats /> : <Friends />}
    </div>
  );
}
