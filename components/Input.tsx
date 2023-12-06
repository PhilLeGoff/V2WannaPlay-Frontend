import React, { useEffect } from "react";

interface UserData {
  username: string;
  email: string;
  password: string;
}

type Props = {
  setState: React.Dispatch<React.SetStateAction<any>>;
  type: string;
  value: string;
  placeholder: string;
};

export default function Input({ setState, type, value, placeholder }: Props) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setState(newValue);
  };
  return (
    <div
      className={`rounded-sm md:h-[45px] md:w-[300px] h-[45px] w-[250px] flex justify-center items-center  bg-grey hover:bg-gradient-to-r hover:from-grad-green hover:to-grad-blue focus-within:bg-gradient-to-r focus-within:from-grad-green focus-within:to-grad-blue`}
    >
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={handleInputChange}
        className="text-sm placeholder:text-sm pt-2 mb-[1px] rounded-b-sm group outline-none md:h-[44px] md:w-[300px] h-[44px] w-[250px] bg-light-black text-white "
      />
    </div>
  );
}
