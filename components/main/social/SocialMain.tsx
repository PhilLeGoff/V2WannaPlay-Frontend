import React, { useState } from "react";
import SocialHeader from "./SocialHeader";

type Props = {};

export default function SocialMain({}: Props) {
  const [socialDisplay, setSocialDisplay] = useState<number>(1);

  return (
    <div className="h-full w-full grid grid-rows-2-[1fr,12fr]">
      <SocialHeader
        socialDisplay={socialDisplay}
        setSocialDisplay={setSocialDisplay}
      />
      <div></div>
    </div>
  );
}
