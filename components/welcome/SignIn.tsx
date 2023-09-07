import Button from "@/components/Button";
import usePostData from "@/hooks/usePostData";
import { login } from "@/reducers/user";
import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import Input from "../Input";

type Props = {
  setShowSignIn: React.Dispatch<React.SetStateAction<boolean>>;
};

interface LoginData {
  username: string;
  password: string;
}

export default function SignIn({ setShowSignIn }: Props) {
  const [userData, setUserData] = useState<LoginData>({
    username: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState<string>("");
  const dispatch = useDispatch();

  async function postSignIn() {
    if (userData.username === "" || userData.password === "") {
      setErrorMessage("Please fill in all the fields");
    } else {
      const responseData = await usePostData({
        url: "http://localhost:3000/log/signin",
        data: { input: userData.username, password: userData.password },
      });
      console.log("REPONSE", responseData);
      if (responseData.result === false) {
        setErrorMessage("Invalid credentials");
        return;
      } else {
        dispatch(
          login({ token: responseData.token, username: responseData.useraname })
        );
      }
    }
  }
  useEffect(() => {
    console.log("errormessage", errorMessage);
  }, [errorMessage]);

  const handleStateChange = (fieldName: string, fieldValue: string) => {
    setUserData((prevUserData: any) => ({
      ...prevUserData,
      [fieldName]: fieldValue,
    }));
  };

  return (
    <div className="absolute inset-0 z-10 flex justify-center md:items-center md:h-full w-full h-[500px] bg-dark-grey bg-opacity-20">
      <div className="rounded-md md:h-[500px] md:w-[700px] w-full h-[400px] flex flex-col justify-between bg-black bg-opacity-80 md:bg-opacity-95">
        <header className="md:h-[70px] w-full flex justify-center items-center">
          <span className="ml-[70px] flex-grow h-full text-white md:text-xl text-lg flex justify-center items-center md:ml-[70px]">
            Sign into your account
          </span>
          <div className="h-[70px] w-[70px] flex justify-center items-center">
            <IoClose
              onClick={() => setShowSignIn(false)}
              color="white"
              size="45px"
            />
          </div>
        </header>
        <div className="w-full h-[200px] md:h-[200px] flex flex-col justify-around items-center">
          <Input
            value={userData.username}
            setState={(value: string) => handleStateChange("username", value)}
            type="text"
            placeholder="username/email"
          />
          <Input
            value={userData.password}
            setState={(value: string) => handleStateChange("password", value)}
            type="text"
            placeholder="password"
          />
        </div>
        <div className="md:h-[130px] w-full h-[200px] flex flex-col justify-around items-center">
          <p className="text-lg md:w-[300px] text-red md:self-center flex justify-center md:place-self-center md:static bottom-28 md:bottom-0">
            {errorMessage}
          </p>
          <Button buttonName="SIGN IN" onClickFunction={postSignIn} />
        </div>
      </div>
    </div>
  );
}
