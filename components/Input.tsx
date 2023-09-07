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
      className={`rounded-sm md:h-[50px] md:w-[300px] h-[45px] w-[250px] flex justify-center items-center  bg-grey hover:bg-gradient-to-r hover:from-grad-green hover:to-grad-blue focus-within:bg-gradient-to-r focus-within:from-grad-green focus-within:to-grad-blue`}
    >
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={handleInputChange}
        className="p-4 rounded-sm group outline-none md:h-[46px] md:w-[296px] h-[41px] w-[246px] bg-dark-grey text-white text-lg "
      />
    </div>
  );
}
